/**
 * Created by rahul.singh@c1exchange.com on 7/1/2017.
 */


import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class TestService {


  constructor(private http: Http) {}
  getBlogs(url: string): any {
    return this.http.get(url)
      .map((response) => response.json());
  }

}
