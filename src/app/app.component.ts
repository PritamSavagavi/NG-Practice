import { Component, OnInit, inject } from '@angular/core';
import { joke } from '../interfaces/jokes';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  jokes$: any ;//Observable<joke[]> = [];
  apiService = inject(ApiService);
  ngOnInit(){
     this.jokes$ = this.apiService.getJokes(); //check comment its old code
  }
}
// this.apiService.getJokes().subscribe((data : any) => {
    //   console.log(data);
    // });
    