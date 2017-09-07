
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class BlogService {

  // posts = [
  //   new Post("Post Title 1"),
  //   new Post("Post Title 1", "Post body")
  // ];
  public posts:Post[];

  constructor(private http:Http) {
    // this.posts.push({title: 'Awesome post 3', body: 'Blog content'});
  }

  homePagePosts() {
    return this.http.get('http://api.msheriff.com/public/posts')
      .map(r => r.json()._embedded)
    // return this.posts;
  }

}

export class Post {
  body: string;
  title: string

  constructor(title, body = '') {
    this.title = title;
    this.body = body;
  }

}
