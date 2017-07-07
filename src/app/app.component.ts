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

  hello = "Angular";
  cityName :string;
  selectedOption: string;

  constructor(private weatherService:AngularService , public dialog: MdDialog, mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer){
    mdIconRegistry
      .addSvgIcon('icon',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/images/angular.svg'));

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



