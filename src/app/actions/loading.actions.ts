import {Action} from "@ngrx/store";

export enum LoadingActionTypes {
  LoadStart = '[Loading] Start',
  LoadSuccess = '[Loading] Success',
  LoadFail = '[Loading] Fail',
}
export class LoadStart implements Action {
  readonly type = LoadingActionTypes.LoadStart;

  constructor(public payload: Action) {}
}
export class LoadSuccess implements Action {
  readonly type = LoadingActionTypes.LoadSuccess;

  constructor(public payload: Action) {}
}
export interface ActionWithError extends Action {
  error: any
}
export class LoadFail implements Action {
  readonly type = LoadingActionTypes.LoadFail;

  constructor(public payload: ActionWithError) {}
}

export type LoadingActionsUnion =
  | LoadStart
  | LoadSuccess
  | LoadFail;
