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
  multi:Object;


  constructor() {
  }

  ngOnInit() {

    this.multi = {
      title: {
        text: 'Muti Level Multi Chart Drill Down'
      },
      subtitle: {
        text: 'Click the columns to view versions.'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Total percent market share'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}%'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: 'Brands',
        type: 'column',
        colorByPoint: true,
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33,
          drilldown: 'Microsoft Internet Explorer'
        }, {
          name: 'Chrome',
          y: 24.03,
          drilldown: 'Chrome'
        }, {
          name: 'Firefox',
          y: 10.38,
          drilldown: 'Firefox'
        }, {
          name: 'Safari',
          y: 4.77,
          drilldown: 'Safari'
        }, {
          name: 'Opera',
          y: 0.91,
          drilldown: 'Opera'
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          drilldown: null
        }]
      }],
      drilldown: {
        series: [{
          type: 'pie', // change this to what ever chart you want like pie,area etc
          name: 'Microsoft Internet Explorer',
          id: 'Microsoft Internet Explorer',
          data: [
            [
              'v11.0',
              24.13
            ],
            [
              'v8.0',
              17.2
            ],
            [
              'v9.0',
              8.11
            ],
            [
              'v10.0',
              5.33
            ],
            [
              'v6.0',
              1.06
            ],
            [
              'v7.0',
              0.5
            ]
          ]
        }, {
          type:'area',
          name: 'Chrome',
          id: 'Chrome',
          data: [
            [
              'v40.0',
              5
            ],
            [
              'v41.0',
              4.32
            ],
            [
              'v42.0',
              3.68
            ],
            [
              'v39.0',
              2.96
            ],
            [
              'v36.0',
              2.53
            ],
            [
              'v43.0',
              1.45
            ],
            [
              'v31.0',
              1.24
            ],
            [
              'v35.0',
              0.85
            ],
            [
              'v38.0',
              0.6
            ],
            [
              'v32.0',
              0.55
            ],
            [
              'v37.0',
              0.38
            ],
            [
              'v33.0',
              0.19
            ],
            [
              'v34.0',
              0.14
            ],
            [
              'v30.0',
              0.14
            ]
          ]
        }, {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            [
              'v35',
              2.76
            ],
            [
              'v36',
              2.32
            ],
            [
              'v37',
              2.31
            ],
            [
              'v34',
              1.27
            ],
            [
              'v38',
              1.02
            ],
            [
              'v31',
              0.33
            ],
            [
              'v33',
              0.22
            ],
            [
              'v32',
              0.15
            ]
          ]
        }, {
          name: 'Safari',
          id: 'Safari',
          data: [
            [
              'v8.0',
              2.56
            ],
            [
              'v7.1',
              0.77
            ],
            [
              'v5.1',
              0.42
            ],
            [
              'v5.0',
              0.3
            ],
            [
              'v6.1',
              0.29
            ],
            [
              'v7.0',
              0.26
            ],
            [
              'v6.2',
              0.17
            ]
          ]
        }, {
          name: 'Opera',
          id: 'Opera',
          data: [
            [
              'v12.x',
              0.34
            ],
            [
              'v28',
              0.24
            ],
            [
              'v27',
              0.17
            ],
            [
              'v29',
              0.16
            ]
          ]
        }]
      }
    };


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
