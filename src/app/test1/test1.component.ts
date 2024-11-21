import { Component } from '@angular/core';

@Component({
  selector: 'app-test1',
  template: `
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">you picked red</div>
      <div *ngSwitchCase="'blue'">yo picked blue</div>
      <div *ngSwitchCase="'green'">you picked green</div>
      <div *ngSwitchDefault>you picked something else</div>
    </div>
  `,
  styleUrl: './test1.component.scss'
})
export class Test1Component {
  public color = "green";
}
