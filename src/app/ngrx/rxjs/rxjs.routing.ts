import { RxjsComponent } from './rxjs.component';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RxjsComponent}
];

export const childRouting = RouterModule.forChild(routes);