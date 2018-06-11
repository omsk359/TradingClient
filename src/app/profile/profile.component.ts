import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {Store} from "@ngrx/store";
import {CcxtActionTypes, DataLoad, DataSave, ExchangeAdd, ExchangesLoad} from "../actions";
import {first, map, take, tap} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {LoadState, UserDataState} from "../reducers";
import _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  apiKey: string;
  secret: string;
  exchange: string;
  userData: any;
  exchangesLoad$: Observable<LoadState>;
  userExchanges$: Observable<{name: string, ex: {apiKey: string, secret: string}}>;
  exchanges$: Observable<string[]>;

  constructor(private api: ApiService, private store: Store<any>) {}

  ngOnInit() {
    // this.loadExchanges();
    this.api.ccxt$.pipe(take(1)).subscribe(({exchanges}) => _.isEmpty(exchanges) && this.loadExchanges());

    this.store.dispatch(new DataLoad());
    this.userExchanges$ = this.api.userData$.pipe(map(({exchanges}) => _.map(exchanges, (ex, name) => ({ex, name}))));
    this.exchangesLoad$ = this.api.loading$.pipe(map(data => data[CcxtActionTypes.ExchangesLoad]));
    this.exchanges$ = this.api.ccxt$.pipe(map(data => data.exchanges));
  }

  loadExchanges() {
    console.log('loadExchanges()');
    this.store.dispatch(new ExchangesLoad());
  }

  addExchange() {
    this.store.dispatch(new ExchangeAdd({ apiKey: this.apiKey, secret: this.secret, exchange: this.exchange }));
  }

  saveUserData() {
    this.store.dispatch(new DataSave());
  }
}
