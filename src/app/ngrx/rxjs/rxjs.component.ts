import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  back(){
    //console.log("called");
    this.router.navigate(['ngrx']);
  }

}
