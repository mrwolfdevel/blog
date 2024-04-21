import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apirul = "localhost:3000";

 constructor(private http: HttpClient) { }

getPostStart() {

    return this.http.get<any[]>(this.apirul + "/post/start");
  }

}
