import {from, Observable, of} from "rxjs/index";
import {
  BalancesLoad, BalancesSet,
  CcxtActionTypes,
  ExchangesLoad, ExchangesSet, LoadFail, LoadStart,
  LoadSuccess,
  MarketInfoLoad, MarketInfoSet, MarketsLoad, MarketsSet,
  MyOrdersLoad, MyOrdersSet,
  OrderbookLoad, OrderbookSet,
  OrderCancel, ShowError, TickLoad, TickSet
} from "../actions";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Action, Store} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../api.service";
import _ from 'lodash';

@Injectable()
export class CcxtEffects {

  @Effect()
  markets$: Observable<Action> = this.actions$.pipe(
    ofType<MarketsLoad>(CcxtActionTypes.MarketsLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtGetMarkets(action.payload).pipe(
        mergeMap(arr => from(arr.map(item => {
          if (item.error) throw new Error(item.error);
          return new MarketsSet(item);
        }))),
        // concat(of({type: LOADING_SUCCESS, payload: action})),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  exchanges$: Observable<Action> = this.actions$.pipe(
    ofType<ExchangesLoad>(CcxtActionTypes.ExchangesLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtGetExchanges().pipe(
        map(exchanges => (new ExchangesSet(exchanges))),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail({...action, error})))
      )
    )
  );

  @Effect()
  balances$: Observable<Action> = this.actions$.pipe(
    ofType<BalancesLoad>(CcxtActionTypes.BalancesLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtGetBalances(_.get(action, 'payload.exchanges')).pipe(
        mergeMap(arr => from(arr.map(item => {
          if (item.error) throw new Error(item.error);
          return new BalancesSet(item);
        }))),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  orderbook$: Observable<Action> = this.actions$.pipe(
    ofType<OrderbookLoad>(CcxtActionTypes.OrderbookLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtMethod({method: 'orderbook', ...action.payload}).pipe(
        map((res) => {
          if (res.error) throw new Error(res.error);
          return new OrderbookSet(<{ market: string, exchange: string, result: {bids: any, asks: any} }>res);
        }),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  myOrders$: Observable<Action> = this.actions$.pipe(
    ofType<MyOrdersLoad>(CcxtActionTypes.MyOrdersLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtMethod({method: 'myOrders', ...action.payload}).pipe(
        map(res => {
          if (res.error) throw new Error(res.error);
          return new MyOrdersSet(<any>res);
        }),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  tick$: Observable<Action> = this.actions$.pipe(
    ofType<TickLoad>(CcxtActionTypes.TickLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtMethod({method: 'tick', ...action.payload}).pipe(
        map(res => {
          if (res.error) throw new Error(res.error);
          return new TickSet(<any>res);
        }),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  marketInfo$: Observable<Action> = this.actions$.pipe(
    ofType<MarketInfoLoad>(CcxtActionTypes.MarketInfoLoad),
    tap(action => this.store.dispatch(new LoadStart(action))),
    switchMap(action =>
      this.api.ccxtMethod({method: 'marketInfo', ...action.payload}).pipe(
        map(res => {
          if (res.error) throw new Error(res.error);
          return new MarketInfoSet(<any>res);
        }),
        tap(() => this.store.dispatch(new LoadSuccess(action))),
        catchError(error => of(new LoadFail(<any>{...action, error})))
      )
    )
  );

  @Effect()
  cancelOrder$: Observable<Action> = this.actions$.pipe(
    ofType<OrderCancel>(CcxtActionTypes.OrderCancel),
    switchMap(action =>
      this.api.ccxtMethod(<any>{method: 'cancelOrder', ...action.payload}).pipe(
        map(res => {
          if (res.error) throw new Error(res.error);
          return new MyOrdersLoad(action.payload);
        }),
        catchError(error => of(new ShowError(error)))
      )
    )
  );

  constructor(private http: HttpClient, private actions$: Actions, private api: ApiService, private store: Store<any>) {}
}
