import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { joke } from '../interfaces/jokes';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  jokeId = new BehaviorSubject(0);
  jokeId$ = this.jokeId.asObservable();
  getJokes(): Observable<any[]> {
   return this.http.get<any[]>("https://api.freeapi.app/api/v1/public/quotes").pipe(
    tap(console.log),map((res:any) => res.data.data),tap(console.log)
   );

  //  getJokkById(){

  //  }
   //  getJokkById(){

  //  }
  }

}
