import {Component, OnInit, Renderer2, ViewChild, ElementRef} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import * as firebase from 'firebase/app';
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
  user: any;
  comment:string;
  comments:any;

  constructor(public afAuth: AngularFireAuth,private route: ActivatedRoute,
              private service: AngularService,private el:ElementRef,private r2: Renderer2) {}

  login() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    /*this.afAuth.authState.subscribe((data) => {localStorage.setItem("user",JSON.stringify(data));
     this.user = data;console.log("data"+data);});*/
  }

  logout() {
    this.user = null;
    this.afAuth.auth.signOut();
    localStorage.removeItem("user");
  }

  ngOnInit() {
    this.display = this.route.snapshot.data['Auth'];

    if(this.display){
      this.user = JSON.parse(localStorage.getItem("user"));
      this.service.fetchData(this.user.uid).subscribe((data) => {this.comments = data;});
    } else {
      this.afAuth.authState.subscribe((data) => {
        console.log("Here");
        if (data) {
          //const clone = data;
          //data.timestamp = {TimeStamp : new Date().getTime()};
          //console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          //console.log(JSON.parse(localStorage.getItem("user")));
          this.user = data;
          //localStorage.setItem(this.user.uid,""+new Date().getTime());
          //console.log(this.user);
          this.service.fetchData(this.user.uid).subscribe((res) => {
            this.comments = res;
          });
        } else {
          this.comments = null;
        }
      });

    }

  }

  add(){
    this.service.postComment(this.comment, this.user);
  }

  edit(i:number){
    //console.log(this.el.nativeElement.querySelector('#index'+i));
    this.r2.removeAttribute( this.el.nativeElement.querySelector('#index'+i),"readonly");
    let now = new Date();
    let ts = new Date(this.comments[0].createdAt);
    let diff = now.getTime() -  ts.getTime();

    console.log(ts , now);

    console.log(diff > 5 * 60 * 1000);
  }


}
