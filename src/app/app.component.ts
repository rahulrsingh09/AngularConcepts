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

  selectedOption: string;
  hello = "Angular";
  cityName :string;


  constructor(private weatherService:AngularService , mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer
             , public dialog: MdDialog){
    //mdIconRegistry.addSvgIcon('icon', sanitizer.bypassSecurityTrustResourceUrl('../assets/images/angular.svg'));
    mdIconRegistry.
      addSvgIcon('icon',
      sanitizer.bypassSecurityTrustResourceUrl('https://github.com/rahulrsingh09/AngularConcepts/blob/gh-pages/assets/images/angular.svg'));

  }


  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

  ngOnInit() {

    this.weatherService.getWeatherForCity().subscribe(data => {
      this.cityName = data.name;
    });
  }
}



@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}



