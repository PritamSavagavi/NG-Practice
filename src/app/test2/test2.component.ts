import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <div *ngFor="let item of color">{{item}}</div>
    <app-article></app-article>
  `,
  styleUrl: './test2.component.scss'
})
export class Test2Component {
  public color = ["red", "green", "blue", "yellow", "cyan", "magenta"];
}
