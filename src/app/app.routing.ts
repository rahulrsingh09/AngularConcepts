/**
 * Created by SINGH on 3/1/2017.
 */

import { Routes,RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {NgrxComponent} from "./ngrx/ngrx.component";
import {Angular4Component} from "./angular4/angular4.component";
import {ViewChildContentEgComponent} from "./childrenEg/view-child-content-eg.component";
import {ParentHostComponent} from "./parent-host/parent-host.component";


const routes: Routes = [
  { path: '', redirectTo: 'a4', pathMatch: 'full' },
  { path: 'a4', component:  Angular4Component},
  { path: 'template', component:  TemplateDrivenComponent},
  { path: 'reactive', component:  ReactiveComponent},
  { path: 'ngrx', component:  NgrxComponent},
  { path: 'viewchild', component:  ViewChildContentEgComponent},
  { path: 'host', component:  ParentHostComponent}
];

export const routing = RouterModule.forRoot(routes);
