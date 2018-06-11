import {LoadingActionsUnion, LoadingActionTypes, CcxtActionsUnion, CcxtActionTypes} from "../actions";
import _ from 'lodash';
import {BalanceState, MyOrderState} from "./trading.reducer";
import {LoadState} from "./loading.reducer";

export interface CcxtState {
  markets: {[exchange: string]: {[market: string]: MarketInfoState}};
  exchanges: string[];
  balances: {[exchange: string]: BalanceState};
  loading: {[exchange: string]: LoadState};
  orderbooks: {[exchange: string]: {[market: string]: OrderbookState}};
  myOrders: {[exchange: string]: {[market: string]: MyOrderState[]}};
  tick: {[exchange: string]: {[market: string]: TickState}};

  // TODO: markets
  marketInfo: {[exchange: string]: {[market: string]: MarketInfoState}};
}

export interface TickState {
  bid: number;
  ask: number;
  high: number;
  low: number;
}
export interface MarketInfoState {
  maker: number;
  taker: number;
}
export interface OrderbookState {
  bids: number[][];
  asks: number[][];
}

const ccxtInitialState: CcxtState = {
  markets: {},
  exchanges: [],
  balances: {},
  loading: {},
  orderbooks: {},
  myOrders: {},
  tick: {},
  marketInfo: {}
};

export interface ExchangeResult {
  exchange: string;
  result: any;
  error: any;
}
export interface MarketResult {
  exchange: string;
  market: string;
  result: any;
  error: any;
}

export function ccxtReducer(state = ccxtInitialState, action: CcxtActionsUnion | LoadingActionsUnion): CcxtState {

  // {loading: {exchange: {market: {loaded: true, ...}}}}
  let ccxtLoadingState = load => {
    let { type, payload } = <any>(action as LoadingActionsUnion).payload, {exchange, exchanges, market} = payload||<any>{};
    if (!exchanges && _.includes([CcxtActionTypes.BalancesLoad], type)) {
      exchanges = state.exchanges;
    } else if (!exchanges && exchange)
      exchanges = [exchange];
    if (!exchanges) return state;
    if (!market) {
      let loading = exchanges.reduce((loading, ex) => ({
        ...loading,
        [ex]: {...loading[ex], [type]: load}
      }), state.loading);
      return {...state, loading};
    }
    // market in payload -> single exchange
    let ex = state.loading[exchange] || {}, m = ex[market] || {};
    return {...state, loading: {...state.loading, [exchange]: {...ex, [market]: {...m, [type]: load}}}};
  };

  let exchange: string, market: string, result: any;

  switch (action.type) {
    case CcxtActionTypes.ExchangesSet:
      return {...state, exchanges: action.payload};
    case CcxtActionTypes.MarketsSet:
      ({ exchange, result } = action.payload);
      return {...state, markets: {...state.markets, [exchange]: result} };
    case CcxtActionTypes.BalancesSet:
      ({ exchange, result } = action.payload);
      return {...state, balances: {...state.balances, [exchange]: result} };
    case CcxtActionTypes.OrderbookSet:
      ({ exchange, market, result } = action.payload);
      var ex = {...state.orderbooks[exchange], [market]: result };
      return {...state, orderbooks: {...state.orderbooks, [exchange]: ex } };
    case CcxtActionTypes.MyOrdersSet:
      ({ exchange, market, result } = action.payload);
      var ex = {...state.myOrders[exchange], [market]: result };
      return {...state, myOrders: {...state.myOrders, [exchange]: ex } };
    case CcxtActionTypes.TickSet:
      ({ exchange, market, result } = action.payload);
      var ex = {...state.tick[exchange], [market]: result };
      //if (_.get(state, `tick.${exchange}.${market}.timestamp`, 0) < result.timestamp)
      return {...state, tick: {...state.tick, [exchange]: ex } };
    case CcxtActionTypes.MarketInfoSet:
      ({ exchange, market, result } = action.payload);
      var ex = {...state.marketInfo[exchange], [market]: result };
      return {...state, marketInfo: {...state.marketInfo, [exchange]: ex } };

    case LoadingActionTypes.LoadStart:
      return ccxtLoadingState({ loading: true, loaded: false, error: null });
    case LoadingActionTypes.LoadSuccess:
      return ccxtLoadingState({ loading: false, loaded: true, error: null });
    case LoadingActionTypes.LoadFail:
      return ccxtLoadingState({ loading: false, loaded: false, error: action.payload.error });

    default:
      return state;
  }
}
