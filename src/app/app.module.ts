import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { counterReducer } from './counter';


import { AppComponent } from './app.component';
import {WeatherService} from "./shared/weather.service";
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import {routing} from "./app.routing";
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { Angular4Component } from './angular4/angular4.component';
import {Tabs} from './childrenEg/tabs';
import {Tab} from './childrenEg/tab';
import {ViewChildContentEgComponent} from "./childrenEg/view-child-content-eg.component";
import { ParentHostComponent } from './parent-host/parent-host.component';
import { ChildComponent } from './parent-host/child.component';
import { GuardsComponent } from './guards/guards.component';
import { CheckComponent } from './guards/check.component';
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";




@NgModule({
  declarations: [
    AppComponent,
    NgrxComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    Angular4Component,
    Tabs,
    Tab,
    ViewChildContentEgComponent,
    ParentHostComponent,
    ChildComponent,
    GuardsComponent,
    CheckComponent
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
  providers: [WeatherService,AuthGuard,DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
