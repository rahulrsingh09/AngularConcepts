import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from "@angular/common/http";

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

    get(){
        return this.httpClient.get<User[]>('https://reqres.in/api/users', {params}).map(value => value['data']);
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

    delete(body: Object){
        return this.httpClient.delete('https://reqres.in/api/users/2',{headers});
    }

    

}