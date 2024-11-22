import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
  <p>{{name}}</p>
  <p>{{date | date: 'dd:mm:yyyy'}}</p>
  <p>{{date | date: 'short'}}</p>
  <p>{{date | date: 'shortDatetime'}}</p>
  
    <button (click)="fireEvent()">send</button>
    <div *ngFor="let item of colors; index as i; even as l">{{i}} {{l}} {{item}}</div>
    <app-article></app-article>
  `,
  styleUrl: './test2.component.scss'
})
export class Test2Component {
  public colors= ["red", "green", "blue", "yellow", "cyan", "magenta"];
  @Input('titleName') public name : string = "";
  @Output() public childDataEmit = new EventEmitter();
  public date = new Date();
  fireEvent()
  {
    this.childDataEmit.emit(this.colors);
  }
}
