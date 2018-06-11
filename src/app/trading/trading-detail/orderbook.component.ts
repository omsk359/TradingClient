import {Component, Input} from '@angular/core';
import {OrderbookState} from "../../reducers";

@Component({
  selector: 'app-orderbook',
  template: `
    <div class="orderbook">
      <table>
        <tr *ngFor="let o of asks" class="sell-row">
          <td class="cell-price"><div class="cell-num">{{o[0] | number : priceFmt}}</div></td>
          <td class="cell-amount"><div class="cell-num">{{o[1] | number : amountFmt}}</div></td>
          <td class="cell-total">
            <div class="cell-num">{{o[0]*o[1] | number : priceFmt}}</div>
            <div class="vol-bar" [style.width]="o.width+'px'"></div>
          </td>
        </tr>
        <tr *ngFor="let o of bids" class="buy-row">
          <td class="cell-price"><div class="cell-num">{{o[0] | number : priceFmt}}</div></td>
          <td class="cell-amount"><div class="cell-num">{{o[1] | number : amountFmt}}</div></td>
          <td class="cell-total">
            <div class="cell-num">{{o[0]*o[1] | number : priceFmt}}</div>
            <div class="vol-bar" [style.width]="o.width+'px'"></div>
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: [`
    .orderbook {
      overflow-x: hidden;
    }
    .orderbook table {
      width: 100%;
    }
    .orderbook .cell-num {
      z-index: 2;
      position: relative;
    }
    .cell-amount {
      text-align: right;
    }
    .cell-total {
      position: relative;
      text-align: right;
    }
    .vol-bar {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 0;
      max-width: calc(400%);
    }
    .buy-row {
      color: navy;
    }
    .sell-row {
      color: navy;
      /*color: violet;*/
    }
    .buy-row .vol-bar {
      background-color: #4cae4c !important;
    }
    .sell-row .vol-bar {
      background-color: #de031e !important;
    }
  `]
})
export class OrderbookComponent {

  @Input() amountFmt: string = '1.2-2';
  @Input() priceFmt: string = '1.2-2';

  @Input('orderbook')
  set setOrderbook(val: OrderbookState) {
    if (val && val.bids) {
      this.bids = val.bids.slice(0, 6);
      this.asks = val.asks.slice(0, 6).reverse();
      this.depthWidth(this.bids, this.asks);
    }
  }

  bids: number[][] = [];
  asks: number[][] = [];

  constructor() { }


  // https://ex.bnbstatic.com/exchange/resources/minjs/tradeDetail.min.js?version=2.0.147
  medianUnit(buyOrders, sellOrders, n) {

    let median = orders => {
      let i = Math.floor(orders.length / 3 * 2);
      return orders[i][1] < 1 ? 1 : orders[i][1];
    };
    let sort = orders => orders.sort((e, t) => e[1] - t[1]);

    return median(sort([...buyOrders, ...sellOrders])) / n;
  }
  depthWidth(buyOrders, sellOrders) {
    let width = (e, t) => {
      if (0 == t) return 1;
      let n = Math.round(Number(e) / t);
      return n <= 0 ? 1 : n > 160 ? 160 : n
    };

    let m = this.medianUnit(buyOrders, sellOrders, 48), ge = 280;
    [...buyOrders, ...sellOrders].forEach(o => o.width = width(o[1], m) * ge / 100);
  }

}
