import { Action } from '@ngrx/store'
import  Post  from './../models/Post'

export const ADD_POST       = '[Post] Add'

export class AddPost implements Action {
    readonly type = ADD_POST

    constructor(public payload: Post) {}
}

export type Actions = AddPost