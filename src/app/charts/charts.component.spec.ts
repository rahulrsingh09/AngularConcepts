import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { ChartsComponent } from './charts.component';


export function highchartsFactory() {
  var hc = require('highcharts');
  var hcm = require('highcharts/highcharts-more');
  var exp = require('highcharts/modules/exporting');
  var drill = require('highcharts/modules/drilldown');

  hcm(hc);
  exp(hc);
  drill(hc)
  return hc;
}

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [ChartModule],
      declarations: [ ChartsComponent ],
      providers : [{
        provide: HighchartsStatic,
        useFactory: highchartsFactory
      }]
    })
     .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
