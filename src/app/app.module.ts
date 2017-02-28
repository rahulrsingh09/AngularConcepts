import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {WeatherService} from "./shared/weather.service";
import { NgrxComponent } from './ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { ReactiveComponent } from './reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgrxComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer }),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
