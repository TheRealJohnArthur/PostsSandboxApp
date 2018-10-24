import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPostEvent: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPostEvent: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;
  

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  addPost(title, body){
    if(!title || !body) {
      alert('Please add details.');
    } else {
      this.postService.savePost({title, body} as Post).subscribe(post => {
        this.newPostEvent.emit(post);
      });
    }
  }

  editPost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      this.isEdit = false;
      this.updatedPostEvent.emit(post);
    });
  }

}
