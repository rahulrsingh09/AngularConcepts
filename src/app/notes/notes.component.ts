import {Component, OnInit, Renderer2, ElementRef} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AngularService} from "../shared/angular.service";
import {Observable} from "rxjs";

//using external js modules in Angular
declare var jsSHA: any;

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

  shaObj:any;
  hash:string;

  ifElse:string = ` 
  &lt;ng-template #fetching&gt
    &lt;p&gtFetching...&lt;/p&gt
  &lt;/ng-template&gt

  &lt;p *ngIf="auth | async; else fetching; let user"&gt
    &lt;strong&gtAngular 4 If else Usage - {{user.username }}&lt;/strong&gt
  &lt;/p&gt`;

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

  allQuestions :any [];

  constructor(private route: ActivatedRoute, private weatherService: AngularService, private fb: FormBuilder,
              private el:ElementRef,private r2: Renderer2) {
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

    this.allQuestions = this.el.nativeElement.querySelectorAll('.card');
    console.log(this.allQuestions);

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

    this.shaObj = new jsSHA("SHA-512", "TEXT");
    this.shaObj.update("This is a Test");
    this.hash = this.shaObj.getHash("HEX");
  }

  submit(text:string){

    this.allQuestions.forEach(value => {
      if(value.firstElementChild.textContent.includes(text) && text){
        console.log(value.firstElementChild.textContent);
        this.r2.addClass(value,"hide");
      } else{
        this.r2.removeClass(value,"hide");
      }
    });
  }


}
