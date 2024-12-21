import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: StudentProfileComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
