import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [PostService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'blog';
  posts: any[] = [] ;

  constructor(
  private postSrv: PostService
  ){}

  ngOnInit(){

    this.postSrv.getPostStart().subscribe((data) => {

      this.posts = data;
    })
  }
}
