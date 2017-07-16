import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-childparent',
  templateUrl: './childparent.component.html'
})
export class ChildparentComponent implements OnInit {

  @Input() valuepassed:string;
  @Output() toParent = new EventEmitter<string>();

  constructor() { }

  onChange(value:string){
    this.toParent.emit(value);
  }

  ngOnInit() {
  }

}
