import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";

import {Theme} from "../shared/theme.interface";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  user:FormGroup;
  toggle

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name:new FormControl(''),
      age:new FormControl(''),
      gender:new FormControl(''),
      role:new FormControl(''),
      theme:new FormControl(''),
      topics:new FormControl(''),
      isActive:new FormControl(false),
      toggle:new FormControl('')
    });
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
      this.user.controls['toggle'].setValue('untoggled');
    }
  }


}
