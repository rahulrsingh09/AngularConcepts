import { FakeService } from './fake.service';
import { Component, OnInit } from '@angular/core';

import { User } from './../shared/user.interface';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[FakeService]
})
export class ServicesComponent implements OnInit {

  users:User[];
  post = {
      "name": "morpheus",
      "job": "leader"
    };
  put = {
    "name": "morpheus",
    "job": "zion resident"
  };
  patch = {
    "name": "rahul"
  };
  postData:Object;

  constructor(private fake : FakeService) { }

  ngOnInit() {
    this.fake.get().subscribe(data =>console.log(data));
    this.fake.post(this.post).subscribe( data => this.postData = data);
    this.fake.put(this.put).subscribe( data => console.log(data));
    this.fake.patch(this.patch).subscribe( data => console.log(data));
  }


}
