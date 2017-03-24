import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";


@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  getWeatherForCity(){
      //let headers = new Headers();
      return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=ae7307a14567cec9e97e644ff46b702d')
        .map(res => {
          if(res.status < 200 || res.status >= 300) {
            throw new Error('This request has failed ' + res.status);
          }
          return res.json();
        }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  getLukeSkywalkerObservable(){
      return this.http.get('http://swapi.co/api/people/1/')
              .map(res => {
                 return  res.json();
              }).map(data => {
                return data;
        }).flatMap((jedi) => this.http.get(jedi.homeworld))
          .map(res => {
           return res.json().name;
          }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
