import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BalanceState, MarketInfoState, TickState} from "../../reducers";

@Component({
  selector: 'app-market-info',
  template: `
    <app-loading [load]="balances.load" (refresh)="loadBalances.emit()" lazy="true">
      {{partnerCurrency}}: {{balances[partnerCurrency]?.total | number : priceFmt}} 
            ({{balances[partnerCurrency]?.free | number : priceFmt}}+{{balances[partnerCurrency]?.used | number : priceFmt}})<br/>
      {{baseCurrency}}: {{balances[baseCurrency]?.total | number : amountFmt}} 
            ({{balances[baseCurrency]?.free | number : amountFmt}}+{{balances[baseCurrency]?.used | number : amountFmt}})
    </app-loading>
    <hr/>
    <app-loading [load]="tick.load" (refresh)="loadTick.emit()" lazy="true">
      Best price (b/s): [{{tick?.bid}}, {{tick?.ask}}]  {{spreadPerc(tick?.bid, tick?.ask) | number : '1.2-2'}}%<br/>
      Low/high 24h (b/s): [{{tick?.low}}, {{tick?.high}}]  {{spreadPerc(tick?.low, tick?.high) | number : '1.2-2'}}%<br/>
    </app-loading>
    <app-loading [load]="marketInfo.load" (refresh)="loadMarketInfo.emit()" lazy="true">
      Fee (maker/taker): {{marketInfo?.maker*100}}%/{{marketInfo?.taker*100}}%<br/>
    </app-loading>
  `,
  styles: []
})
export class MarketInfoComponent {

  @Input() amountFmt: string = '1.2-2';
  @Input() priceFmt: string = '1.2-2';

  @Input() partnerCurrency: string;
  @Input() baseCurrency: string;

  @Input() balances: BalanceState;
  @Input() tick: TickState;
  @Input() marketInfo: MarketInfoState;

  @Output() loadBalances = new EventEmitter<void>();
  @Output() loadTick = new EventEmitter<void>();
  @Output() loadMarketInfo = new EventEmitter<void>();

  constructor() { }

  spreadPerc(priceLow, priceHigh) {
    if (!priceHigh) return 0;
    return (priceHigh-priceLow) / priceHigh * 100;
  }
}
