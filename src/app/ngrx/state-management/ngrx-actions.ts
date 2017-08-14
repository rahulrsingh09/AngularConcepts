import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const ADD = 'ADD';
export const DEL = 'DEL';


export class increment implements Action {
  readonly type = INCREMENT;
}

export class decrement implements Action {
  readonly type = DECREMENT;
}

export class reset implements Action {
  readonly type = RESET;

  constructor(public payload: any) {}
}

export class add implements Action {
  readonly type = ADD;

  constructor(public payload: any) {}
}


export class del implements Action {
  readonly type = DEL;

  constructor(public payload: any) {}
}


export type Actions =
  | increment
  | decrement
  | reset
  | add
  | del
;