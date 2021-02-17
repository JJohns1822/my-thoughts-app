import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  isShowDiv = true;

  constructor() {}

  ngOnInit(): void {}

  sendPost = (form: NgForm): void => {
    let newPost: Post = {
      title: form.form.value.title,
      thoughts: form.form.value.thoughts,
    };
    this.submitted.emit(newPost);
  };

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }
}
