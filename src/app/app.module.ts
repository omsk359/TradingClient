import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradingLayoutComponent } from './trading/trading-layout/trading-layout.component';
import { TradingDetailComponent } from './trading/trading-detail/trading-detail.component';
import {AlgoListComponent} from './trading/algo-list/algo-list.component';
import {LoadingComponent} from './loading.component';

import {ActionReducer, ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Angular CLI environemnt
import {
  algoTabsReducer, ccxtReducer, userDataReducer, loadingReducer,
  tradingReducer, authReducer, AppState
} from './reducers';
import { EffectsModule } from '@ngrx/effects';
import {CcxtEffects, TradingEffects, UsersEffects} from './effects';
import ConfirmDialogComponent from "./confirm-dialog.component";
import { OrderbookComponent } from './trading/trading-detail/orderbook.component';
import { TradingParamsManagerComponent } from './trading/trading-detail/trading-params-manager.component';
import { AlgoStateComponent } from './trading/trading-detail/algo-state.component';
import { MyOrdersComponent } from './trading/trading-detail/my-orders.component';
import { MarketInfoComponent } from './trading/trading-detail/market-info.component';
import {AuthEffects} from "./effects/auth.effects";
import {localStorageSync} from "ngrx-store-localstorage";



const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  algoTabs: algoTabsReducer,
  userData: userDataReducer,
  ccxt: ccxtReducer,
  loading: loadingReducer,
  trading: tradingReducer
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PortfolioComponent,
    TradingLayoutComponent,
    TradingDetailComponent,
    AlgoListComponent,
    LoadingComponent,
    ConfirmDialogComponent,
    OrderbookComponent,
    TradingParamsManagerComponent,
    AlgoStateComponent,
    MyOrdersComponent,
    MarketInfoComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, TradingEffects, UsersEffects, CcxtEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
