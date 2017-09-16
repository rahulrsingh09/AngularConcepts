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
        "name" : "Heart of all the logic you hit the jackpot :)"
      }
    };
  }

  createWorldHello(){
    this.componentData = {
      "component" : WorldHelloComponent,
      "inputs" : {
        "name" : "It wasn't me After All . Check the other button he is Better @ Dynamic Components :P !!"
      }
    };
  }

}
