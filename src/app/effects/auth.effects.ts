import {Actions, Effect, ofType} from "@ngrx/effects";
import {
  AuthActionTypes, LogIn, LogInFail, LogInSuccess, LogOut, ShowError, SignUp, SignUpFail, SignUpSuccess,
} from "../actions";
import {catchError, map, mergeMap, switchMap, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {Observable, of} from "rxjs/index";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Injectable()
export class AuthEffects {

  @Effect()
  LogIn$: Observable<Action> = this.actions$.pipe(
    ofType<LogIn>(AuthActionTypes.LogIn),
    map(action => action.payload),
    switchMap(({email, password}) => {
      return this.authService.logIn(email, password).pipe(
        map(user => new LogInSuccess(user)),
        catchError(error => of(new LogInFail(error)))
      );
    })
  );

  @Effect({ dispatch: false })
  LogInSuccess$: Observable<any> = this.actions$.pipe(
    ofType(AuthActionTypes.LogInSuccess, AuthActionTypes.SignUpSuccess),
    tap(() => this.router.navigateByUrl('/'))
  );

  @Effect()
  LogInFail$: Observable<Action> = this.actions$.pipe(
    ofType(AuthActionTypes.LogInFail, AuthActionTypes.SignUpFail),
    map((action: LogInFail|SignUpFail) => new ShowError(action.payload))
  );

  @Effect({ dispatch: false })
  LogOut$: Observable<Action> = this.actions$.pipe(
    ofType<LogOut>(AuthActionTypes.LogOut),
    tap(() => this.router.navigateByUrl('/login'))
  );

  @Effect()
  SignUp$: Observable<Action> = this.actions$.pipe(
    ofType<SignUp>(AuthActionTypes.SignUp),
    map(action => action.payload),
    switchMap(({email, password}) => {
      return this.authService.signUp(email, password).pipe(
        map(user => new SignUpSuccess(user)),
        catchError(error => of(new SignUpFail(error)))
      );
    })
  );

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
