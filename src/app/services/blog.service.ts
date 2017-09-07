
import { Injectable } from "@angular/core";

@Injectable()
export class BlogService {
  constructor() {
    
  }

  posts = [
    new Post("Post Title 1"),
    new Post("Post Title 1", "Post body")
  ];

  homePagePosts() {
    return this.posts;
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

