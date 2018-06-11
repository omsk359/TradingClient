import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ApiService} from "../../api.service";
import {Store} from "@ngrx/store";
import _ from 'lodash';
import ConfirmDialogComponent from "../../confirm-dialog.component";
import {MatDialog} from "@angular/material";
import {CcxtActionTypes, ExchangesLoad, LoadSuccess, MarketsLoad} from "../../actions";
import {AlgoState, LoadState} from "../../reducers";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";
import {Subscription} from "rxjs/internal/Subscription";


@Component({
  selector: 'app-algo-list',
  templateUrl: './algo-list.component.html',
  styleUrls: ['./algo-list.component.css']
})
export class AlgoListComponent implements OnInit {

  @Output('addTab') addTabEvent = new EventEmitter<{market: string, exchange: string}>();
  @Output() delAlgo = new EventEmitter<AlgoState>();
  @Output() openAlgo = new EventEmitter<AlgoState>();
  @Output() resumeAlgo = new EventEmitter<string>();
  @Output() stopAlgo = new EventEmitter<string>();

  market: string;
  exchange: string;

  exchanges: string[] = [];
  markets: {[exchange: string]: string[]} = {};

  algoList$: Observable<AlgoState[]>;
  exchangesLoad$: Observable<LoadState>;
  marketsLoad$: Observable<LoadState>;

  ccxtSub: Subscription;

  constructor(private api: ApiService, private store: Store<any>, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadExchanges();
    this.ccxtSub = this.api.ccxt$.subscribe(data => {
      this.exchanges = data.exchanges;
      this.markets = _.mapValues(data.markets, markets => _.keys(markets));
    });
    this.algoList$ = this.api.trading$.pipe(map(data => _.map(data, ({algo}, id) => algo)));
    this.exchangesLoad$ = this.api.loading$.pipe(map(data => data[CcxtActionTypes.ExchangesLoad]));
    this.marketsLoad$ = this.api.loading$.pipe(map(data => data[CcxtActionTypes.MarketsLoad]));
  }

  ngOnDestroy() {
    this.ccxtSub && this.ccxtSub.unsubscribe();
  }

  loadExchanges() {
    this.store.dispatch(new ExchangesLoad());
  }

  loadMarkets(exchange) {
    if (exchange in this.markets) {
      this.store.dispatch(new LoadSuccess(new MarketsLoad()));  // reset error
      return;
    }
    this.store.dispatch(new MarketsLoad([exchange]));
  }

  delAlgoConfirm(algo) {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.delAlgo.emit(algo);
    });
  }

  addTab() {
    this.addTabEvent.emit({ market: this.market, exchange: this.exchange })
  }
}
