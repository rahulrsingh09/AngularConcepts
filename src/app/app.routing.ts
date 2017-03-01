/**
 * Created by SINGH on 3/1/2017.
 */

import { Routes,RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {NgrxComponent} from "./ngrx/ngrx.component";
import {Angular4Component} from "./angular4/angular4.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  AppComponent},
  { path: 'template', component:  TemplateDrivenComponent},
  { path: 'reactive', component:  ReactiveComponent},
  { path: 'ngrx', component:  NgrxComponent},
  { path: 'a4', component:  Angular4Component}
];

export const routing = RouterModule.forRoot(routes);
