import {TradingActionsUnion, TradingActionTypes} from "../actions";
import _ from 'lodash';

export interface TradingItemState {
  algo: AlgoState,
  market: TradingMarketState,
  log: any[]
}

export interface LvlState {
  _state: string,
  _order_id: string,
  _type: string,
  _buy_price: number,
  _sell_price: number,
  _order_amount: number,
  _gain_mod: string,
  gain: number
}
export interface BalanceCurrencyState {
  free: number,
  used: number,
  total: number
}
export interface BalanceState {
  [currency: string]: BalanceCurrencyState
}
export interface AlgoDataState {
  cfg: any,
  market: string,
  base_currency: string,
  partner_currency: string,
  exchange: string,
  profit: number,
  LVLs: LvlState[],
  finished_LVLs: LvlState[],
  balance_before: BalanceState,
  balance: BalanceState,
  state: string
}
export interface AlgoState {
  _id: string,
  type: string,
  data: AlgoDataState
}
export interface MyOrderState {
  id: string;
  side: string,
  price: number,
  amount: number,
  filled: number,
  remaining: number
}

export interface TradingMarketState {
  symbol: string,
  base_currency: string,
  partner_currency: string,
  exchange: string,
  market: string,
  fee: number,
  high: number,
  low: number,
  min_amount: number,
  price_precision: number,
  amount_precision: number,
  orders_buy: { _price: number, _amount: number }[],
  orders_sell: { _price: number, _amount: number }[],
  my_orders: MyOrderState[]
}

export interface TradingState {
  [algoId: string]: TradingItemState;
}

export function tradingReducer(state: TradingState = {}, action: TradingActionsUnion): TradingState {
  switch (action.type) {
    case TradingActionTypes.AlgoStateSet:
      var { id, result } = action.payload;
      return {...state, [id]: {...state[id], algo: result } };
    case TradingActionTypes.AlgoStateDel:
      var { id } = action.payload;
      return _.omit(state, id);
    case TradingActionTypes.MarketStateSet:
      var { id, result } = action.payload;
      return {...state, [id]: {...state[id], market: result } };
    case TradingActionTypes.LogAppend:
      var { id, log } = action.payload, logSt = _.get(state, `${id}.log`, []);
      return {...state, [id]: {...state[id], log: [...logSt, ...log] } };
    case TradingActionTypes.LvlDel:
      var { id, index } = action.payload;
      var algo = state[id].algo || <any>{data:{LVLs: []}}, data = algo.data, LVLs = data.LVLs;
      LVLs = _.without(LVLs, LVLs[index]);
      return {...state, [id]: {...state[id], algo: {...algo, data: {...data, LVLs} } } };
    case TradingActionTypes.LogSet:
      var { id, log } = action.payload;
      return {...state, [id]: {...state[id], log } };

    default:
      return state;
  }
}
