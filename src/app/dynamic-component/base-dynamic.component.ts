import {Component, OnInit} from '@angular/core';
import {AngularService} from "../shared/angular.service";

import { WorldHelloComponent } from './dynamic/world-hello-component';
import { HelloWorldComponent } from 'app/dynamic-component/dynamic/hello-world-component';

@Component({
  selector: 'base-dynamic',
  templateUrl: './base.dynamic.component.html'
})
export class BaseDynamicComponent implements OnInit{

  componentData = null;

  constructor(private service: AngularService) {}

  ngOnInit() {
    //this.ads = this.service.getAds();
  }

  createHelloWorld(){
    this.componentData = {
      "component" : HelloWorldComponent,
      "inputs" : {
        "name" : "Rahul"
      }
    };
  }

  createWorldHello(){
    this.componentData = {
      "component" : WorldHelloComponent,
      "inputs" : {
        "name" : "Rahul Singh"
      }
    };
  }

}
