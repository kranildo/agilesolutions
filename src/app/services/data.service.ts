import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Mock data for categories, products, and brands
  private categories = ['Category 1', 'Category 2'];
  private products = {
    'Category 1': ['Product A', 'Product B'],
    'Category 2': ['Product C', 'Product D']
  };
  private brands = {
    'Product A': ['Brand X', 'Brand Y'],
    'Product B': ['Brand Z'],
    'Product C': ['Brand X', 'Brand Z'],
    'Product D': ['Brand Y']
  };

  constructor() { }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  getProducts(category: string): Observable<string[]> {
    return of(this.products[category] || []);
  }

  getBrands(product: string): Observable<string[]> {
    return of(this.brands[product] || []);
  }
}
