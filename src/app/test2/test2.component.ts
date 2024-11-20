import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <div class="test" *ngIf="DisplayIt; else elseBlock; then thenBlock; ">he he
  <input  [(ngModel)] = "name" type="text"> {{name}}
  </div>
  <ng-template #elseBlock>
    <div>
      <h3 [style.color]="red">else block</h3>
    </div>
  </ng-template>
  <ng-template #thenBlock>
    <div>
      <h3>Then block executed</h3>
    </div>
  <ng-template>
 
  `,
  styles: `
  .test{
    background-color : yellow
  }
  `
})
export class Test2Component {
  public red = "red";
  public name = "";
  public DisplayIt = false;
}
