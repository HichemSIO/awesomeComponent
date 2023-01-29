import { Post } from './../../models/post.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss'],
})
export class PostListItemComponent implements OnInit {
  constructor() {}

  @Input() post!: Post;
  @Output() postCommented = new EventEmitter<{ comment: string, postId: number }>();
  

  ngOnInit(): void {}


  onNewComment(comment: string) {
    this.postCommented.emit({ comment, postId: this.post.id });
  }

}
