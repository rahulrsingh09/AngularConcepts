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

  constructor(private fake : FakeService) { }

  ngOnInit() {
    this.fake.get().subscribe(data => this.get = data);
  }


}
