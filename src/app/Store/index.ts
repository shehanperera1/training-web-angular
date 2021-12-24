import { ActionReducerMap } from "@ngrx/store";
import {postReducer, postsState} from "./post.reducers";

export enum Features {
  Posts = 'posts'
}

export interface RootState {
  posts:postsState;
}

export const reducers: ActionReducerMap<RootState> = {
  posts:postReducer
}