import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormControl, Validators} from "@angular/forms";
import {Theme} from "../shared/theme.interface";

import {validate,emailValidator} from './validator';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  user:FormGroup;
  toggle;
  constructor() {
    
   }

  ngOnInit() {
    this.user = new FormGroup({
      name:new FormGroup({
        firstName : new FormControl('',Validators.required),
        lastName : new FormControl('')
      }),
      age:new FormControl('',null,validate),
      email: new FormControl('',emailValidator),
      addresses: new FormArray([
        this.initAddress(), 
      ]),
      gender:new FormControl(''),
      role:new FormControl(''),
      theme:new FormControl(''),
      topics:new FormControl(''),
      isActive:new FormControl(false),
      discount: new FormControl(''),
      toggle:new FormControl('')
    });

      this.user.patchValue({name :{firstName:"Rahul",lastName:"Singh"}}); // adding default values to the form

      //let val = this.user.get('addresses') as FormArray; form control of for array
      //console.log(val.at(1));
      //this.user.get('name').valueChanges.subscribe(data => console.log(this.user.get('age'))); // or
      //this.user.get('name').valueChanges.subscribe(data => console.log(data)); 
      
  }


  initAddress(){
    return new FormGroup({
      street : new FormControl(''),
      postcode : new FormControl('')
    });
  }


  addAddress(){
    const control = <FormArray>this.user.controls['addresses'];
    control.push(this.initAddress());
  }

  removeAddress(i: number){
    const control = <FormArray>this.user.controls['addresses'];
    control.removeAt(i);
  }

  public roles = [
    {value :'admin',display : 'Administrator'},
    {value :'guest',display : 'Guest'},
    {value :'custom',display : 'Custom'}
  ];

  public genders = [
    {value:'F',display:'Female'},
    {value:'M',display:'Male'},
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
  ]


  onSubmit(user){
    console.log(user);
    if(this.user.get('toggle').value){
      this.user.controls['toggle'].setValue('toggled');
    }else{
      console.log("here");
      this.user.controls['toggle'].setValue('untoggled');
    }
  }

  getAddresses(form){
    return form.get('addresses').controls;
  }

  getUserControl(form){
    return form.get('name').controls;
  }

}
