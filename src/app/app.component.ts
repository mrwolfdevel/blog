import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [PostService],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
}
