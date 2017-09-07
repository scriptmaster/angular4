import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from "../../services/blog.service";



@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  posts: Post[];
  blog: BlogService;
  tags: Tag[]

  constructor(blog:BlogService) { this.blog = blog; }

  ngOnInit() {
    var t = new Tag;
    t.name = "My Tag 1"

    this.tags = [t,t,t];

    this.posts = this.blog.posts;

  }

}

class Tag {
  name: string;
  toString() {
    return name;
  }
}
