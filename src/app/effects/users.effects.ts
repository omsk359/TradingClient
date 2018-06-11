import {Actions, Effect, ofType} from "@ngrx/effects";
import {AppActionTypes, DataLoad, DataSave, DataSet, ShowError, ShowMsg, UserDataActionTypes} from "../actions";
import {ApiService} from "../api.service";
import {map, mergeMap, switchMap, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable()
export class UsersEffects {

  @Effect()
  loadData$: Observable<Action> = this.actions$.pipe(
    ofType<DataLoad>(UserDataActionTypes.DataLoad),
    mergeMap(action =>
      this.api.getUserData().pipe(map(data => new DataSet(data)))
    )
  );

  @Effect()
  saveTradingParams$: Observable<Action> = this.actions$.pipe(
    ofType(UserDataActionTypes.TradingParamsSet, UserDataActionTypes.TradingParamsAdd, UserDataActionTypes.TradingParamsDel),
    map(() => new DataSave())
  );

  @Effect({dispatch: false})
  saveUserData$: Observable<any> = this.actions$.pipe(
    ofType<DataSave>(UserDataActionTypes.DataSave),
    switchMap(action =>
      this.api.userData$.pipe(
        switchMap(userData => this.api.saveUserData(userData))
      )
    )
  );

  @Effect({dispatch: false})
  showMsg$: Observable<any> = this.actions$.pipe(
    ofType<ShowMsg>(AppActionTypes.ShowMsg),
    tap(action => this.api.showMsg(action.text))
  );

  @Effect({dispatch: false})
  showErr$: Observable<any> = this.actions$.pipe(
    ofType<ShowError>(AppActionTypes.ShowError),
    tap(action => this.api.showError(action.error))
  );

  constructor(private http: HttpClient, private actions$: Actions, private api: ApiService) {}
}
