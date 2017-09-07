import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from "../../services/blog.service";



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  posts: Post[];
  tags: Tag[]

  constructor(private blog:BlogService) { }

  ngOnInit() {
    var t = new Tag;
    t.name = "My Tag 1"

    this.tags = [t,t,t];

    let self = this;

    this.blog.homePagePosts()
    .subscribe(posts => {
      console.log('posts', posts);
      //let p = posts.json()
      // console.log(p);
      // self.posts = p._embedded;
      self.posts = posts;
    })

    console.log(this.posts);

  }

}

class Tag {
  name: string;
  toString() {
    return name;
  }
}
