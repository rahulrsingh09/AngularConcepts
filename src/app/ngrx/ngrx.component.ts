import {Component, OnInit, OnChanges} from '@angular/core';
import {Observable} from "rxjs";

import { Store } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET, ADD, DEL} from '../counter';
import {
  trigger,
  state,
  style,
  animate,
  transition
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
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in')
      ]),
      transition('* => void', [
        animate(300, style({transform: 'translateX(100%)'}))
      ])
    ])


  ]
})
export class NgrxComponent implements OnInit,OnChanges {

  counter: Observable<number>;
  item : Observable<string[]>;
  state:string = 'inactive';


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

  add() {
    this.state = (this.state === 'active') ? 'inactive' : 'active';
    this.store.dispatch({type: ADD , payload : 'Hello'});
  }
  ngOnInit() {
  }

  get(item: string, index: string) {
    console.log("Item"+ item + "index" + index);
    this.store.dispatch({type: DEL , payload : item});

  }

  ngOnChanges(){
    console.log("Item value"+ this.item);
  }

}
