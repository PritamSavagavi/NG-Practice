import { Component } from '@angular/core';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss'
})
export class AppFormComponent {

  title: string = '';
  link: string = '';

  onSubmit() {
    console.log('Title:', this.title);
    console.log('Link:', this.link);
    // Add your form submission logic here
  }
  AddArticle(title: any,link: any) : boolean {
    console.log('Title:', this.title);
    console.log('Link:', this.link);
    return false;
    }
}
