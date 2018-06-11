import {Action} from "@ngrx/store";
import {ExchangeResult} from "../reducers";

export enum CcxtActionTypes {
  MarketsLoad = '[CCXT] Markets Load',
  MarketsSet = '[CCXT] Markets Set',
  ExchangesLoad = '[CCXT] Exchanges Load',
  ExchangesSet = '[CCXT] Exchanges Set',
  BalancesLoad = '[CCXT] Balances Load',
  BalancesSet = '[CCXT] Balances Set',

  OrderbookLoad = '[CCXT] Orderbook Load',
  OrderbookSet = '[CCXT] Orderbook Set',
  MyOrdersLoad = '[CCXT] MyOrders Load',
  MyOrdersSet = '[CCXT] MyOrders Set',
  OrderCancel = '[CCXT] Order Cancel',
  TickLoad = '[CCXT] Tick Load',
  TickSet = '[CCXT] Tick Set',
  MarketInfoLoad = '[CCXT] MarketInfo Load',
  MarketInfoSet = '[CCXT] MarketInfo Set',
}

export class MarketsLoad implements Action {
  readonly type = CcxtActionTypes.MarketsLoad;

  constructor(public payload?: string[]) {}
}
export class MarketsSet implements Action {
  readonly type = CcxtActionTypes.MarketsSet;

  constructor(public payload: any) {}
}
export class ExchangesLoad implements Action {
  readonly type = CcxtActionTypes.ExchangesLoad;

  constructor() {}
}
export class ExchangesSet implements Action {
  readonly type = CcxtActionTypes.ExchangesSet;

  constructor(public payload: string[]) {}
}
export class BalancesLoad implements Action {
  readonly type = CcxtActionTypes.BalancesLoad;

  constructor(public payload?: { exchanges: string[] }) {}
}
export class BalancesSet implements Action {
  readonly type = CcxtActionTypes.BalancesSet;

  constructor(public payload: ExchangeResult) {}
}

export class OrderbookLoad implements Action {
  readonly type = CcxtActionTypes.OrderbookLoad;

  constructor(public payload: { exchange: string, market: string }) {}
}
export class OrderbookSet implements Action {
  readonly type = CcxtActionTypes.OrderbookSet;

  // constructor(public payload: { exchange: string, market: string, result: { bids: number[][], asks: number[][] }}) {}
  constructor(public payload: { exchange: string, market: string, result: { bids: any, asks: any }}) {}
}
export class MyOrdersLoad implements Action {
  readonly type = CcxtActionTypes.MyOrdersLoad;

  constructor(public payload: { exchange: string, market: string }) {}
}
export class MyOrdersSet implements Action {
  readonly type = CcxtActionTypes.MyOrdersSet;

  constructor(public payload: { exchange: string, market: string, result: any }) {}
}
export class OrderCancel implements Action {
  readonly type = CcxtActionTypes.OrderCancel;

  constructor(public payload: { id: string, orderType: string, exchange: string, market: string }) {}
}
export class TickLoad implements Action {
  readonly type = CcxtActionTypes.TickLoad;

  constructor(public payload: { exchange: string, market: string }) {}
}
export class TickSet implements Action {
  readonly type = CcxtActionTypes.TickSet;

  constructor(public payload: { exchange: string, market: string, result: any }) {}
}
export class MarketInfoLoad implements Action {
  readonly type = CcxtActionTypes.MarketInfoLoad;

  constructor(public payload: { exchange: string, market: string }) {}
}
export class MarketInfoSet implements Action {
  readonly type = CcxtActionTypes.MarketInfoSet;

  constructor(public payload: { exchange: string, market: string, result: any }) {}
}

export type CcxtActionsUnion =
  | MarketsLoad
  | MarketsSet
  | ExchangesLoad
  | ExchangesSet
  | BalancesLoad
  | BalancesSet
  | OrderbookLoad
  | OrderbookSet
  | MyOrdersLoad
  | MyOrdersSet
  | OrderCancel
  | TickLoad
  | TickSet
  | MarketInfoLoad
  | MarketInfoSet;
