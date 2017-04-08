/**
 * Created by SINGH on 3/4/2017.
 */
import {CanDeactivate} from "@angular/router";
import {Injectable} from "@angular/core";

import {GuardsComponent} from "./guards.component";
import {Observable} from "rxjs";

@Injectable()
export class DeactivateGuard implements CanDeactivate<GuardsComponent>{


  constructor()
  {

  }

  canDeactivate(target : GuardsComponent):Observable<boolean> | boolean{
    console.log("Indeactivate Guard");
    return target.canDeactivate();
  }
}
