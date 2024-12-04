import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    path: 'app-layout',
    component: AppLayoutComponent
  },
  {
    path: 'app-layout',
    loadChildren: () =>
      import('./app-layout/app.module').then((a)=> a.AppModule)
  },
  // This route should always be the last one.
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
