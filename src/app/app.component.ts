import {Component, OnInit} from '@angular/core';

import {WeatherService} from "./shared/weather.service";
import { Theme } from './shared/theme.interface';
import {User} from "./shared/user.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(private weatherService:WeatherService){}

  ngOnInit() {
    this.weatherService.getWeatherForCity().subscribe();
  }
}


