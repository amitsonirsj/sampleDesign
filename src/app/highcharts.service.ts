import { Injectable } from '@angular/core';
import * as Highcharts from 'highcharts';
import bulletChart from 'highcharts/modules/bullet.src';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
bulletChart(Highcharts);
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Injectable({
  providedIn: 'root'
})
export class HighchartsService {

  constructor() { }

  setoptions(opt) {
    Highcharts.setOptions(opt);
  }
  createChart(el, cfg) {
    Highcharts.chart(el, cfg);
  }
}
