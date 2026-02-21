import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { CreateAlertComponent } from './pages/create-alert/create-alert';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-alert', component: CreateAlertComponent }
];

