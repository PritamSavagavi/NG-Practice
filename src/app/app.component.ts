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
  options : number[] = new Array(10);
  testData = [{
    id: 1,
    content: 'xyx'
  },
  {
    id:2,
    content: 'aba'
  }
]
  jokes$: any ;//Observable<joke[]> = [];
  apiService = inject(ApiService);
  ngOnInit(){
     this.jokes$ = this.apiService.getJokes(); //check comment its old code
  }
  doSelect(event : any){
    console.log(event.target.value);
    console.log(event);
    this.apiService.jokeId.next(event.target.value)
  }

}
// this.apiService.getJokes().subscribe((data : any) => {
    //   console.log(data);
    // });
    