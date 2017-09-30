import { DialogResultExampleDialog } from './../../app.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { childRouting } from "app/ngrx/rxjs/rxjs.routing";

import { RxjsComponent, LazyDailog } from './rxjs.component';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations: [
        RxjsComponent,
        LazyDailog
    ],
    imports: [CommonModule,
        childRouting,
        NgxGistModule,
        MatDialogModule
    ],
    providers: [],
    entryComponents: [LazyDailog]
})

export class RxjsModule {

}