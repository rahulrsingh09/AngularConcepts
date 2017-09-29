import {Component, OnInit, Renderer2, ElementRef} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase/app";
import {ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";
import {trigger, state, style, animate, transition, group} from "@angular/animations";
import {Modal} from "angular2-modal/plugins/bootstrap";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [ trigger('flyInOut', [
    state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
    transition('void => *', [
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
    transition('* => void', [
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
  showProgress:boolean = false;
  page: number = 1;
  //fakeImage:string = "../assets/images/user.png";
  fakeImage:string = "user.png";

  public filter: string = '';

  constructor(public afAuth: AngularFireAuth,private route: ActivatedRoute,
              private service: AngularService,private el:ElementRef,private r2: Renderer2,
              public modal: Modal) {}

  login(provider:string) {
    this.showProgress = true;
    this.service.changeSpinnerStatus(true);
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
    this.service.changeSpinnerStatus(true);
    this.display = this.route.snapshot.data['Auth'];
    if(this.display){
      this.user = JSON.parse(localStorage.getItem("user"));
      this.service.fetchData().subscribe((data) => {
      this.comments = data;
        this.service.changeSpinnerStatus(false);
      });
    } else {
      this.afAuth.authState.subscribe((data) => {
        if (data) {
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
            this.service.changeSpinnerStatus(false);
          });
        } else {
          this.service.changeSpinnerStatus(false);
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
    const index = ((this.page-1)*5)+i;
    //console.log(index);
    let ts = new Date(this.comments[index].createdAt);
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
    const index = ((this.page-1)*5)+i;
    const updated = this.comments[index];
    updated.comment  = comment;
    this.service.editComment(updated.$key,updated);
    //work around not ideal solution for issue #1 and #2
    this.service.fetchData().subscribe(data => this.comments = data);
  }

  deleteComment(i:number){
    //disable call to this method while testing
    if(confirm("Are you sure you want to delete your Comment")) {
      const index = ((this.page-1)*5)+i;
      this.service.deleteComment(this.comments[index].$key);
      //work around not ideal solution #2
      this.service.fetchData().subscribe(data => this.comments = data);
    }
  }


}
