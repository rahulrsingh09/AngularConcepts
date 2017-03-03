import { Component, OnInit } from '@angular/core';

import {User} from "../shared/user.interface";
import {Theme} from "../shared/theme.interface";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

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
