import {AlgoTabsActionsUnion, AlgoTabsActionTypes} from "../actions";
import _ from 'lodash';

export interface AlgoTabState {
  algoId?: string,
  market: string,
  exchange: string
}

export function algoTabsReducer(state: AlgoTabState[] = [], action: AlgoTabsActionsUnion): AlgoTabState[] {
  switch (action.type) {
    case AlgoTabsActionTypes.TabAdd:
      return [...state, action.payload];
    case AlgoTabsActionTypes.TabSet:
      let { algoId, i } = action.payload;
      return state.map((alg, j) => i == j ? _.assign({algoId}, alg) : alg);
    case AlgoTabsActionTypes.TabDel:
      return state.filter((tab, i) => i !== action.payload);

    default:
      return state;
  }
}
