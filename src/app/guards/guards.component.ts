import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  code = `      import { Injectable } from '@angular/core';
              import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
              import {CompetitionService} from "../shared/competition.service";
              import {Observable} from "rxjs";
          
          
              @Injectable()
              export class TableResolve implements Resolve<any> {
          
              constructor(private competitionService:CompetitionService) {}
          
              resolve(route: ActivatedRouteSnapshot):Observable<> {
                return this.competitionService.getTeams(route.params['id']);
                  }
                }
          `;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(value:string){
    this.router.navigate(['guardcheck',{key:value}]);
  }

  canDeactivate() {
    console.log('i am navigating away');
    let user = "x";
      if (user == "x") {
      return window.confirm('Discard changes?');
    }
    return true;
  }

}
