import {Action} from "@ngrx/store";

export enum AlgoTabsActionTypes {
  TabAdd = '[AlgoTabs] Tab Add',
  TabSet = '[AlgoTabs] Tab Set',
  TabDel = '[AlgoTabs] Tab Del',
}
export class TabAdd implements Action {
  readonly type = AlgoTabsActionTypes.TabAdd;

  constructor(public payload: { algoId?: string, exchange: string, market: string }) {}
}
export class TabSet implements Action {
  readonly type = AlgoTabsActionTypes.TabSet;

  constructor(public payload: { algoId: string, i: number }) {}
}
export class TabDel implements Action {
  readonly type = AlgoTabsActionTypes.TabDel;

  constructor(public payload: number) {}
}

export type AlgoTabsActionsUnion =
  | TabAdd
  | TabSet
  | TabDel;
