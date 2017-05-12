import { Component, OnInit, OnDestroy } from '@angular/core';
import {WeatherService} from '../shared/weather.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.css']
})
export class PocComponent implements OnInit,OnDestroy {

  openRtbRequest: any;
  openRtbResponse: any;
  sub: any;

  cid: string;
  tc: string;
  channel: string;
  pageType: string;
  productId: string;
  searchtext: string;
  rid: string;

  constructor(private weatherService: WeatherService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.cid = params['CID'];
        this.tc = params['TC'];
        this.channel = params['CHANNEL'];
        this.pageType = params['pageType'];
        this.productId = params['productId'];
        this.searchtext = params['searchText'];
        this.rid = params['rid'];
      });

  this.weatherService.getPocData(this.cid, this.tc, this.channel, this.pageType, this.productId, this.searchtext, this.rid).subscribe( res =>  {
    // this.openRtbRequest = JSON.stringify(res.openRtbRequest);
    // this.openRtbResponse = JSON.stringify(res.openRtbResponse);

    this.openRtbRequest = res.openRtbRequest;
    this.openRtbResponse = res.openRtbResponse;
    console.log('Log');
  });
}

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
