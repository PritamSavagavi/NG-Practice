import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
  private _url: string = "/assets/Data/employee.json"
  public name : string = "Rahul";
  public employees : any= [
    {"id": 1, "name" : "John1", "age": 30, "city": "New York"},
    {"id": 2, "name" : "John2", "age": 30, "city": "New York"},
    {"id": 3, "name" : "John3", "age": 30, "city": "New York"},
    {"id": 4, "name" : "John4", "age": 30, "city": "New York"},
    {"id": 5, "name" : "John5", "age": 30, "city": "New York"},
    {"id": 6, "name" : "John6", "age": 30, "city": "New York"},
  ];
  constructor(private http: HttpClient) { }
  getEmpData(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
