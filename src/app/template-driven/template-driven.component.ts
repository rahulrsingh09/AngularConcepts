import {Component, OnInit, HostListener, ViewChild, AfterViewChecked} from '@angular/core';

import {User} from "../shared/user.interface";
import {Theme} from "../shared/theme.interface";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
  host: {'(click)': 'onClick()'}
})
export class TemplateDrivenComponent implements OnInit, AfterViewChecked {

  // all field related validation moved to the backend model instead of the template
  f: NgForm;
  @ViewChild('f') currentForm: NgForm;

  ngAfterViewChecked(){
      this.formChanged();
  }


  formChanged() {
    if (this.currentForm === this.f) { return; }
    this.f = this.currentForm;
    if (this.f) {
      this.f.valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }


  onValueChanged(data?: any) {
    if (!this.f) { return; }
    const form = this.f.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'name': '',
    'age' : ''
  };

  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'nameRahul': 'Name Must be Rahul'
    },
    'age': {
      'required': 'Age is Required',
      'asyncInvalid' : 'Async Validator'
    }
  };


  @HostListener('click') onClick(){
    console.log("User Click using Host Listner");
  }


  public user:User;

  constructor() { }

  public genders = [
    {value:'F',display:'Female'},
    {value:'M',display:'Male'},
  ];

  public roles = [
    {value :'admin',display : 'Administrator'},
    {value :'guest',display : 'Guest'},
    {value :'custom',display : 'Custom'}
  ];

  public themes : Theme[] = [
    {backgroundColor:'black',fontColor:'white',display:'Dark'},
    {backgroundColor:'white',fontColor:'black',display:'Light'},
    {backgroundColor:'grey',fontColor:'white',display:'Sleek'}
  ];

  public topics = [
    {value :'game',display:'Gaming'},
    {value :'tech',display:'Technology'},
    {value :'life',display:'Lifestyle'}
  ];

  public toggles = [
    {value : 'toggled',display:'Toggled'},
    {value : 'untoggled',display:'UnToggled'},
  ];

  public save(isValid:boolean,f:User){
    console.log(f);
  }

  ngOnInit() {
    this.user = {
      name:'',
      gender:this.genders[0].value,
      role:null,
      theme:this.themes[0],
      isActive:false,
      toggle:this.toggles[1].value,
      topics:[this.topics[1].value]
    }
  }



}
