import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { ResultsEntryComponent } from './results-entry/results-entry.component';
import { StudentRecordsComponent } from './student-records/student-records.component';
import { ResultCompilationComponent } from './result-compilation/result-compilation.component';
import { StudentsMarkRecodingComponent } from './students-mark-recoding/students-mark-recording.component';
import { IndividualResultsComponent } from './individual-results/individual-results.component';
import { NotificationPreferenceComponent } from './notification-preference/notification-preference.component';
import { NotifCenterComponent } from './notif-center/notif-center.component';



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
  },
  {
    path: 'result-compilation',
    component: ResultCompilationComponent
  },
  {
    path: 'marks-recording',
    component: StudentsMarkRecodingComponent
  },
  {
    path: 'individual-results',
    component: IndividualResultsComponent
  },
  {
    path: 'notification-preference',
    component: NotificationPreferenceComponent
  },
  {
    path: 'notif-center',
    component: NotifCenterComponent
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
