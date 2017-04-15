import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  drilldown: Object;
  piechart:Object;

  constructor(){
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
        name: 'Things',
        colorByPoint: true,
        data: [{
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
        }, {
          name: 'Fruits',
          y: 2,
          drilldown: 'fruits'
        }, {
          name: 'Cars',
          y: 4,
          drilldown: 'cars'
        }]
      }],
      drilldown: {
        series: [{
          id: 'animals',
          data: [
            ['Cats', 4],
            ['Dogs', 2],
            ['Cows', 1],
            ['Sheep', 2],
            ['Pigs', 1]
          ]
        }, {
          id: 'fruits',
          data: [
            ['Apples', 4],
            ['Oranges', 2]
          ]
        }, {
          id: 'cars',
          data: [
            ['Toyota', 4],
            ['Opel', 2],
            ['Volkswagen', 2]
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
            style: {

            }
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
