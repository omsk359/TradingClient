import {Component} from "@angular/core";

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>Delete</h2>
    <mat-dialog-content>Are you sure?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
})
export default class ConfirmDialogComponent {

  constructor() { }
}
