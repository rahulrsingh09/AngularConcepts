/**
 * Created by rahul.singh@c1exchange.com on 6/30/2017.
 */


import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from "rxjs";
import {AngularService} from "../shared/angular.service";
import { LocalStorageService } from 'angular-2-local-storage';


@Injectable()
export class FireAuthResolve implements Resolve<any> {

  constructor(private service: AngularService, private localStorage: LocalStorageService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    if (localStorage.getItem("user")){
      //console.log("here");
      //console.log(JSON.parse(localStorage.getItem("user")));
      return Observable.of(true);
    } else {
      return Observable.of(false);
    }
  }
}




