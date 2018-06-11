import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import _ from 'lodash';
import {Store} from "@ngrx/store";
import {BalancesLoad, CcxtActionTypes} from "../actions";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  objectKeys = Object.keys;

  balances: any;
  balances_no0: any = {};

  balancesLoad: any;

  constructor(private api: ApiService, private store: Store<any>) { }

  ngOnInit() {
    this.api.ccxt$.subscribe((data: any) => {
      console.log('ccxt$.subscribe', data);
      this.balances = data.balances;
      this.balances_no0 = {};
      _.each(this.balances, (balances, name) => {
        this.balances_no0[name] = _.chain(balances).map((b, sym) => Object.assign({sym}, b)).filter(b => b.total > 0).value();
      });
    });
    this.api.loading$.subscribe((data: any) => {
      this.balancesLoad = data[CcxtActionTypes.BalancesLoad];
    });

    this.loadBalances();
  }

  loadBalances() {
    this.store.dispatch(new BalancesLoad());
  }
}
