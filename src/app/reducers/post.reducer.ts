import { Action } from '@ngrx/store'
import  Post  from './../models/Post'
import * as PostActions from './../actions/post.actions'

const initialState: Post = new Post('My Name','What is your name from your childhood')

export function reducer(state: Post[] = [initialState], action: PostActions.Actions){

    switch(action.type) {
        case PostActions.ADD_POST:
            return [...state, action.payload];
        default:
            return state;
    }
}