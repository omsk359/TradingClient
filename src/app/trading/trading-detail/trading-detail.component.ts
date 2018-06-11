import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {Store} from "@ngrx/store";
import _ from 'lodash';
import {MatDialog} from '@angular/material';
import ConfirmDialogComponent from '../../confirm-dialog.component';
import {Observable, Subscription} from "rxjs/index";
import {
  AlgoStateWS,
  BalancesLoad, LogLoad,
  LogWS, LvlDelReq, MarketInfoLoad,
  MarketStateWS,
  MyOrdersLoad,
  OrderbookLoad,
  OrderCancel,
  TickLoad
} from "../../actions";
import {AlgoState, AppState, TradingMarketState} from "../../reducers";
import {map} from "rxjs/operators";
import {BalanceState} from "../../reducers";
import {MarketInfoState, OrderbookState, TickState} from "../../reducers";
import {MyOrderState} from "../../reducers";
import {TradingCfgState, TradingParamsState} from "../../reducers/userdata.reducer";


@Component({
  selector: 'app-trading-detail',
  templateUrl: './trading-detail.component.html',
  styleUrls: ['./trading-detail.component.css']
})
export class TradingDetailComponent implements OnInit {

  @Input() algoId: string;
  @Input() market: string;
  @Input() exchange: string;

  @Output() startAlgo = new EventEmitter<TradingCfgState>();
  @Output() resumeAlgo = new EventEmitter<string>();
  @Output() stopAlgo = new EventEmitter<string>();

  algo: AlgoState;
  msgs = [];
  marketState: TradingMarketState;
  tradingParams$: Observable<TradingParamsState>;
  balances: BalanceState;
  baseCurrency: string;
  partnerCurrency: string;

  orderbook: OrderbookState;
  myOrders: MyOrderState[];
  tick: TickState;
  marketInfo: MarketInfoState;

  userDataSub: Subscription;
  marketSub: Subscription;
  algoSub: Subscription;

  constructor(private api: ApiService, private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit() {
    let [base, partner] = this.market.split('/');
    this.baseCurrency = base;
    this.partnerCurrency = partner;

    this.tradingParams$ = this.api.userData$.pipe(map(({tradingParams}) => tradingParams));

    this.marketSub = this.api.selectMarket(this.exchange, this.market).subscribe(({loading, balances, orderbook, myOrders, tick, marketInfo}) => {
      // console.log('{loading, balances, orderbook, myOrders, tick, marketInfo} ----> ', loading, balances, orderbook, myOrders, tick, marketInfo);
      this.balances = balances;
      this.myOrders = myOrders;
      this.orderbook = orderbook;
      this.tick = tick;
      this.marketInfo = marketInfo;
    });

    this.algoSub = this.api.selectAlgo(this.algoId).subscribe(({algo, market, log=[]}) => {
      // console.log('{algo, market} ++++++> ', algo, market);
      this.algo = algo;
      this.marketState = market;
      if (log.length > this.msgs.length)
        this.msgs.push(...log.slice(this.msgs.length));
    });

    if (!this.algoId) {
      this.loadMyOrders();
      this.loadOrderbook();
      this.loadTick();
      this.loadMarketInfo();
      this.loadBalances();
    } else {
      this.store.dispatch(new MarketStateWS(this.algoId));
      this.store.dispatch(new AlgoStateWS(this.algoId));
      this.store.dispatch(new LogWS(this.algoId));
    }
  }

  ngOnDestroy() {
    this.userDataSub && this.userDataSub.unsubscribe();
    this.marketSub && this.marketSub.unsubscribe();
    this.algoSub && this.algoSub.unsubscribe();
  }

  get amountFmt() {
    let p = _.get(this.marketState, 'amount_precision', 4);
    return `1.${0}-${p}`;
  }
  get priceFmt() {
    let p = _.get(this.marketState, 'price_precision', 8);
    return `1.${0}-${p}`;
  }

  delOrder(order) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.store.dispatch(new OrderCancel({id: order.id, orderType: order.side, exchange: this.exchange, market: this.market}));
    });
  }

  loadBalances() {
    this.store.dispatch(new BalancesLoad({exchanges: [this.exchange]}));
  }
  loadMyOrders() {
    this.store.dispatch(new MyOrdersLoad({exchange: this.exchange, market: this.market}));
  }
  loadOrderbook() {
    this.store.dispatch(new OrderbookLoad({exchange: this.exchange, market: this.market}));
  }
  loadTick() {
    this.store.dispatch(new TickLoad({exchange: this.exchange, market: this.market}));
  }
  loadMarketInfo() {
    this.store.dispatch(new MarketInfoLoad({exchange: this.exchange, market: this.market}));
  }
  loadLog() {
    this.msgs = [];
    this.store.dispatch(new LogLoad({ id: this.algoId }));
  }

  start(cfg) {
    this.startAlgo.emit(cfg);
  }
  stop() {
    this.stopAlgo.emit(this.algoId);
  }
  restore() {
    this.resumeAlgo.emit(this.algoId);
  }

  updateCfg(cfg) {
    this.api.ccxtUpdateCfg(this.algoId, cfg).subscribe();
  }

  delLvl(index) {
    this.store.dispatch(new LvlDelReq({id: this.algoId, index}));
  }
}
