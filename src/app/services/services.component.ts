import { FakeService } from './fake.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[FakeService]
})
export class ServicesComponent implements OnInit {

  get:any[];
  body = {
      "name": "morpheus",
      "job": "leader"
    };
  postData:Object;

  constructor(private fake : FakeService) { }

  ngOnInit() {
    this.fake.get().subscribe(data => this.get = data);
    this.fake.post(this.body).subscribe( data => this.postData = data);
  }


}
