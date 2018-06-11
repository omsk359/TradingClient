import {Component, EventEmitter, Input, Output} from "@angular/core";
import {LoadState} from "./reducers";

@Component({
  selector: 'app-loading',
  template: `
    <div *ngIf="load?.loaded">
      <ng-content></ng-content>
    </div>
    <div *ngIf="load?.loading" class="spinner">
      <mat-progress-spinner [diameter]="spinnerDiameter" color="primary" mode="indeterminate"></mat-progress-spinner>
    </div>
    <div *ngIf="load?.error">
      <button (click)="refresh.emit()" mat-icon-button matTooltip="Refresh" color="primary"><mat-icon>refresh</mat-icon></button>
      {{load.error?.message || load.error}}
    </div>
    <div *ngIf="lazy && !load?.loaded && !load?.loading && !load?.error">
      <button (click)="refresh.emit()" mat-icon-button matTooltip="Load" color="primary"><mat-icon>vertical_align_bottom</mat-icon></button>
    </div>
  `,
  styles: ['.spinner { padding: 10px; }']
})
export class LoadingComponent {
  @Input() load: LoadState;
  @Input() spinnerDiameter: number = 20;
  @Input() lazy: boolean;
  @Output() refresh = new EventEmitter<void>();

  constructor() { }
}
