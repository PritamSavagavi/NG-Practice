import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.scss'
})
export class EmpDetailsComponent {

  public name : string= "";
  public empData : any = [];
  constructor(private _empService: EmpServiceService) { }
  ngOnInit()
  {
    this.empData = this._empService.getEmpData();
    this.name = this._empService.name; 
  }
 
}
