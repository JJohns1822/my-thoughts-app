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
      title: 'Go Grocer Shopping',
      thoughts: 'Remember paper towel',
    },
    {
      title: 'Mow the Lawn',
      thoughts: 'Pickup gas first',
    },
    {
      title: 'File Taxes',
      thoughts: 'Due April 26th',
    },
    {
      title: 'Study For Exam',
      thoughts: 'Make cue cards',
    },
    {
      title: 'Do Laundry',
      thoughts: 'Air dry your new sweater',
    },
    {
      title: 'Walk the Dog',
      thoughts: 'Bring poop bags',
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
