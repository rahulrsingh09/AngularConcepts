import { ActionReducerMap } from '@ngrx/store';

import { ADD,DEL,INCREMENT, DECREMENT, RESET, Actions } from './ngrx-actions';

export interface AppState {
  counter: number;
  item: string[];
}


export function counterReducer(state = 0,action: Actions):number {
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

export function itemReducer(state: string[] = [],action: Actions):string[] {
  switch (action.type) {
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


export const reducers: ActionReducerMap<AppState> = {
     counter: counterReducer,
     item: itemReducer
};