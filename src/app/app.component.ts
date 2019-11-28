import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var $: any;
import { HighchartsService } from './highcharts.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('retail', { static: true }) public retail: ElementRef;
  @ViewChild('internal', { static: true }) public internal: ElementRef;
  @ViewChild('waranty', { static: true }) public waranty: ElementRef;
  @ViewChild('service_contracts', { static: true }) public service_contracts: ElementRef;
  @ViewChild('MOTs', { static: true }) public MOTs: ElementRef;
  @ViewChild('hourStacked', { static: true }) public hourStacked: ElementRef;
  @ViewChild('hourLine', { static: true }) public hourLine: ElementRef;
  @ViewChild('hourGauge', { static: true }) public hourGauge: ElementRef;
  @ViewChild('hourIdleGauge', { static: true }) public hourIdleGauge: ElementRef;
  @ViewChild('upsellingTyreGauge', { static: true }) public upsellingTyreGauge: ElementRef;
  @ViewChild('upsellingOilGauge', { static: true }) public upsellingOilGauge: ElementRef;
  @ViewChild('upsellingServicePlanGauge', { static: true }) public upsellingServicePlanGauge: ElementRef;
  @ViewChild('upsellingAirConGauge', { static: true }) public upsellingAirConGauge: ElementRef;
  @ViewChild('csiMtdGauge', { static: true }) public csiMtdGauge: ElementRef;
  @ViewChild('csiYtdGauge', { static: true }) public csiYtdGauge: ElementRef;
  @ViewChild('peGauge', { static: true }) public peGauge: ElementRef;
  @ViewChild('workingCapitalChart', { static: true }) public workingCapitalChart: ElementRef;
  @ViewChild('workingCapitalDebtorsChart', { static: true }) public workingCapitalDebtorsChart: ElementRef;
  @ViewChild('workingCapitalStockChart', { static: true }) public workingCapitalStockChart: ElementRef;

  constructor(private highcharts: HighchartsService) { }

  ngOnInit() {
    $('.grid-stack').gridstack();
    this.highcharts.createChart(this.retail.nativeElement, this.retailChartOption);
    this.highcharts.createChart(this.internal.nativeElement, this.internalChartOption);
    this.highcharts.createChart(this.waranty.nativeElement, this.warrantyChartOption);
    this.highcharts.createChart(this.service_contracts.nativeElement, this.serviceContractsChartOption);
    this.highcharts.createChart(this.MOTs.nativeElement, this.motsChartOption);
    this.highcharts.createChart(this.hourStacked.nativeElement, this.hoursStackedChartOption);
    this.highcharts.createChart(this.hourLine.nativeElement, this.hoursLineChartOption);
    this.highcharts.createChart(this.hourGauge.nativeElement, this.hourGaugeChartOption);
    this.highcharts.createChart(this.hourIdleGauge.nativeElement, this.hourIdleGaugeChartOption);
    this.highcharts.createChart(this.upsellingAirConGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.upsellingServicePlanGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.upsellingOilGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.upsellingTyreGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.csiMtdGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.csiYtdGauge.nativeElement, this.upsellingGaugeChartOption);
    this.highcharts.createChart(this.peGauge.nativeElement, this.peGaugeChartOption);
    this.highcharts.createChart(this.workingCapitalChart.nativeElement, this.workingCapitalChartOption);
    this.highcharts.createChart(this.workingCapitalDebtorsChart.nativeElement, this.workingCapitalChartOption);
    this.highcharts.createChart(this.workingCapitalStockChart.nativeElement, this.workingCapitalChartOption);
  }

  retailChartOption = {
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 20,
        color: 'black'
      }, {
        from: 20,
        to: 25,
        color: '#00b0f0'
      }, {
        from: 25,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    xAxis: {
      categories: ['<span class="hc-cat-title">Retail</span>']
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }

  internalChartOption = {
    xAxis: {
      categories: ['<span class="hc-cat-title">Internal</span>']
    },
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 15,
        color: 'black'
      }, {
        from: 15,
        to: 20,
        color: '#00b0f0'
      }, {
        from: 20,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }

  warrantyChartOption = {
    xAxis: {
      categories: ['<span class="hc-cat-title">Warranty</span>']
    },
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 13,
        color: 'black'
      }, {
        from: 13,
        to: 18,
        color: '#00b0f0'
      }, {
        from: 18,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }

  serviceContractsChartOption = {
    xAxis: {
      categories: ['<span class="hc-cat-title">Service Contracts</span>']
    },
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 10,
        color: 'black'
      }, {
        from: 10,
        to: 15,
        color: '#00b0f0'
      }, {
        from: 15,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }

  motsChartOption = {
    xAxis: {
      categories: ['<span class="hc-cat-title">MOTs</span>']
    },
    chart: {
      inverted: true,
      marginLeft: 135,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 15,
        color: 'black'
      }, {
        from: 5,
        to: 10,
        color: '#00b0f0'
      }, {
        from: 10,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }

  hoursStackedChartOption = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Hours Available - next 7 days'
    },
    xAxis: {
      categories: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      min: 0,
      title: {
        text: ''
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: 'gray'
        }
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true
        }
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      color: 'black'
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
      color: '#00b0f0'
    }]
  }

  hoursLineChartOption = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Hours Sold'
    },
    legend: {
      verticalAlign: 'top',
      borderWidth: 0
    },
    credits: {
      enabled: false
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          return this.value;
        }
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          radius: 4,
          lineColor: '#666666',
          lineWidth: 1
        }
      }
    },
    series: [{
      name: 'Forecast',
      marker: {
        enabled: false
      },
      lineColor: '#28b7f1',
      data: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55]

    },
    {
      name: 'Budget',
      marker: {
        enabled: false
      },
      lineColor: '#7030a0',
      data: [45, 65, 50, 47, 52, 49, 49, 49, 49, 49, 49, 49]
    }, {
      name: 'Actual',
      marker: {
        enabled: false
      },
      lineColor: 'black',
      data: [45, 65, 50, 47, 52, 49]
    }]
  }

  hourGaugeChartOption = {

    chart: {
      type: 'solidgauge'
    },

    title: {
      text: 'Hours Sold',
      style: {
        fontSize: '15px'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '15px'
      },
      pointFormat: '<span style="font-size:20px;color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) + 27
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: 'white',
        borderWidth: 0
      },
      {
        outerRadius: '37%',
        innerRadius: '0%',
        backgroundColor: '#ffc000',
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false
      }
    },

    series: [{
      name: 'Move',
      data: [{
        color: '#7030a0',
        radius: '112%',
        innerRadius: '88%',
        y: 100
      }]
    }, {
      name: 'Exercise',
      data: [{
        color: '#00b0f0',
        radius: '87%',
        innerRadius: '63%',
        y: 80
      }]
    }, {
      name: 'Stand',
      data: [{
        color: 'black',
        radius: '62%',
        innerRadius: '38%',
        y: 20
      }]
    }]
  }

  hourIdleGaugeChartOption = {

    chart: {
      type: 'solidgauge'
    },

    title: {
      text: 'Idle Time',
      style: {
        fontSize: '15px'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '15px'
      },
      pointFormat: '<span style="font-size:20px;color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) + 27
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: 'white',
        borderWidth: 0
      },
      {
        outerRadius: '37%',
        innerRadius: '0%',
        backgroundColor: '#ffc000',
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false
      }
    },

    series: [{
      name: 'Move',
      data: [{
        color: '#7030a0',
        radius: '112%',
        innerRadius: '88%',
        y: 100
      }]
    }, {
      name: 'Exercise',
      data: [{
        color: '#00b0f0',
        radius: '87%',
        innerRadius: '63%',
        y: 80
      }]
    }, {
      name: 'Stand',
      data: [{
        color: 'black',
        radius: '62%',
        innerRadius: '38%',
        y: 20
      }]
    }]
  }

  upsellingGaugeChartOption = {

    chart: {
      type: 'solidgauge'
    },

    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      pointFormat: '<span style="font-size:12px;color: {point.color}; font-weight: bold">₤{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) - 5
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: 'white',
        borderWidth: 0
      },
      {
        outerRadius: '37%',
        innerRadius: '0%',
        backgroundColor: '#ffc000',
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false
      }
    },

    series: [{
      name: 'Move',
      data: [{
        color: '#7030a0',
        radius: '112%',
        innerRadius: '88%',
        y: 100
      }]
    }, {
      name: 'Exercise',
      data: [{
        color: '#00b0f0',
        radius: '87%',
        innerRadius: '63%',
        y: 80
      }]
    }, {
      name: 'Stand',
      data: [{
        color: 'black',
        radius: '62%',
        innerRadius: '38%',
        y: 20
      }]
    }]
  }

  peGaugeChartOption = {

    chart: {
      type: 'solidgauge',
      backgroundColor: '#f1f0f0'
    },

    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      pointFormat: '<span style="font-size:12px;color: {point.color}; font-weight: bold">₤{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) - 5
        };
      }
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: 'white',
        borderWidth: 0
      }, {
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: 'white',
        borderWidth: 0
      },
      {
        outerRadius: '37%',
        innerRadius: '0%',
        backgroundColor: '#ff0000',
        borderWidth: 0
      }]
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false
      }
    },

    series: [{
      name: 'Move',
      data: [{
        color: '#203764',
        radius: '112%',
        innerRadius: '88%',
        y: 100
      }]
    }, {
      name: 'Exercise',
      data: [{
        color: '#2e75b6',
        radius: '87%',
        innerRadius: '63%',
        y: 80
      }]
    }, {
      name: 'Stand',
      data: [{
        color: '#bdd7ee',
        radius: '62%',
        innerRadius: '38%',
        y: 20
      }]
    }]
  }

  workingCapitalChartOption = {
    chart: {
      inverted: false,
      type: 'bullet'
    },
    title: {
      text: null
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        pointPadding: 0.25,
        borderWidth: 0,
        color: '#7030a0',
        targetOptions: {
          width: '200%'
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      plotBands: [{
        from: 0,
        to: 20,
        color: 'black'
      }, {
        from: 20,
        to: 25,
        color: '#b5c7e7'
      }, {
        from: 25,
        to: 100,
        color: 'white'
      }],
      labels: {
        enabled: false
      },
      title: null
    },
    xAxis: {
      categories: ['']
    },
    series: [{
      data: [{
        y: 22,
        target: 27
      }]
    }],
    tooltip: {
      pointFormat: '<b>{point.y}</b> (with target at {point.target})'
    }
  }
}
