import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./authmod/authmod.module').then((a) => a.AuthmodModule),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'app-layout',
    component: AppLayoutComponent
  },
  // This route should always be the last one.
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
