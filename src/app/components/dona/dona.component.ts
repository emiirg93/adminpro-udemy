import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  @Input() titulo;
  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [];
  doughnutChartType: ChartType = 'doughnut';

  colors: Color[] = [{
    backgroundColor: ['#8F99B7', '#BFCDF5', '#5168A8']
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
