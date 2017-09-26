import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import {ShareButtonsModule} from "ngx-sharebuttons";
import {MomentModule} from "angular2-moment";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ChartModule} from "angular2-highcharts";
import {LocalStorageModule} from "angular-2-local-storage";
import {AngularFireModule} from "angularfire2";
import {NgxPaginationModule} from "ngx-pagination";
import {HighchartsStatic} from "angular2-highcharts/dist/HighchartsService";
import {ModalModule} from "angular2-modal";
import {BootstrapModalModule} from "angular2-modal/plugins/bootstrap";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

import { WorldHelloComponent } from './dynamic-component/dynamic/world-hello-component';
import { HelloWorldComponent } from 'app/dynamic-component/dynamic/hello-world-component';
import { DynamicComponent } from './dynamic-component/dynamic/dynamic.component';
import {AppComponent, DialogResultExampleDialog} from "./app.component";
import {AngularService} from "./shared/angular.service";
import {NgrxComponent} from "./ngrx/ngrx.component";
import {routing} from "./app.routing";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {Angular4Component} from "./angular4/angular4.component";
import {Tabs} from "./childrenEg/tabs";
import {ViewChildContentEgComponent} from "./childrenEg/view-child-content-eg.component";
import {ParentHostComponent} from "./parent-host/parent-host.component";
import {ChildComponent} from "./parent-host/child.component";
import {GuardsComponent} from "./guards/guards.component";
import {CheckComponent} from "./guards/check.component";
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";
import {DirectivesComponent} from "./directives/directives.component";
import {ConfirmDirective} from "./directives/confirm.directive";
import {PipesComponent} from "./pipes/pipes.component";
import {SquarePipe} from "./pipes/square.pipe";
import {DropdownDirective} from "./shared/dropdown.directive";
import {ViewencapsulationComponent} from "./viewencapsulation/viewencapsulation.component";
import {ParentchildComponent} from "./parentchild/parentchild.component";
import {ChildparentComponent} from "./parentchild/childparent.component";
import {AngularcliComponent} from "./angularcli/angularcli.component";
import {BasicComponent} from "./basic/basic.component";
import {ChartsComponent} from "./charts/charts.component";
import {NameValidatorDirective} from "./template-driven/NameValidator";
import {AsyncAgeValidator} from "./template-driven/AsyncAgeValidator";
import {BaseDynamicComponent} from "./dynamic-component/base-dynamic.component";
import {NotesComponent} from "./notes/notes.component";
import {CommentComponent} from "./comment/comment.component";
import {FireAuthResolve} from "./comment/fireauth.resolve";
import {TestService} from "./shared/test.service";
import {TestComponent} from "./test/test.component";
import {RelativeTimeFilterPipe} from "./comment/realtiveTime.filter.pipe";
import {StringFilterPipe} from "./comment/string.filter.pipe";
import {firebaseConfig} from './shared/firebase.config';
import {firebaseConfigDev} from './shared/firebase.config';
import { MyworkComponent } from './mywork/mywork.component';
import { FirebaseComponent } from './firebase/firebase.component';
import * as fromRoot from "./ngrx/state-management/ngrx-reducer";
import { ValidateOnBlurDirective } from './reactive/validateOnBlur.directive';
import {Tab} from "./childrenEg/tab";
import { AngularInterceptor } from './shared/angular.interceptor';
import { ServicesComponent } from './services/services.component';
import { RxjsComponent } from './ngrx/rxjs/rxjs.component';



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
    BaseDynamicComponent,
    NotesComponent,
    CommentComponent,
    TestComponent,
    RelativeTimeFilterPipe,
    StringFilterPipe,
    FirebaseComponent,
    ValidateOnBlurDirective,
    MyworkComponent,
    ServicesComponent,
    RxjsComponent,
    DynamicComponent,
    HelloWorldComponent,
    WorldHelloComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromRoot.reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    ChartModule,
    FormsModule,
    routing,
    RouterModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MomentModule,
    NgxGistModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfigDev),
    AngularFireDatabaseModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    ModalModule.forRoot(),
    BootstrapModalModule,
    NgxPaginationModule,
    ShareButtonsModule.forRoot()
  ],
  providers: [AngularService,
    TestService,
    AuthGuard,
    DeactivateGuard,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    {provide: LocationStrategy, useClass: PathLocationStrategy}, //Angular 2 : 404 error occur when i refresh through Browser [duplicate]
    AngularFireAuth,
    FireAuthResolve,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AngularInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogResultExampleDialog]
})
export class AppModule { }
