import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {WebSocketService} from "./websocket.service";
import {Observable, of, Subject} from "rxjs/index";
import { map, catchError, filter, share, tap } from 'rxjs/operators';
import {MatSnackBar} from "@angular/material";
import _ from 'lodash';
import { Store, select } from '@ngrx/store';
import {CcxtActionTypes} from "./actions";
import {AppState, AuthState} from "./reducers";
import {UserDataState} from "./reducers";
import {CcxtState} from "./reducers";
import {LoadingState} from "./reducers";
import {TradingState} from "./reducers";
import {TradingItemState} from "./reducers";
import {ExchangeResult, MarketResult} from "./reducers";
import {AlgoState, TradingMarketState} from "./reducers";
import {AuthService} from "./auth.service";


const apiBase = 'api';

export interface WsMessage {
  jsonrpc: string;
  method: string;
  params: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  messages: Subject<WsMessage>;

  userData$: Observable<UserDataState>;
  ccxt$: Observable<CcxtState>;
  loading$: Observable<LoadingState>;
  trading$: Observable<TradingState>;
  auth$: Observable<AuthState>;

  constructor(private store: Store<AppState>, private http: HttpClient,
              private wsService: WebSocketService, private snackBar: MatSnackBar,
              private authService: AuthService) {

    this.userData$ = store.select('userData');
    this.ccxt$ = store.select('ccxt');
    this.loading$ = store.select('loading');
    this.trading$ = store.select('trading');
    this.auth$ = store.select('auth');

    this.auth$.subscribe(() => {

      if (!this.messages && this.token) {
        let wsHost = (window.document.location.origin || (window.location.protocol + '//' + window.location.host)).replace(/^http/, 'ws');
        let wsUrl = wsHost + '?access_token=' + this.token;
        console.log('wsUrl', wsUrl);

        this.messages = <Subject<WsMessage>>this.wsService
          .connect(wsUrl)
          .pipe(map((response: MessageEvent): WsMessage => {
            return JSON.parse(response.data);
          }), share());
      }
    });
  }

  selectMarket(ex, market) {
    return this.store.select(({ccxt: {markets: m, balances: b, loading: l, orderbooks: ob, myOrders: my, tick: t, marketInfo: mI}}) => {
      let markets = _.get(m, ex, {});
      let balances = _.get(b, ex, {});
      let initLoad = { loading: false, loaded: false };
      let loadingEx = _.get(l, ex, {});

      let loading = _.get(l, `${ex}.${market}`, {});
      let orderbook = _.get(ob, `${ex}.${market}`, {});
      let myOrders = _.get(my, `${ex}.${market}`, []);
      let tick = _.get(t, `${ex}.${market}`, {});
      let marketInfo = _.get(mI, `${ex}.${market}`, {});

      balances.load = loadingEx[CcxtActionTypes.BalancesLoad] || initLoad;
      orderbook.load = loading[CcxtActionTypes.OrderbookLoad] || initLoad;
      myOrders.load = loading[CcxtActionTypes.MyOrdersLoad] || initLoad;
      tick.load = loading[CcxtActionTypes.TickLoad] || initLoad;
      marketInfo.load = loading[CcxtActionTypes.MarketInfoLoad] || initLoad;

      return {
        markets, balances, loading, orderbook,
        myOrders, tick, marketInfo,
      }
    });
  }

  selectAlgo(id): Observable<TradingItemState> {
    return this.store.select(state => state.trading[id] || <any>{});
  }


  getUserData() {
    return this.http.post<UserDataState>(apiBase + '/user/getData', {}, this.httpOptions);
  }
  saveUserData(userData) {
    return this.http.post(apiBase + '/user/saveData', userData, this.httpOptions);
  }
  ccxtGetBalances(exchanges = []) {
    return this.http.post<ExchangeResult[]>(apiBase + '/ccxt/getBalances', {exchanges}, this.httpOptions);
  }
  ccxtStartTrading(params) {
    return this.http.post<AlgoState>(apiBase + '/ccxt/startTrading', params, this.httpOptions);
  }
  ccxtStopTrading(id) {
    return this.http.post<AlgoState>(apiBase + '/ccxt/stopTrading', {id}, this.httpOptions);
  }
  ccxtRestoreTrading(algoId) {
    return this.http.post<AlgoState>(apiBase + '/ccxt/startTrading', {algoId}, this.httpOptions);
  }
  ccxtUpdateCfg(algoId, cfg) {
    return this.http.post(apiBase + '/ccxt/updateCfg', {algoId, cfg}, this.httpOptions);
  }
  ccxtAddLvl() {
    return this.http.post<any>(apiBase + '/ccxt/addLvl', {}, this.httpOptions);
  }
  ccxtAlgoList() {
    return this.http.post<AlgoState[]>(apiBase + '/ccxt/algoList', {}, this.httpOptions);
  }
  ccxtDelAlgo(id) {
    return this.http.post<any>(apiBase + '/ccxt/delAlgo', {id}, this.httpOptions);
  }
  ccxtGetMarkets(exchanges) {
    return this.http.post<ExchangeResult[]>(apiBase + '/ccxt/getMarkets', { exchanges }, this.httpOptions);
  }
  ccxtGetExchanges() {
    return this.http.post<string[]>(apiBase + '/ccxt/getExchanges', {}, this.httpOptions);
  }
  loadTradingLogViaWS(algoId) {
    return this.http.post(apiBase + '/ccxt/loadTradingLogViaWS', { algoId }, this.httpOptions);
  }
  loadAlgoDataWS(id) {
    return this.http.post(apiBase + '/ccxt/loadAlgoDataWS', {id}, this.httpOptions);
  }
  wsMethod(method) {
    return this.messages.pipe(filter((m: WsMessage) => m.method === method), map(m => m.params));
  }
  ccxtTradingLog(id) {
    return this.wsMethod(`ccxt.tradingLog.${id}`);
  }
  ccxtTradingMarketState(id): Observable<TradingMarketState> {
    return this.wsMethod(`ccxt.tradingMarketState.${id}`);
  }
  ccxtTradingState(id): Observable<AlgoState> {
    return this.wsMethod(`ccxt.tradingState.${id}`);
  }
  ccxtMethod(params: { method: string, exchange?: string, market?: string }) {
    return this.http.post<MarketResult>(apiBase + '/ccxt/getMethod', params, this.httpOptions);
  }
  tradingMethod(params) {
    return this.http.post<any>(apiBase + '/ccxt/tradingMethod', params, this.httpOptions);
  }

  get httpOptions() {
    let headers = {
      'Content-Type':  'application/json',
    };
    if (this.token)
      headers['Authorization'] = 'Bearer ' + this.token;

    return {
      headers: new HttpHeaders(headers)
    };
  }

  get token() {
    return this.authService.token;
  }

  showMsg(msg: string) {
    console.log('showMsg', msg);
    this.snackBar.open(msg, '', {
      duration: 5000,
    });
  }

  showError(error: any) {
    console.log('showError', error);
    let err = error.error || error.message || error;
    this.snackBar.open(err, '', {
      duration: 5000,
    });
  }
}
