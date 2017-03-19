import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-angular4',
  templateUrl: './angular4.component.html',
  styleUrls: ['./angular4.component.css']
})
export class Angular4Component implements OnInit {

  message:string;
  data:string;
  constructor(private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.message = this.route.snapshot.params['message'];
    this.data = this.route.snapshot.data['ping'];
    console.log("t"+this.data);
  }

}
