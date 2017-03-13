import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  getWeatherForCity(){
      //let headers = new Headers();
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=ae7307a14567cec9e97e644ff46b702d').map(response => response.json());

  }
}
