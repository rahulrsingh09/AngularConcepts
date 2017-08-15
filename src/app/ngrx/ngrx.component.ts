import { AppState } from './state-management/ngrx-reducer';
import {Component, OnInit, OnChanges} from '@angular/core';
import {Observable} from "rxjs";
import { Store } from '@ngrx/store';
import {
  trigger,
  state,
  style,
  animate,
  transition, group
} from '@angular/animations';

import {INCREMENT, DECREMENT, RESET, ADD, DEL} from './state-management/ngrx-actions';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css'],
  animations: [
    trigger('ngrxStore',[
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-in')),
    ]),
    //another type of styling
    /*trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
          animate('300ms ease-in')
        ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])*/trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 1140
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])

  ]
})
export class NgrxComponent implements OnInit, OnChanges {

  counter: Observable<number>;
  item: Observable<string[]>;
  state: string = 'inactive';


  constructor(private store: Store<AppState>){
    this.counter = store.select('counter');
    this.item = store.select('item');
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }

  add(list: string) {
    this.state = (this.state === 'active') ? 'inactive' : 'active';
    this.store.dispatch({type: ADD , payload : list});
  }
  ngOnInit() {
  }

  get(item: string) {
    this.store.dispatch({type: DEL , payload : item});

  }

  ngOnChanges() {
    console.log('Item value' + this.item);
  }

  animationStarted(event : any) {
    console.log('Started Animation');
  }



  counterTs = `
// counter.ts
import { ActionReducerMap } from '@ngrx/store';

import { ADD,DEL,INCREMENT, DECREMENT, RESET, Actions } from './ngrx-actions';

export interface AppState {
  counter: number;
}

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

export const reducers: ActionReducerMap<AppState> = {
     counter: counterReducer
};

//Additional Action in ngrx4 . Now the payload property has been removed from ngrx v4 
//so we have to define our own payload and actions

import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

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
}
export type Actions =
  | increment
  | decrement
  | reset
`;

  reducers = `
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import * as fromRoot from "./ngrx/state-management/ngrx-reducer";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRoot.reducers),
  ]
})
export class AppModule {}`;

component = `
class MyAppComponent {
	counter: Observable&lt;number&gt;;

	constructor(private store: Store&lt;AppState&gt;){
		this.counter = store.select('counter');
	}

	increment(){
		this.store.dispatch({ type: INCREMENT });
	}

	decrement(){
		this.store.dispatch({ type: DECREMENT });
	}

	reset(){
		this.store.dispatch({ type: RESET });
	}
}
`;

}
