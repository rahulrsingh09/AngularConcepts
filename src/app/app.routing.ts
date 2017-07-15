/**
 * Created by SINGH on 3/1/2017.
 */

import {Routes, RouterModule, CanActivate} from '@angular/router';
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import {ReactiveComponent} from "./reactive/reactive.component";
import {NgrxComponent} from "./ngrx/ngrx.component";
import {Angular4Component} from "./angular4/angular4.component";
import {ViewChildContentEgComponent} from "./childrenEg/view-child-content-eg.component";
import {ParentHostComponent} from "./parent-host/parent-host.component";
import {GuardsComponent} from "./guards/guards.component";
import {CheckComponent} from "./guards/check.component";
import {AuthGuard} from "./guards/auth.guard";
import {DeactivateGuard} from "./guards/deactivate.guard";
import {DirectivesComponent} from "./directives/directives.component";
import {PipesComponent} from "./pipes/pipes.component";
import {ViewencapsulationComponent} from "./viewencapsulation/viewencapsulation.component";
import {ParentchildComponent} from "./parentchild/parentchild.component";
import {BasicComponent} from "./basic/basic.component";
import {AngularcliComponent} from "./angularcli/angularcli.component";
import {ChartsComponent} from "./charts/charts.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";
import {NotesComponent} from "./notes/notes.component";
import {CommentComponent} from "./comment/comment.component";
import {FireAuthResolve} from "./comment/fireauth.resolve";
import {TestComponent} from "./test/test.component";
import {TestResolve} from "./test/test.resolve";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: BasicComponent },
  { path: 'cli', component: AngularcliComponent },
  { path: 'a4', component:  Angular4Component, data:{ ping:'passed via router'}},
  { path: 'a4/:message', component:  Angular4Component, data:{ ping:'passed via router'}},
  { path: 'inout' , component: ParentchildComponent},
  { path: 'template', component:  TemplateDrivenComponent},
  { path: 'reactive', component:  ReactiveComponent},
  { path: 'ngrx', component:  NgrxComponent},
  { path: 'viewchild', component:  ViewChildContentEgComponent},
  { path: 'host', component:  ParentHostComponent},
  { path: 'directives', component:  DirectivesComponent},
  { path: 'pipes', component:  PipesComponent},
  { path: 'view', component:  ViewencapsulationComponent },
  { path: 'guard', component:  GuardsComponent , canDeactivate:[DeactivateGuard]},
  { path: 'guardcheck', component:  CheckComponent , canActivate: [AuthGuard]},
  { path: 'charts', component:  ChartsComponent },
  { path: 'dynamic', component : DynamicComponentComponent},
  { path: 'tabs', component : ViewChildContentEgComponent},
  { path: 'comment', component : CommentComponent, resolve : {Auth: FireAuthResolve}},
  { path: 'test', component : TestComponent, resolve :{Resolve: TestResolve}}


];

export const routing = RouterModule.forRoot(routes);
