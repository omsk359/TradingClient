import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import {Store} from "@ngrx/store";
import {AlgoDel, AlgoListLoad, DataLoad, TabAdd, TabDel, TradingResume, TradingStart, TradingStop} from "../../actions";
import {AlgoState, AlgoTabState, AppState, TradingCfgState} from "../../reducers";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-trading-layout',
  templateUrl: './trading-layout.component.html',
  styleUrls: ['./trading-layout.component.css']
})
export class TradingLayoutComponent implements OnInit {

  tabs: AlgoTabState[];
  tabsSub: Subscription;

  constructor(private api: ApiService, private store: Store<AppState>) {}

  ngOnInit() {
    this.tabsSub = this.store.select('algoTabs').subscribe(tabs => this.tabs = tabs);

    this.store.dispatch(new AlgoListLoad());
    this.store.dispatch(new DataLoad());
  }

  ngOnDestroy() {
    this.tabsSub && this.tabsSub.unsubscribe();
  }

  addTab(data: {market: string, exchange: string}) {
    this.store.dispatch(new TabAdd(data));
  }

  closeTab(index: number) {
    this.store.dispatch(new TabDel(index));
  }

  delAlgo(algo: AlgoState) {
    this.store.dispatch(new AlgoDel({ id: algo._id }));
  }

  openAlgo(algo: AlgoState) {
    this.store.dispatch(new TabAdd({ algoId: algo._id, market: algo.data.market, exchange: algo.data.exchange }));
  }

  startAlgo(cfg: TradingCfgState, tab_i: number) {
    let tab = this.tabs[tab_i];
    this.store.dispatch(new TradingStart({ exchange: tab.exchange, market: tab.market, cfg, tabIndex: tab_i }));
  }

  resumeAlgo(algoId: string) {
    this.store.dispatch(new TradingResume(algoId));
  }

  stopAlgo(algoId: string) {
    this.store.dispatch(new TradingStop(algoId));
  }
}
