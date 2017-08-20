import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeService{
    
    constructor(private httpClient : HttpClient){}

    get(){
        return this.httpClient.get<any[]>('https://reqres.in/api/users?page=2');
    }
}