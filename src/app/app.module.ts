import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {WeatherService} from "./shared/weather.service";
import { NgrxComponent } from './ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import {routing} from "./app.routing";
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { Angular4Component } from './angular4/angular4.component';

@NgModule({
  declarations: [
    AppComponent,
    NgrxComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    Angular4Component
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer }),
    FormsModule,
    routing,
    RouterModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
