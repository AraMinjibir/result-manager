import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';
import { StudentRecordsComponent } from './student-records/student-records.component';



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
  },
  {
    path: 'student-records',
    component: StudentRecordsComponent
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
