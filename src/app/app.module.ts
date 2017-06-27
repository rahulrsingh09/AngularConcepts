import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { counterReducer, itemReducer} from './counter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import {AppComponent, DialogResultExampleDialog} from './app.component';
import { WeatherService } from './shared/weather.service';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { routing } from './app.routing';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { Angular4Component } from './angular4/angular4.component';
import { Tabs } from './childrenEg/tabs';
import { Tab } from './childrenEg/tab';
import { ViewChildContentEgComponent } from './childrenEg/view-child-content-eg.component';
import { ParentHostComponent } from './parent-host/parent-host.component';
import { ChildComponent } from './parent-host/child.component';
import { GuardsComponent } from './guards/guards.component';
import { CheckComponent } from './guards/check.component';
import { AuthGuard } from './guards/auth.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { DirectivesComponent } from './directives/directives.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './pipes/square.pipe';
import { DropdownDirective } from './shared/dropdown.directive';
import { ViewencapsulationComponent } from './viewencapsulation/viewencapsulation.component';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { ChildparentComponent } from './parentchild/childparent.component';
import { MomentModule }  from 'angular2-moment';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularcliComponent } from './angularcli/angularcli.component';
import { BasicComponent } from './basic/basic.component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { ChartsComponent } from './charts/charts.component';
import {NameValidatorDirective} from './template-driven/NameValidator';
import {AsyncAgeValidator} from './template-driven/AsyncAgeValidator';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicDirectiveDirective } from './dynamic-component/dynamic-directive.directive';
import {HeroJobAdComponent} from './dynamic-component/hero-job-ad.component';
import {HeroProfileComponent} from './dynamic-component/hero-profile-ad.component';
import {AdBannerComponent} from './dynamic-component/ad-banner.component';

export function highchartsFactory() {
  var hc = require('highcharts');
  var hcm = require('highcharts/highcharts-more');
  var exp = require('highcharts/modules/exporting');
  var drill = require('highcharts/modules/drilldown');

  hcm(hc);
  exp(hc);
  drill(hc)
  return hc;
}



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
    CheckComponent,
    DirectivesComponent,
    ConfirmDirective,
    PipesComponent,
    SquarePipe,
    DropdownDirective,
    ViewencapsulationComponent,
    ParentchildComponent,
    ChildparentComponent,
    AngularcliComponent,
    BasicComponent,
    DialogResultExampleDialog,
    ChartsComponent,
    NameValidatorDirective,
    AsyncAgeValidator,
    DynamicComponentComponent,
    DynamicDirectiveDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ counter: counterReducer ,item : itemReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    ChartModule,
    FormsModule,
    routing,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    MomentModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [WeatherService,
    AuthGuard,
    DeactivateGuard,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy} //Angular 2 : 404 error occur when i refresh through Browser [duplicate]
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogResultExampleDialog, HeroJobAdComponent, HeroProfileComponent]
})
export class AppModule { }
