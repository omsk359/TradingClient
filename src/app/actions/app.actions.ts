import {Action} from "@ngrx/store";
import {User} from "../auth.service";


export enum AppActionTypes {
  ShowMsg = '[App] ShowMsg',
  ShowError = '[App] ShowError',
}

export class ShowMsg implements Action {
  readonly type = AppActionTypes.ShowMsg;

  constructor(public text: string) {}
}
export class ShowError implements Action {
  readonly type = AppActionTypes.ShowError;

  constructor(public error: any) {}
}


export enum AuthActionTypes {
  LogIn = '[App] LogIn',
  LogInSuccess = '[App] LogIn Success',
  LogInFail = '[App] LogIn Fail',
  SignUp = '[App] SignUp',
  SignUpSuccess = '[App] SignUp Success',
  SignUpFail = '[App] SignUp Fail',
  LogOut = '[App] LogOut',
}

export class LogIn implements Action {
  readonly type = AuthActionTypes.LogIn;
  constructor(public payload: { email: string, password: string }) {}
}
export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LogInSuccess;
  constructor(public payload: User) {}
}
export class LogInFail implements Action {
  readonly type = AuthActionTypes.LogInFail;
  constructor(public payload: any) {}
}

export class SignUp implements Action {
  readonly type = AuthActionTypes.SignUp;
  constructor(public payload: { email: string, password: string }) {}
}
export class SignUpSuccess implements Action {
  readonly type = AuthActionTypes.SignUpSuccess;
  constructor(public payload: User) {}
}
export class SignUpFail implements Action {
  readonly type = AuthActionTypes.SignUpFail;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LogOut;
}

export type AuthActionsUnion =
  | LogIn
  | LogInSuccess
  | LogInFail
  | SignUp
  | SignUpSuccess
  | SignUpFail
  | LogOut;

