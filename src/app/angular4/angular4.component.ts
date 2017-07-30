import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html'
})
export class Angular4Component implements OnInit {

  testHtml = `{{name}}`;

  constructor(){

  }

  ngOnInit(){

  }

}
