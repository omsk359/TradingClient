import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent }   from './login/login.component';
import { ProfileComponent }   from './profile/profile.component';
import { PortfolioComponent }   from './portfolio/portfolio.component';
import { TradingLayoutComponent }   from './trading/trading-layout/trading-layout.component';
import {AuthGuard} from "./auth-guard.service";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'portfolio', canActivate: [AuthGuard], component: PortfolioComponent },
  { path: 'trading', canActivate: [AuthGuard], component: TradingLayoutComponent },
  { path: '**', redirectTo: '/trading' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes/*, { enableTracing: true }*/) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
