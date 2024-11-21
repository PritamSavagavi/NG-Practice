import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  voteCount : number = 0;
  articles = [
    {name: 'Article 1', link:'Article 1 link', voteCount:0},
    {name: 'Article 2', link:'Article 2 link', voteCount:0},
    {name: 'Article 3', link:'Article 3 link', voteCount:0},
    {name: 'Article 4', link:'Article 4 link', voteCount:0},
    {name: 'Article 5', link:'Article 5 link', voteCount:0}
  ];

  upvote(article:any)
  {
    article.voteCount++;
  }
  downvote(article:any)
  {
    article.voteCount--;
  }
}
