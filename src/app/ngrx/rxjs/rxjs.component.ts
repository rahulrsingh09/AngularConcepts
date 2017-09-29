
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit {

  constructor(private router : Router, public dialog: MdDialog) { }

  ngOnInit() {
    let dialogRef = this.dialog.open(LazyDailog);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  back(){
    
    this.router.navigate(['ngrx']);
  }

}

@Component({
  selector: 'lazyDailog',
  templateUrl: './lazyDailog.html',
})
export class LazyDailog {
  constructor(public dialogRef: MdDialogRef<LazyDailog>) {}
}
