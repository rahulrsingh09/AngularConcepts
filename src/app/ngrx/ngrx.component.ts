import {Component, OnInit, OnChanges} from '@angular/core';
import {Observable} from "rxjs";

import { Store } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET, ADD, DEL} from '../counter';
import {
  trigger,
  state,
  style,
  animate,
  transition, group
} from '@angular/animations';

interface AppState {
  counter: number;
  item: string[];
}

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
import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

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
}`;

  reducers = `
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer })
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
}`;

}
