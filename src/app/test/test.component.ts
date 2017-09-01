import { TestService } from './../shared/test.service';
import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private blogService : TestService) { }
  private blogsUrl ='http://www.mocky.io/v2/59a49eb3100000be05b2aba6';
  blogArray:any[];

  ngOnInit() {
    this.blogService
    .getBlogs(this.blogsUrl)
    .subscribe(res => {
      this.blogArray = res;
      console.log('theBlogArray', this.blogArray);
    });
  }

  count = new Observable<number>((observer: Subscriber<number>) => {
    setInterval(() => observer.next(5), 1000);
  });

 
}





