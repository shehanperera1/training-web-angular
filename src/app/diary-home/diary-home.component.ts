import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import Post from '../models/Post';
import {select, Store} from "@ngrx/store";
import {submitPost} from "../Store/post.actions";
import {Observable} from "rxjs";
import {selectPosts} from "../Store/post.selectors";

@Component({
  selector: 'app-diary-home',
  templateUrl: './diary-home.component.html',
  styleUrls: ['./diary-home.component.scss']
})
export class DiaryHomeComponent implements OnInit {
  public form: FormGroup;
  public posts:Observable<Post[]> = this.store.pipe(select(selectPosts))
  constructor(private store:Store) {
    this.form = new FormGroup({
      title: new FormControl(''),
      description: new FormControl('')
    })
  }
  ngOnInit(): void {
  }


  public submitForm(): void {
    if(!this.form.get('title')?.value){
      console.log('Empty Title');
    }
    else if(!this.form.get('description')?.value){
      console.log('Empty description');
    }
    else{
      let post = new Post(this.form.get('title')?.value,this.form.get('description')?.value);
      this.store.dispatch(submitPost({post:post}));
    console.log(this.form.get('title')?.value);
    console.log(this.form.get('description')?.value);
    }
    
    this.form.reset();
  }
}