import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from '../counter';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})
export class NgrxComponent implements OnInit {

  counter: Observable<number>;

  constructor(private store: Store<AppState>){
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

  ngOnInit() {
  }

}
