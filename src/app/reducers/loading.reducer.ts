import {LoadingActionsUnion, LoadingActionTypes} from "../actions";

export interface LoadState {
  loading: boolean,
  loaded: boolean,
  error: any,
}
export interface LoadingState {
  [actionType: string]: LoadState;
}

export function loadingReducer(state: LoadingState = {}, action: LoadingActionsUnion): LoadingState {
  switch (action.type) {
    case LoadingActionTypes.LoadStart:
      return {...state, [action.payload.type]: { loading: true, loaded: false, error: null }};
    case LoadingActionTypes.LoadSuccess:
      return {...state, [action.payload.type]: { loading: false, loaded: true, error: null }};
    case LoadingActionTypes.LoadFail:
      let { error, type } = action.payload;
      return {...state, [type]: { loading: false, loaded: false, error }};

    default:
      return state;
  }
}
