import {Component, OnInit, Renderer2, ViewChild, ElementRef, ViewContainerRef} from "@angular/core";
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
import {Overlay} from "angular2-modal";
import { Modal } from 'angular2-modal/plugins/bootstrap';
import {DialogResultExampleDialog} from "../app.component";
import {MdDialog} from "@angular/material";

declare var _:any;

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

  selectedOption: string;
  display: boolean;
  user: any;
  comment:string;
  comments:any;
  showProgress:boolean = false;

  constructor(public afAuth: AngularFireAuth,private route: ActivatedRoute,
              private service: AngularService,private el:ElementRef,private r2: Renderer2,
              overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal , public dialog: MdDialog) {}

  login(provider:string) {
    this.showProgress = true;
    if(provider === 'google') {
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    } else {
      this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    }
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
      this.showProgress = true;
      this.user = JSON.parse(localStorage.getItem("user"));
      this.service.fetchData().subscribe((data) => {console.log(data),this.comments = data;this.showProgress = false;});
    } else {
      this.afAuth.authState.subscribe((data) => {
        console.log("Here");
        if (data) {
          this.showProgress = true;
          //const clone = data;
          //data.timestamp = {TimeStamp : new Date().getTime()};
          //console.log(data);
          localStorage.setItem("user", JSON.stringify(data));
          //console.log(JSON.parse(localStorage.getItem("user")));
          this.user = data;
          //localStorage.setItem(this.user.uid,""+new Date().getTime());
          //console.log(this.user);
          this.service.fetchData().subscribe((res) => {
            this.comments = res;
            this.showProgress = false;
          });
        } else {
          this.comments = null;
        }
      });

    }

  }

  add(){
    this.service.postComment(this.comment, this.user);
    this.comment = "";
  }

  edit(i:number){
    let now = new Date();
    let ts = new Date(this.comments[i].createdAt);
    let diff = now.getTime() -  ts.getTime();


    if(diff <  5 * 60 * 1000){
      this.r2.removeClass(this.el.nativeElement.querySelector('#index'+i),"label-look");
      this.r2.addClass(this.el.nativeElement.querySelector('#index'+i),"edit-Label");
      this.r2.removeAttribute( this.el.nativeElement.querySelector('#index'+i),"readonly");
      this.r2.removeClass( this.el.nativeElement.querySelector(".submit"+i),"submit"+i);
      this.r2.addClass( this.el.nativeElement.querySelector("#edit"+i),"remove-edit");
    } else {
        this.modal.alert()
          .size('sm')
          .body('Cannot be Edited after 5 minutes')
          .open();
    }

    //console.log(ts , now);
  }

  submitEdit(i:number,comment:string){
    const updated = this.comments[i];
    updated.comment  = comment;
    //console.log(updated.$key);
    this.service.editComment(updated.$key,updated);
  }

  deleteComment(i:number){
    this.service.deleteComment(this.comments[i].$key);
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }


}
