import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  age: number;
  city: string;
}
@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.scss'
})
export class EmpListComponent {
  public empData : Employee[] = [];
  constructor() { }
  ngOnInit(): void {
    
  }
}
