import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AlgoDataState} from "../../reducers";

@Component({
  selector: 'app-algo-state',
  template: `
    <div *ngIf="algo" class="algo-state">
      <table>
        <tr><th></th><th>{{algo.base_currency}}</th><th>{{algo.partner_currency}}</th></tr>
        <tr>
          <td><ins>Balance before:</ins></td>
          <td>{{algo.balance_before[algo.base_currency]?.total | number : amountFmt}}</td>
          <td>{{algo.balance_before[algo.partner_currency]?.total | number : priceFmt}}</td>
        </tr>
        <tr>
          <td><ins>Last balance:</ins></td>
          <td>{{algo.balance_before[algo.base_currency]?.total | number : amountFmt}}</td>
          <td>{{algo.balance_before[algo.partner_currency]?.total | number : priceFmt}}</td>
        </tr>
        <tr>
          <td><ins>Profit:</ins></td>
          <td>{{algo.profit | number : amountFmt }}</td>
          <td></td>
        </tr>
      </table>
    </div>
    <hr/>
    <div *ngIf="algo.LVLs?.length">
      <ins>Current trades:</ins>
      <div *ngFor="let lvl of algo.LVLs; let i = index">
        <div (mouseenter)="mouseEnterLvl.emit(lvl)"  (mouseleave)="mouseLeaveLvl.emit(lvl)" fxLayout="row" fxLayoutAlign="start center">
          <div>
            {{lvl._type}} {{lvl._order_amount}} [{{lvl._buy_price}}, {{lvl._sell_price}}]
            <span *ngIf="lvl._state==='PONG'"> -> {{lvl.gain}} {{algo.base_currency}}</span>
          </div>
          <div fxFlex="1 1 auto"></div>
          <button (click)="delLvl.emit(i)" mat-icon-button matTooltip="Delete trade" color="primary"><mat-icon>delete</mat-icon></button>
        </div>
      </div>
    </div>
    <div *ngIf="algo.finished_LVLs?.length">
      <hr/>
      <ins>Finished trades:</ins>
      <div *ngFor="let lvl of algo.finished_LVLs">
        {{lvl._type}} {{lvl._order_amount}} [{{lvl._buy_price}}, {{lvl._sell_price}}] -> {{lvl.gain}} {{algo.base_currency}}
      </div>
    </div>
  `,
  styles: [`
    .algo-state table {
      width: 100%;
    }
    .algo-state table td:not(:first-of-type) {
      text-align: right;
    }
  `]
})
export class AlgoStateComponent {

  @Input() amountFmt: string = '1.2-2';
  @Input() priceFmt: string = '1.2-2';
  @Input() algo: AlgoDataState;

  @Output() delLvl = new EventEmitter<number>();
  @Output() mouseEnterLvl = new EventEmitter<any>();
  @Output() mouseLeaveLvl = new EventEmitter<any>();

  constructor() { }
}
