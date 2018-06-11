import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import _ from 'lodash';
import {Store} from "@ngrx/store";
import {BalancesLoad, CcxtActionTypes} from "../actions";
import {AppState} from "../reducers";
import {BalanceState} from "../reducers";
import {LoadState} from "../reducers";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  objectKeys = Object.keys;

  balances: {[exchange: string]: BalanceState};
  balancesPositive: {[exchange: string]: BalanceState} = {};

  balancesLoad$: Observable<LoadState>;
  ccxtSub: Subscription;

  constructor(private api: ApiService, private store: Store<AppState>) { }

  ngOnInit() {
    this.ccxtSub = this.api.ccxt$.subscribe(({balances}) => {
      this.balances = balances;
      this.balancesPositive = {};
      _.each(this.balances, (balances, exchange) => {
        this.balancesPositive[exchange] = _.filter(balances, b => b.total > 0);
      });
    });
    this.balancesLoad$ = this.api.loading$.pipe(map(data => data[CcxtActionTypes.BalancesLoad]));

    this.loadBalances();
  }

  ngOnDestroy() {
    this.ccxtSub && this.ccxtSub.unsubscribe();
  }

  loadBalances() {
    this.store.dispatch(new BalancesLoad());
  }
}
