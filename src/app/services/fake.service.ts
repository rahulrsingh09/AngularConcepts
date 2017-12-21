import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const headers = new HttpHeaders().set("content-Type", "application/json");

const params = new HttpParams()
    .set('page', '2');

interface User {
    id: number;
    first_name:string;
    last_name:string;
    avatar:string;
}

@Injectable()
export class FakeService{
    
    constructor(private httpClient : HttpClient){}

    get(): Observable<any[]>{
        return this.httpClient.get<User[]>('https://reqres.in/api/users', {params})
        .map(value => value['data'])
        .pipe(
            tap(_ => console.log(`Tapping into each observable data`+ _))
            ,catchError(this.handleError('error handling', []))
          );
    }

    post(body:Object){
       // headers.append('authentication', `${student.token}`);    if any auth token
        return this.httpClient.post<any[]>('https://reqres.in/api/users',body,{headers});
    }

    put(body: Object){
        return this.httpClient.post<Object>('https://reqres.in/api/users/2',body,{headers});
    }
    
    patch(body: Object){
        return this.httpClient.patch<Object>('https://reqres.in/api/users/2',body,{headers});
    }

    delete(){
        return this.httpClient.delete('https://reqres.in/api/users/2',{headers});
    }



private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}