import {Action} from "@ngrx/store";

export enum TradingActionTypes {
  AlgoListLoad = '[Trading] Algo list Load',
  TradingStart = '[Trading] Trading Start',
  TradingResume = '[Trading] Trading Resume',
  TradingStop = '[Trading] Trading Stop',
  AlgoDel = '[Trading] Algo Delete',

  MarketStateWS = '[Trading] Market State WebSocket',
  AlgoStateWS = '[Trading] Algo State WebSocket',
  LogWS = '[Trading] Algo Log WebSocket',
  LogLoad = '[Trading] Log Load',
  LogSet = '[Trading] Log Set',
  AlgoStateSet = '[Trading] Algo State Set',
  AlgoStateDel = '[Trading] Algo State Del',
  MarketStateSet = '[Trading] Market State Set',
  LogAppend = '[Trading] Log Append',
  LvlDelReq = '[Trading] Level Delete Request',
  LvlDel = '[Trading] Level Delete',
}
export class AlgoListLoad implements Action {
  readonly type = TradingActionTypes.AlgoListLoad;

  constructor() {}
}
export class TradingStart implements Action {
  readonly type = TradingActionTypes.TradingStart;

  constructor(public payload: { exchange: string, market: string, cfg: any, tabIndex: number }) {}
}
export class TradingResume implements Action {
  readonly type = TradingActionTypes.TradingResume;

  constructor(public algoId: string) {}
}
export class TradingStop implements Action {
  readonly type = TradingActionTypes.TradingStop;

  constructor(public algoId: string) {}
}
export class AlgoDel implements Action {
  readonly type = TradingActionTypes.AlgoDel;

  constructor(public payload: { id: string }) {}
}

export class MarketStateWS implements Action {
  readonly type = TradingActionTypes.MarketStateWS;

  constructor(public algoId: string) {}
}
export class AlgoStateWS implements Action {
  readonly type = TradingActionTypes.AlgoStateWS;

  constructor(public algoId: string) {}
}
export class LogWS implements Action {
  readonly type = TradingActionTypes.LogWS;

  constructor(public algoId: string) {}
}
export class LogLoad implements Action {
  readonly type = TradingActionTypes.LogLoad;

  constructor(public payload: { id: string }) {}
}
export class LogSet implements Action {
  readonly type = TradingActionTypes.LogSet;

  constructor(public payload: { id: string, log: any[] }) {}
}
export class AlgoStateSet implements Action {
  readonly type = TradingActionTypes.AlgoStateSet;

  constructor(public payload: { id: string, result: any }) {}
}
export class AlgoStateDel implements Action {
  readonly type = TradingActionTypes.AlgoStateDel;

  constructor(public payload: { id: string }) {}
}
export class MarketStateSet implements Action {
  readonly type = TradingActionTypes.MarketStateSet;

  constructor(public payload: { id: string, result: any }) {}
}
export class LogAppend implements Action {
  readonly type = TradingActionTypes.LogAppend;

  constructor(public payload: { id: string, log: any[] }) {}
}
export class LvlDelReq implements Action {
  readonly type = TradingActionTypes.LvlDelReq;

  constructor(public payload: { id: string, index }) {}
}
export class LvlDel implements Action {
  readonly type = TradingActionTypes.LvlDel;

  constructor(public payload: { id: string, index }) {}
}

export type TradingActionsUnion =
  | AlgoListLoad
  | TradingResume
  | TradingStop
  | AlgoDel
  | MarketStateWS
  | AlgoStateWS
  | LogWS
  | LogLoad
  | LogSet
  | AlgoStateSet
  | AlgoStateDel
  | MarketStateSet
  | LogAppend
  | LvlDelReq
  | LvlDel;
