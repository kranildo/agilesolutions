import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-chart',
  standalone: true, 
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  constructor(private chartService:ChartService) { }
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [ 
    ],
    datasets: [ 
    ]
  };



  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  ngOnInit(): void { 
  }
  setCategory(): void {
    this.lineChartData=this.chartService.category;
  }
  setProduct(): void {
    this.lineChartData=this.chartService.products;
  }
  setBrand(): void {
    this.lineChartData=this.chartService.brand;
  }
}