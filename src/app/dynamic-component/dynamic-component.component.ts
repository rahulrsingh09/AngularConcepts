import {Component, OnInit} from '@angular/core';
import {AdItem} from "./ad-item";
import {AngularService} from "../shared/angular.service";


@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html'
})
export class DynamicComponentComponent implements OnInit{

  ads: AdItem[];

  constructor(private service: AngularService) {}

  ngOnInit() {
    this.ads = this.service.getAds();
  }

}
