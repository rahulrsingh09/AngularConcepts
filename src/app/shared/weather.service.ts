import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {HeroProfileComponent} from "../dynamic-component/hero-profile-ad.component";
import {AdItem} from "../dynamic-component/ad-item";
import {HeroJobAdComponent} from "../dynamic-component/hero-job-ad.component";


@Injectable()
export class WeatherService {

  private username = 'rahulrsingh09';
  private client_id = "ca1f1104614b5c2440b3";
  private client_secret = "96620cea135b2297d7bf95cbc246f56efa116c25";


  constructor(private http:Http) { }

  getWeatherForCity(){
      //let headers = new Headers();
      return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ae7307a14567cec9e97e644ff46b702d')
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
                 return  res.json(); // using maps to filter data returned form the http call
              }).map(data => {
                return data; // using maps of maps to filter data returned form the map
        }).flatMap((jedi) => this.http.get(jedi.homeworld))
          .map(res => {
           return res.json().name; // using flat maps to combine data returned from two observables into one
          }).catch((error:any) => Observable.throw(error.json().error || 'Server error'));

      //switchMap is very similar to flatMap, but with a very important distinction.
    // Any events to be merged into the trunk stream are ignored if a new event comes in.
  }


  getLukeSkywalkerPromise(){
    return this.http.get('http://swapi.co/api/people/1/').toPromise()
      .then((data) => {
        console.log(data); // binding the result from the promise
        return data.json();
      }).then((data) => {
        console.log(data.name); // more like map of map but limited functionality
        return data.name;
      }).catch((ex) => {
          console.error('Server Error'+ex);
      })
  }
// In oreder to bind two promises what you can do is You can also call toPromise() on an Observable and convert it to a regular promise as well.
 // and then bind it using flat map as when we use in observables.


  getUser(user:string){
    return this.http.get('https://api.github.com/users/'+user)
      .map(response => response.json())
      .map(data => console.log("No of public Repos" + data.public_repos));
  }

 /* getChartDataAsync(){
    return this.http.get("https://cdn.rawgit.com/gevgeny/angular2-highcharts/99c6324d/examples/aapl.json")
                .map(reponse => reponse.json());
  }*/


  getPocData(cid: string, tc: string, channel: string, pageType: string, productId: string, searchText: string, rid: string){
    return this.http.get("http://localhost:8080/ad?CID="+cid+"&TC="+tc+"&CHANNEL="+channel+"&pageType="+pageType+"&productId="+productId+"&searchText="+searchText+"&rid="+rid)
      .map(response => response.json());
  }


  //AdService

  getAds() {
    return [
      new AdItem(HeroProfileComponent, {name: 'Rahul Singh', bio: 'Angular Admirer'}),

      new AdItem(HeroProfileComponent, {name: 'Mom', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring Angular Dev',
        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
    ];
  }


}


