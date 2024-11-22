import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrl: './childcomponent.component.scss'
})
export class ChildcomponentComponent {

  @Input() ChildMessage : string = "";

  @Output() public childEvent = new EventEmitter();
  
  fireEvent()
  {
    this.childEvent.emit('hellow from child');
  }
}
