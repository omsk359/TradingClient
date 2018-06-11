import {UserDataActionsUnion, UserDataActionTypes} from "../actions";
import _ from 'lodash';

export interface TradingCfgState {
  [param: string]: any
}
export interface TradingParamsState {
  [name: string]: TradingCfgState
}
export interface UserDataState {
  tradingParams: TradingParamsState,
  exchanges: {
    [name: string]: {
      apiKey: string,
      secret: string
    }
  }
}
const userDataInitState: UserDataState = { tradingParams: {}, exchanges: {} };

export function userDataReducer(state = userDataInitState, action: UserDataActionsUnion): UserDataState {
  switch (action.type) {
    case UserDataActionTypes.DataSet:
      return action.payload;
    case UserDataActionTypes.TradingParamsSet:
    case UserDataActionTypes.TradingParamsAdd:
      var { name, cfg } = action.payload;
      return {...state, tradingParams: { ...state.tradingParams, [name]: _.cloneDeep(cfg) }};
    case UserDataActionTypes.TradingParamsDel:
      return {...state, tradingParams: _.omit(state.tradingParams, [action.name])};
    case UserDataActionTypes.ExchangeAdd:
      var { exchange, apiKey, secret } = action.payload;
      return {...state, exchanges: { ...state.exchanges, [exchange]: { apiKey, secret } }};
    case UserDataActionTypes.ExchangeDel:
      return {...state, exchanges: _.omit(state.exchanges, [action.exchange])};

    default:
      return state;
  }
}
