import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, GuardsCheckStart, RoutesRecognized, NavigationStart } from "@angular/router";

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  message:string;
  
  constructor(private router:Router,) { 
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        console.log("GuardsCheckStart event");
      }
    });
  }

  ngOnInit() {

  }

  navigate(value:string){
    this.router.navigate(['guardcheck',{key:value}]);
  }

  canDeactivate() {
    alert('I am navigating away');
    let user = "x";
      if (user == "x") {
      return window.confirm('Discard changes?');
    }
    return true;
  }

}
