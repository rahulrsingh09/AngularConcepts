import {Component, OnInit} from '@angular/core';
import {WeatherService} from "../shared/weather.service";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  drilldown: Object;
  piechart: Object;


  constructor() {
  }

  ngOnInit() {

    this.drilldown = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Basic drilldown'
      },
      xAxis: {
        type: 'category'
      },

      legend: {
        enabled: false
      },

      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true
          }
        }
      },

      series: [{
        name: 'Country',
        colorByPoint: true,
        data: [{
          name: 'India',
          y: 2,
          drilldown: 'india'
        }, {
          name: 'United Kindom',
          y: 2,
          drilldown: 'uk'
        }]
      }],
      drilldown: {
        series: [{
          name: 'Popular Destinations',
          id: 'india',
          data: [{
            name: 'WB',
            y: 3,
            drilldown: 'wbdes'
          },
            {
              name: 'CHD',
              y: 2,
              drilldown: 'chddes'
            }]
        }, {
          name: 'Popular Destinations',
          id: 'uk',
          data: [{
            name: 'london',
            y: 2,
            drilldown: 'londondes'
          },
            {
              name: 'manchester',
              y: 1,
              drilldown: 'manchesterdes'
            }]
        }, {
          name: 'votes',
          id: 'londondes',
          data: [
            ['Stamford Bridge', 40],
            ['Kings Road', 2]
          ]
        },
          {
            name: 'votes',
            id: 'manchesterdes',
            data: [
              ['Old Trafford', 4]
            ]
          },
          {
            name: 'votes',
            id: 'wbdes',
            data: [
              ['victoria memorial', 4],
              ['eden garden', 2],
              ['Home', 1]
            ]
          },
          {
            name: 'votes',
            id: 'chddes',
            data: [
              ['Sukhna Lake', 4],
              ['Infosys', 2]
            ]
          }]
      }
    };


    this.piechart = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {}
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }]
      }]
    };

  }

}
