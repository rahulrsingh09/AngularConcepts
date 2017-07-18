import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  message:string;
  pageCount:number;

  constructor(private router: Router,private route: ActivatedRoute, private service: AngularService){}

  ngOnInit() {
    this.service.incrementPageCount().then(data => this.pageCount = data);
    this.message = this.route.snapshot.params['message'];
  }


  goToComment() {
    this.router.navigate(['comment']);
  }
}

