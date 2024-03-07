import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  public category: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Electronics',
      'Clothing',
      'Food',
      'Cosmetics',
    ],
    datasets: [
      {
        data: [ 200, 300, 250, 180],
        label: 'Sales By Month for Category:',
        fill: true,
        tension: 0.5, 
        borderColor: 'green', 
      } 
    ]
  };

  public products: ChartConfiguration<'line'>['data'] = {
    labels: [
      'iPhone',
      'T-Shirts',
      'Rice',
      'Lipstick',
    ],
    datasets: [
      {
        data: [ 50, 2, 10, 100],
        label: 'Sales By Month for Products:',
        fill: true,
        tension: 0.5,
        borderColor: 'yellow', 
      } 
    ]
  };
  
  public brand : ChartConfiguration<'line'>['data'] = {
    labels: [
      'Apple',
      'Nike',
      'Uncle Ben\'s',
      'Maybelline',
    ],
    datasets: [
      {
        data: [ 100, 80, 150, 70],
        label: 'Sales By Month for Brand:',
        fill: true,
        tension: 0.5,
        borderColor: 'blue', 
      } 
    ]
  };
  
  constructor() { }
}
