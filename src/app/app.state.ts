import Post from './models/Post';

export interface AppState {
  readonly postList: Post[];
}