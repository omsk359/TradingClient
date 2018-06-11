import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {TradingParamsAdd, TradingParamsDel, TradingParamsSet} from "../../actions";
import {TradingCfgState, TradingParamsState} from "../../reducers";

@Component({
  selector: 'app-trading-params-manager',
  template: `
    <!--<div *ngIf="userData?.tradingParams?.length; else saveParamsFirst">-->
    <div *ngIf="tradingParams; else saveParamsFirst" class="options-ctrl">
      <span>Load params:</span>
      <mat-form-field>
        <mat-select #selectParam [(ngModel)]="selectParamName" (selectionChange)="loadTradingParams(selectParamName)" placeholder="Saved params">
          <mat-option *ngFor="let name of objectKeys(tradingParams)" [value]="name">{{name}}</mat-option>
        </mat-select>
      </mat-form-field>

      <button (click)="saveTradingParams(selectParamName)" [disabled]="selectParam.empty" mat-icon-button matTooltip="Save params" color="primary"><mat-icon>save</mat-icon></button>
      <button (click)="delTradingParams(selectParamName)" [disabled]="selectParam.empty" mat-icon-button matTooltip="Delete params" color="primary"><mat-icon>delete</mat-icon></button>
      <button (click)="addTradingParams()" mat-icon-button matTooltip="Add params" color="primary"><mat-icon>add</mat-icon></button>

      <button class="apply-btn" *ngIf="enableApplyBtn" (click)="applyCfg.emit(cfg)" mat-raised-button matTooltip="Update algo config" color="primary">Apply</button>
    </div>
    <ng-template #saveParamsFirst>
      <button (click)="addTradingParams()" mat-raised-button color="primary">Save params</button>
    </ng-template>

    <mat-card>
      <mat-card-header><mat-card-title>Options:</mat-card-title></mat-card-header>
      <mat-card-content>

        <div class="opt-box">
          <div *ngFor="let name of objectKeys(cfg)">
            <div class="opt">
              <mat-form-field appearance="standard">
                <mat-label>{{name}}</mat-label>
                <input [(ngModel)]="cfg[name]" matInput>
              </mat-form-field>
            </div>
          </div>
        </div>

      </mat-card-content>
      <mat-card-actions></mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .options-ctrl span {
      padding: 0 20px;
      font-weight: 500;
    }
    .apply-btn {
      margin-left: 20px;
    }
    .opt-box {
      display: flex;
      flex-wrap: wrap;
    }
    .opt {
      display: flex;
    }
    .opt input {
      width: 80px;
    }
    .opt label {
      padding: 7px;
    }
  `]
})
export class TradingParamsManagerComponent implements OnInit {

  @Input() tradingParams: TradingParamsState;
  @Input() enableApplyBtn: boolean;
  @Output() applyCfg = new EventEmitter<TradingCfgState>();

  cfg: TradingCfgState;
  selectParamName: string;

  objectKeys = Object.keys;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.cfg = {
      PING_NUM_LIMIT: 1,
      MAX_BUY_LVL_NUM: 2,

      DUST_CREATE_ON_TOP_VOL: 0.2, VOL_RECREATE_PING: 0.2, VOL_RECREATE_PONG: 0.4,
      SPREAD_BUY_DUST_VOL: 0.2, SPREAD_SELL_DUST_VOL: 0.2,

      MIN_PING_SPREAD_PERC: 1.5,
      MIN_PONG_SPREAD_PERC: 1.0,
      MIN_PING_SPREAD_BUY_PERC: 2.0, MIN_PING_SPREAD_SELL_PERC: 2.0,

      SPREAD_BUY_GAP_PERC: 1.0, SPREAD_SELL_GAP_PERC: 1.0,

      BUY_AMOUNT: 2.0, SELL_AMOUNT: 5.0, // 5k ~ 0.1

      SLEEP_DELAY: 30
    };
    // this.cfg = {
    //   PING_NUM_LIMIT: 1,
    //   MAX_BUY_LVL_NUM: 2,
    //
    //   DUST_CREATE_ON_TOP_VOL: 0.2, VOL_RECREATE_PING: 0.2, VOL_RECREATE_PONG: 0.4,
    //   SPREAD_BUY_DUST_VOL: 0.2, SPREAD_SELL_DUST_VOL: 0.2,
    //
    //   MIN_PING_SPREAD_PERC: 0.4,
    //   MIN_PONG_SPREAD_PERC: 0.25,
    //   MIN_PING_SPREAD_BUY_PERC: 0.4, MIN_PING_SPREAD_SELL_PERC: 0.4,
    //
    //   SPREAD_BUY_GAP_PERC: 0.5, SPREAD_SELL_GAP_PERC: 0.5,
    //
    //   BUY_AMOUNT: 2.0, SELL_AMOUNT: 1.5, // 5k ~ 0.1
    //
    //   SLEEP_DELAY: 20
    // };
  }

  loadTradingParams(name: string) {
    this.cfg = Object.assign({}, this.tradingParams[name]);
  }

  saveTradingParams(name: string) {
    this.store.dispatch(new TradingParamsSet({cfg: this.cfg, name}));
  }

  delTradingParams(name: string) {
    this.store.dispatch(new TradingParamsDel(name));
  }

  addTradingParams() {
    let name = prompt('Params name');
    if (name) {
      this.selectParamName = name;
      this.store.dispatch(new TradingParamsAdd({cfg: this.cfg, name}));
    }
  }
}
