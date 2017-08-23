import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders().set("content-Type", "application/json");

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
        return this.httpClient.get<User[]>('https://reqres.in/api/users?page=2').map(value => value['data']);
    }

    post(body:Object){
       // headers.append('authentication', `${student.token}`);    if any auth token
        return this.httpClient.post<any[]>('https://reqres.in/api/users',body,{headers});
    }
}