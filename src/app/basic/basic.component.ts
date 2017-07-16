import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  message:string;

  constructor(private router: Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.message = this.route.snapshot.params['message'];
  }


  goToComment() {
    this.router.navigate(['comment']);
  }
}

