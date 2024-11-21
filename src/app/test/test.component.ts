import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="displayIf; then thenBlock; else elseIf">
      <p>Test Component Works !!</p>
    </div>
    <ng-template #thenBlock>
      <div>
        <p>Then Block Works !!</p>
      </div>
    </ng-template>
    <ng-template #elseIf>
      <div>
        <p>else-if-1 works !!</p>
      </div>
    </ng-template>
    <ng-template #elseIf1>
      <div *ngIf="condition === 1">
        <p> else-if-2 !!</p>
      </div>
    </ng-template>
   
      <div *ngIf="condition === 2">
        <p> else block executed !!</p>
      </div>
   
    <ng-template #finalBlock>
      <div *ngIf="condition >= 2">
        <p>final block executed !!</p>
      </div>
    </ng-template>
  `,
  styles: [`div {
    background-color: #e6e6e6;
  }`]
})
export class TestComponent {
  displayIf : boolean = false;
  condition = 2;
}
