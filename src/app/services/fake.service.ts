import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders().set("content-Type", "application/json");

@Injectable()
export class FakeService{
    
    constructor(private httpClient : HttpClient){}

    get(){
        return this.httpClient.get<any[]>('https://reqres.in/api/users?page=2');
    }

    post(body:Object){
       // headers.append('authentication', `${student.token}`);    if any auth token
        return this.httpClient.post<any[]>('https://reqres.in/api/users',body,{headers});
    }
}