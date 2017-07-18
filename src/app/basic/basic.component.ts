import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {AngularService} from "../shared/angular.service";
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit,OnDestroy{

  message:string;
  pageCount:number;
  subscription:Subscription;

  constructor(private router: Router,private route: ActivatedRoute, private service: AngularService){}

  ngOnInit() {
    this.subscription = this.service.count$
      .subscribe(item => this.pageCount = item)
    this.message = this.route.snapshot.params['message'];
  }


  goToComment() {
    this.router.navigate(['comment']);
  }

  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }
}

