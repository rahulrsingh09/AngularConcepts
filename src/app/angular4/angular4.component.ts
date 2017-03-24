import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherService} from "../shared/weather.service";

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css']
})
export class Angular4Component implements OnInit {

  message:string;
  data:string;

  lsObservable:string;
  lsPromise:string;


  code:string = `
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
  }
`

  constructor(private route:ActivatedRoute,private weatherService:WeatherService) {
  }

  ngOnInit() {

    this.weatherService.getLukeSkywalkerObservable().subscribe(res => {
        this.lsObservable = res;
    });

    this.message = this.route.snapshot.params['message'];
    this.data = this.route.snapshot.data['ping'];
    console.log("t"+this.data);

  }

}
