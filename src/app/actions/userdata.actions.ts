import {Action} from "@ngrx/store";
import {UserDataState} from "../reducers";

export enum UserDataActionTypes {
  DataLoad = '[UserData] Data Load',
  DataSet = '[UserData] Data Set',
  DataSave = '[UserData] Data Save',
  TradingParamsSet = '[UserData] Trading Params Set',
  TradingParamsAdd = '[UserData] Trading Params Add',
  TradingParamsDel = '[UserData] Trading Params Del',
  ExchangeAdd = '[UserData] Exchange Keys Add',
  ExchangeDel = '[UserData] Exchange Keys Del',
}
export class DataLoad implements Action {
  readonly type = UserDataActionTypes.DataLoad;

  constructor() {}
}
export class DataSet implements Action {
  readonly type = UserDataActionTypes.DataSet;

  constructor(public payload: UserDataState) {}
}
export class DataSave implements Action {
  readonly type = UserDataActionTypes.DataSave;

  constructor() {}
}
export class TradingParamsSet implements Action {
  readonly type = UserDataActionTypes.TradingParamsSet;

  constructor(public payload: { name: string, cfg: any }) {}
}
export class TradingParamsAdd implements Action {
  readonly type = UserDataActionTypes.TradingParamsAdd;

  constructor(public payload: { name: string, cfg: any }) {}
}
export class TradingParamsDel implements Action {
  readonly type = UserDataActionTypes.TradingParamsDel;

  constructor(public name: string) {}
}
export class ExchangeAdd implements Action {
  readonly type = UserDataActionTypes.ExchangeAdd;

  constructor(public payload: { apiKey: string, secret: string, exchange: string }) {}
}
export class ExchangeDel implements Action {
  readonly type = UserDataActionTypes.ExchangeDel;

  constructor(public exchange: string) {}
}

export type UserDataActionsUnion =
  | DataLoad
  | DataSet
  | DataSave
  | TradingParamsSet
  | TradingParamsAdd
  | TradingParamsDel
  | ExchangeAdd
  | ExchangeDel;
