import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentchild',
  templateUrl: './parentchild.component.html',
  styleUrls: ['./parentchild.component.css']
})
export class ParentchildComponent implements OnInit {

  valueToBePassed:string;
  childValue:string;

  constructor() { }

  ngOnInit() {
  }

}
