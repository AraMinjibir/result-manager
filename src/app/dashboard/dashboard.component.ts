import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { NgFor } from '@angular/common';



@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CardModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  stats = [
    {title: "Admitted Students", no: 100, },
    {title: "Average Students", no: 50,},
    {title: "Below Average", no: 30,},
    {title: "Poor", no: 20,}
  ];

  recent = [
    {title: "Assignments Given", no: 50},
    {title: "C.A's Conducted", no: 3},
    {title: "Quiz Performed", no: 5},
    {title: "Debates Carried out", no: 2,}
  ]
}
