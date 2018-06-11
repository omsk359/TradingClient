import {AlgoTabState} from "./algo-tabs.reducer";
import {CcxtState} from "./ccxt.reducer";
import {UserDataState} from "./userdata.reducer";
import {LoadingState} from "./loading.reducer";
import {TradingState} from "./trading.reducer";
import {AuthState} from "./auth.reducer";

export * from './auth.reducer';
export * from './algo-tabs.reducer';
export * from './ccxt.reducer';
export * from './loading.reducer';
export * from './trading.reducer';
export * from './userdata.reducer';

export interface AppState {
  algoTabs: AlgoTabState[],
  userData: UserDataState,
  ccxt: CcxtState,
  loading: LoadingState,
  trading: TradingState,
  auth: AuthState
}
