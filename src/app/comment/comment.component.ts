import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import * as firebase from 'firebase/app';
import { LocalStorageService } from 'angular-2-local-storage';
import {ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";
import {
  trigger,
  state,
  style,
  animate,
  transition, group
} from '@angular/animations';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [ trigger('flyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('* => *', [
      style({width: 10, transform: 'translateX(50px)', opacity: 0}),
      group([
        animate('0.3s 0.1s ease', style({
          transform: 'translateX(0)',
          width: 1140
        })),
        animate('0.3s ease', style({
          opacity: 1
        }))
      ])
    ]),
    transition('* => *', [
      group([
        animate('0.3s ease', style({
          transform: 'translateX(50px)',
          width: 10
        })),
        animate('0.3s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ])
  ]
})
export class CommentComponent implements OnInit {

  display: boolean;
  user: firebase.User;
  comment:string;
  comments:any;

  constructor(public afAuth: AngularFireAuth,private route: ActivatedRoute,private localStorage: LocalStorageService, private service: AngularService) {}

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.afAuth.authState.subscribe((data) => {localStorage.setItem("user",JSON.stringify(data));
                                    this.user = data;});
  }

  logout() {
    this.user = null;
    this.afAuth.auth.signOut();
    localStorage.removeItem("user");
    console.log(this.user);
  }

  ngOnInit() {
    this.display = this.route.snapshot.data['Auth'];
    this.user = JSON.parse(localStorage.getItem("user"));

    if(this.display){
      this.service.fetchData(this.user.uid).subscribe((data) => {this.comments = data;
                                                        console.log("comments"+JSON.stringify(this.comments));});
    }

  }

  add(){
    this.service.postComment(this.comment, this.user);
  }

}
