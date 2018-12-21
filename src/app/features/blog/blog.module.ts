import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { BlogService } from './services/blog.service';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostComponent } from './blog-post/blog-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts' },
  { path: 'posts', component: BlogPostsComponent, data: { title: 'Blog Posts', description: 'Blog posts by Serendipity' } },
  { path: 'posts/:id', component: BlogPostComponent, data: { title: 'Blog Post', description: 'Blog Post' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule],
  declarations: [
    BlogPostsComponent,
    BlogPostComponent
  ],
  providers: [BlogService]
})
export class BlogModule { }