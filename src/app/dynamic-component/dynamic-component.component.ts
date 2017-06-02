import {Component, OnInit} from '@angular/core';
import {AdItem} from "./ad-item";
import {WeatherService} from "../shared/weather.service";


@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html'
})
export class DynamicComponentComponent implements OnInit{

  ads: AdItem[];

  constructor(private service: WeatherService) {}

  ngOnInit() {
    this.ads = this.service.getAds();
  }

}
