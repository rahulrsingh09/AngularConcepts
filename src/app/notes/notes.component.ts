import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AngularService} from "../shared/angular.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  data: string;
  show: boolean;
  auth: Observable<{}>;

  lsObservable: string;
  lsPromise: string;

  searchField: FormControl;
  coolForm: FormGroup;

  //Testing moments
  myDate: Date;


  code: string = `
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

  promsieCode: string = ` getLukeSkywalkerPromise(){
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
// In order to bind two promises what you can do is You can also call toPromise() on an Observable and convert it to a regular promise as well.
 // and then bind it using flat map as when we use in observables.
`;

  constructor(private route: ActivatedRoute, private weatherService: AngularService, private fb: FormBuilder) {
    this.searchField = new FormControl();
    this.coolForm = fb.group({search: this.searchField});

    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.weatherService.getUser(term))
      .subscribe((result) => {
      });

    this.myDate = new Date();
  }

  ngOnInit() {

    this.show = false;
    this.auth = Observable
      .of({username: 'Rahul', password: 'secret'})
      .delay(new Date(Date.now() + 4000));

    this.weatherService.getLukeSkywalkerObservable().subscribe(res => {
      this.lsObservable = res;
    });

    this.weatherService.getLukeSkywalkerPromise().then((data) => {
      this.lsPromise = data;
    });

    this.data = this.route.snapshot.data['ping'];
    //console.log("t"+this.data);


  }

}
