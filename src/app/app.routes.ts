import { Routes } from '@angular/router';
import { ChartComponent } from './components/chart/chart.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [  
    { path: '', component: ChartComponent },   
    { path: 'login', component: LoginComponent }, 
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
  ];
  
