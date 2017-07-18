import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {AngularService} from "./shared/angular.service";
import {MdDialog, MdDialogRef, MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit{

  isActive:boolean = false;
  selectedOption: string;
  hello = "Angular";
  cityName :string;


  constructor(private service:AngularService , mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer
             , public dialog: MdDialog){
    mdIconRegistry.addSvgIcon('icon', sanitizer.bypassSecurityTrustResourceUrl('angular.svg'));

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {
    this.service.incrementPageCount().then(data => this.service.changeCount(data));
  }

}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}



