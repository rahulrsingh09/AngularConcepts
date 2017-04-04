import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {WeatherService} from "./shared/weather.service";
import { Theme } from './shared/theme.interface';
import {User} from "./shared/user.interface";
import {MdDialog, MdDialogRef} from "@angular/material";

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

  constructor(private weatherService:WeatherService ,public dialog: MdDialog){}

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



