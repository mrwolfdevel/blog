import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {APP_BASE_HREF} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from  '@angular/common/http';
import { RootPostComponent } from './root-post/root-post.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    RootPostComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
