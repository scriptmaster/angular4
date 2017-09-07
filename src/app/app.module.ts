import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TagsComponent } from './components/tags/tags.component';

import { BlogService } from './services/blog.service';
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
