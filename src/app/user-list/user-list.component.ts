import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  names : string[];
  naam : string = "jacob";
  constructor() {
    this.names = ["John","parker","juan","Lawrence", "David","jean","Felix"];
  }
}
