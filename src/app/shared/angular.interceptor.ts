import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AngularInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do(event => {}, err => {
        if(err instanceof HttpErrorResponse){
            console.log("Error Caught By Interceptor");
            //Observable.throw(err);
        }
    });
  }
}
