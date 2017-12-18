
import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit{

  constructor(private router : Router, public dialog: MatDialog) { }

  ngOnInit(){setTimeout(() => this.dialog.open(LazyDailog),0);}

  back(){
    
    this.router.navigate(['ngrx']);
  }

}

@Component({
  selector: 'lazyDailog',
  templateUrl: './lazyDailog.html',
})
export class LazyDailog {
  constructor(public dialogRef: MatDialogRef<LazyDailog>) {}
}
