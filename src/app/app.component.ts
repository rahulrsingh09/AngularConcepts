import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {WeatherService} from "./shared/weather.service";
import { Theme } from './shared/theme.interface';
import {User} from "./shared/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{

  hello = "Angular";

  constructor(private weatherService:WeatherService){}

  ngOnInit() {
    this.weatherService.getWeatherForCity().subscribe();
  }
}


