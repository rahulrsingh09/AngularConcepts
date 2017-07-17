import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import * as firebase from "firebase/app";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import User = firebase.User;


@Injectable()
export class TestResolve implements Resolve<any> {

  users: FirebaseListObservable<User[]>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
    this.users = this.db.list('/users') as FirebaseListObservable<User[]>;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    this.afAuth.authState.subscribe((data) => {
      if(data){
      this.users.subscribe(users => {
        let exists = users.some(function (el) {
          return el.email === data.email;
        });
        //If email does not exists in the database i.e. New user
        if (!exists) {
          this.router.navigate(['/cli']);
        }
        else {
          // If user already exists
          this.router.navigate(['/basic']);
        }
      });
      }
    });
  }

}




