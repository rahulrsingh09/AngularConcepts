import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html'
})
export class Angular4Component implements OnInit {

  component = `
import { Component } from '@angular/core';

@Component({
  
  selector: 'my-component',  
  template: 
    &lt;div&gt;Hello my name is {{name}}.&lt;div&gt;,
  styles : ['div { font-size: 20px; }']
})
export class MyComponent implements onInit{
  
  name: string;
  constructor() {}
  
  ngOnInit() {
    console.log('Its a good practise to always use ngOnInit instead of 
                 using Constructors for doing heavy tasks');
    this.name = 'Angular';
  }
}
`;

  constructor(){

  }

  ngOnInit(){

  }

}
