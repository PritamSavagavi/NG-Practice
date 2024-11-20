import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div>
      <h2>
        Welcome {{name}}
      </h2>
      <input type="text" #inputValue>
      <button (click)="submitValue(inputValue.value)">Submit</button>
      <hr>
      <input type="text" bind-disabled="isDisabled" value= {{name}}>
      <button (click)="greetUser()">Greet</button>
      <h2>{{name.length}}</h2>
      <!-- <h2 [class] = "italics" [class] = "textSuccess">{{name.toUpperCase()}}</h2> -->
      <h2 [ngClass]="messageClasses">The Angular</h2>
      <h2 [style.color] = "highlightColor">style binding</h2>
      <h2 [ngStyle] = "titleStyles">The style binding with ngStyle</h2>
      <h2>{{name | uppercase}}</h2>
      <h2>{{name | lowercase}}</h2>
      <h2> {{siteRef}} </h2>
      <!-- <h2>{{greetUser()}}</h2> -->
    </div>
  `,
  styles: [`div {
    background-color: 'yellow';
  }
  
  .text-success{
    color : blue;
  }
  .text-danger{
    color : red;
  }
  .text-special{
    font-style : italic;
  }
  `]
})
export class TestComponent {
  public name = '';
  public isDisabled = false;
  public italics = "italic";
  public textSuccess = "text-success";
  public highlightColor = "orange";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special" : this.isSpecial
  };
  public titleStyles = {
    color : "blue",
    fontStyle:"italic"
  };
  public siteRef = window.location.href;
  greetUser()
  {
      this.name = "hellow........ Pritam" ; 
  }
  submitValue(value : any)
  {
    console.log(value);
  }
}
