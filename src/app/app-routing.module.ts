import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPostComponent } from './root-post/root-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
{ path: 'post/:id', component: PostComponent },
{ path: '', component: RootPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
