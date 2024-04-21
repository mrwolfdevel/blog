import { Component } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-root-post',
  templateUrl: './root-post.component.html',
  providers: [PostService],
  styleUrls: ['./root-post.component.scss']
})
export class RootPostComponent {

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
