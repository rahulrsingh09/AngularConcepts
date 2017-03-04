/**
 * Created by SINGH on 3/4/2017.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{


  constructor(protected router: Router)
  {

  }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot):Observable<boolean> | boolean{
      console.log("In Can Activate AuthGuard");
      if(route.params['key'] == "X"){
        return true;
      }
      this.router.navigate(['/a4',{message:"Not Authorised"}]);
      return false;
    }
}
