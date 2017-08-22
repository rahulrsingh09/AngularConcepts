import { Observable, Subscriber } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = new Observable<number>((observer: Subscriber<number>) => {
    setInterval(() => observer.next(5), 1000);
  });


}
