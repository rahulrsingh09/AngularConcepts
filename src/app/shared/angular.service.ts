import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from "rxjs";
import {HeroProfileComponent} from "../dynamic-component/hero-profile-ad.component";
import {AdItem} from "../dynamic-component/ad-item";
import {HeroJobAdComponent} from "../dynamic-component/hero-job-ad.component";
import {AngularFireDatabase} from "angularfire2/database/database";
import * as firebase from 'firebase/app';

@Injectable()
export class AngularService {

  private increment = 1;
  private username = 'rahulrsingh09';
  private client_id = "ca1f1104614b5c2440b3";
  private client_secret = "96620cea135b2297d7bf95cbc246f56efa116c25";


  constructor(private http:Http, private af: AngularFireDatabase) { }


  getLukeSkywalkerObservable(){
      return this.http.get('https://swapi.co/api/people/1/')
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
    return this.http.get('https://swapi.co/api/people/1/').toPromise()
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
// In order to bind two promises what you can do is You can also call toPromise() on an Observable and convert it to a regular promise as well.
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

  fetchData(){
    return this.af.list('/comments/users/');
  }

  postComment(comment:string, user: firebase.User){
    //const comments = this.af.list('/comments/users/'+ user.uid);
    const comments = this.af.list('/comments/users/');
    comments.push({
      id: this.increment += 1,
      name: user.displayName,
      photo: user.photoURL,
      comment : comment,
      userid : user.uid,
      createdAt : firebase.database.ServerValue.TIMESTAMP});

  }

  editComment(key:string,updatedComment:any){
    this.af.object('/comments/users/'+key).update(updatedComment);
  }

  deleteComment(key:String){
    this.af.object('/comments/users/'+key).remove();
  }
}


