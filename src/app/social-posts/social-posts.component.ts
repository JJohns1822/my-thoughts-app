import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  myPosts: Post[] = [
    {
      title: 'I am hungry',
      thoughts: 'If I had a cheeseburger right now I would be soooooo happy',
    },
    {
      title: 'How far away are the stars?',
      thoughts: 'Probably pretty far',
    },
  ];

  showForm: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit = (post: Post) => {
    this.myPosts.unshift(post);
    this.toggleForm();
  };

  onDelete = (index: number): void => {
    this.myPosts.splice(index, 1);
  };

  toggleForm = () => {
    this.showForm = !this.showForm;
  };
}
