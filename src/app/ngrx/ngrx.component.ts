import {Component, OnInit, OnChanges} from '@angular/core';
import {Observable} from "rxjs";

import { Store } from '@ngrx/store';
import {INCREMENT, DECREMENT, RESET, ADD} from '../counter';

interface AppState {
  counter: number;
  item: string[];
}

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit,OnChanges {

  counter: Observable<number>;
  item : Observable<string[]>;


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

  reset(){
    this.store.dispatch({ type: RESET });
  }

  add(){
    console.log("In Add Method");
    this.store.dispatch({type: ADD ,payload : "Hello"});
  }
  ngOnInit() {
  }

  ngOnChanges(){
    console.log("Item value"+ this.item);
  }

}
