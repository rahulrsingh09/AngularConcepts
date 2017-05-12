/**
 * Created by SINGH on 2/27/2017.
 */

import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const ADD = 'ADD';
export const DEL = 'DEL';


export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

export function itemReducer(state: string[] = [], action: Action){
  switch(action.type){
    case ADD:
      state.push(action.payload);
      return state;
    case DEL:
      return state.filter(item => {
        return item !== action.payload;
      });
    default:
      return state;
  }
}
