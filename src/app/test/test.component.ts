import {Component, OnInit, Renderer2, ElementRef} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import * as firebase from "firebase/app";
import User = firebase.User;

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  all:any[];


  ngOnInit() {

  }

}


