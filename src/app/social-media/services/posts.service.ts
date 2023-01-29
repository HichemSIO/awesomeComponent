import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}/posts`);
  }

  addNewComment(postCommented: { comment: string, postId: number }) {
    console.log(postCommented);
}
}
