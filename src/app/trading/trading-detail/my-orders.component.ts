import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MyOrderState} from "../../reducers";

@Component({
  selector: 'app-my-orders',
  template: `
    <div *ngFor="let o of myOrders; trackBy: o?.id" [class.order-highlight]="o.highlight">
      <div fxLayout="row" fxLayoutAlign="start center">
        <div>{{o.price | number : priceFmt}} - {{o.amount | number : amountFmt}}</div>
        <div fxFlex="1 1 auto"></div>
        <button (click)="delOrder.emit(o)" mat-icon-button matTooltip="Delete order" color="primary"><mat-icon>delete</mat-icon></button>
      </div>

      <mat-progress-bar mode="determinate" [value]="o.filled/o.amount*100"></mat-progress-bar>
    </div>
  `,
  styles: [`
    .order-highlight {
      background-color: aquamarine;
    }
  `]
})
export class MyOrdersComponent {

  @Input() myOrders: MyOrderState[];
  @Input() amountFmt: string = '1.2-2';
  @Input() priceFmt: string = '1.2-2';

  @Output() delOrder = new EventEmitter<MyOrderState>();

  constructor() { }

  highlightOrder(id) {
    let order = this.myOrders.find(o => o.id === id);
    if (order)
      (<any>order).highlight = true;
  }

  clearOrderHighlight(id) {
    let order = this.myOrders.find(o => o.id === id);
    if (order)
      (<any>order).highlight = false;
  }
}
