import {from, Observable, of} from "rxjs/index";
import {
  AlgoDel,
  AlgoListLoad, AlgoStateDel, AlgoStateSet, AlgoStateWS,
  LoadFail,
  LoadStart,
  LoadSuccess, LogAppend, LogLoad, LogSet, LogWS, LvlDel, LvlDelReq,
  MarketInfoLoad,
  MarketInfoSet,
  MarketStateSet,
  MarketStateWS,
  MyOrdersLoad,
  MyOrdersSet,
  OrderbookLoad,
  OrderbookSet,
  ShowError,
  TabSet,
  TickLoad,
  TickSet,
  TradingActionTypes, TradingResume,
  TradingStart, TradingStop
} from "../actions";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {Action, Store} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class TradingEffects {

  @Effect()
  tradingMarketState$: Observable<Action> = this.actions$.pipe(
    ofType<MarketStateWS>(TradingActionTypes.MarketStateWS),
    switchMap(action =>
      this.api.ccxtTradingMarketState(action.algoId).pipe(
        switchMap((marketState: any) => {
          let { exchange, market, orders_buy, orders_sell, my_orders, tick, marketInfo } = marketState;

          let actions: Action[] = [
            new MyOrdersSet({ exchange, market, result: my_orders }),
            new TickSet({ exchange, market, result: tick }),
            new MarketInfoSet({ exchange, market, result: marketInfo }),

            new LoadSuccess(new MyOrdersLoad({exchange, market})),
            new LoadSuccess(new TickLoad({exchange, market})),
            new LoadSuccess(new MarketInfoLoad({exchange, market})),

            new MarketStateSet({ id: action.algoId, result: marketState }),
          ];
          if (orders_buy) {
            let ordersMap = orders => orders.map(({_amount, _price}: any) => [_price, _amount]);
            let bids = ordersMap(orders_buy), asks = ordersMap(orders_sell);
            actions.push(
              new OrderbookSet({ exchange, market, result: { bids, asks } }),
              new LoadSuccess(new OrderbookLoad({exchange, market})),
            );
          }
          return from(actions);
        }),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  tradingAlgo$: Observable<Action> = this.actions$.pipe(
    ofType<AlgoStateWS>(TradingActionTypes.AlgoStateWS),
    tap(action => this.api.loadAlgoDataWS(action.algoId).subscribe()),
    switchMap(action =>
      this.api.ccxtTradingState(action.algoId).pipe(
        map(result => new AlgoStateSet({ id: action.algoId, result })),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  tradingLog$: Observable<Action> = this.actions$.pipe(
    ofType<LogWS>(TradingActionTypes.LogWS),
    switchMap(action =>
      this.api.ccxtTradingLog(action.algoId).pipe(
        map(log => new LogAppend({ id: action.algoId, log: Array.isArray(log) ? log : [log] })),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  tradingLogSet$: Observable<Action> = this.actions$.pipe(
    ofType<LogLoad>(TradingActionTypes.LogLoad),
    switchMap(action =>
      this.api.tradingMethod({method: 'loadLog', ...action.payload}).pipe(
        map(log => new LogSet({ id: action.payload.id, log: Array.isArray(log) ? log : [log] })),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  startTrading$: Observable<Action> = this.actions$.pipe(
    ofType<TradingStart>(TradingActionTypes.TradingStart),
    mergeMap(action =>
      this.api.ccxtStartTrading(action.payload).pipe(
        switchMap((result: any) => from([
          new AlgoStateSet({ id: result._id, result }),
          new TabSet({ algoId: result._id, i: action.payload.tabIndex }),
        ])),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  resumeTrading$: Observable<Action> = this.actions$.pipe(
    ofType<TradingResume>(TradingActionTypes.TradingResume),
    mergeMap(action =>
      this.api.ccxtRestoreTrading(action.algoId).pipe(
        map(result => new AlgoStateSet({ id: result._id, result })),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  stopTrading$: Observable<Action> = this.actions$.pipe(
    ofType<TradingStop>(TradingActionTypes.TradingStop),
    mergeMap(action =>
      this.api.ccxtStopTrading(action.algoId).pipe(
        map(result => new AlgoStateSet({ id: result._id, result })),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  @Effect()
  listAlgo$: Observable<Action> = this.actions$.pipe(
    ofType<AlgoListLoad>(TradingActionTypes.AlgoListLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtAlgoList().pipe(
        switchMap(list => from(list.map(result => new AlgoStateSet({ id: result._id, result })))),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail({...action, error})))
      )
    )
  );

  @Effect()
  delAlgo$: Observable<Action> = this.actions$.pipe(
    ofType<AlgoDel>(TradingActionTypes.AlgoDel),
    switchMap(action =>
      this.api.ccxtDelAlgo(action.payload.id).pipe(
        map(result => new AlgoStateDel({ id: action.payload.id })),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  delLvl$: Observable<Action> = this.actions$.pipe(
    ofType<LvlDelReq>(TradingActionTypes.LvlDelReq),
    switchMap(action =>
      this.api.tradingMethod({method: 'delLvl', ...action.payload}).pipe(
        map(res => {
          if (res.error) throw new Error(res.error);
          return new LvlDel(action.payload);
        }),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions, private api: ApiService, private store: Store<any>) {}
}
