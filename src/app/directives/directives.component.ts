import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  directive = `
import {Directive, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {

  //we can also add the attribute directive likek this [appconfirm] if the input in the directive has same name as appConfirm like
  //@Input() appConfirm:string; and then in component button we can use the directive like
  //&lt;button type="button" [appConfirm] = "Rahul"&gt;Click to Send to Directive&lt;/button&gt;
  //we can also add the attribute directive like this [appconfirm] if the input in the directive has same name as appConfirm
  // we can also pass values to the directives from the component like instead of "[value]" send a variable from component

  @Input() value:string;

  @HostListener('click',['$event'])
  confirm(){
      const confirmed = window.confirm("Are you Sure ?");
      if(confirmed){
        window.alert("This is Value ["+this.value+"] Passed by the Component to the Directive")
      }
  }

  constructor() { }

}`

  constructor() { }

  ngOnInit() {
  }

}
