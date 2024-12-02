import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./authmod/authmod.module').then((a) => a.AuthmodModule),
  },
  {// This route should always be the last one.
    path: "**",
    component: PageNotFoundComponent
  }
];
