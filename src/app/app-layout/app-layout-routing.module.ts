import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';



const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: StudentProfileComponent
  },
  {
    path: 'results-entry',
    component: ResultsEntryComponent
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
