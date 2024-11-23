import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() nameValue: string = "";
  @Output() baapEvent = new EventEmitter();
  
  fire () {
    this.baapEvent.emit({name:"Angular 17", address:"Du-bhai"});
  }
}
