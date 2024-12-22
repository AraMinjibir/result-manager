import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'individual-results',
  standalone: true,
  imports: [CardModule, TableModule, ButtonModule],
  templateUrl: './individual-results.component.html',
  styleUrl: './individual-results.component.scss'
})
export class IndividualResultsComponent {

  details = {
    id: 1,
    name: 'Jabir',
    class: 'SS 3',
    gender: 'Male',
  };
  results = [
    {subject: 'Mathematics', marks: 90, grade: 'A'},
    {subject: 'Computer', marks: 95, grade: 'A'},
    {subject: 'Physics', marks: 80, grade: 'A'},
    {subject: 'Chemistry', marks: 71, grade: 'A'},
    {subject: 'English', marks: 60, grade: 'B'},
    {subject: 'Biology', marks: 63, grade: 'B'}
  ]

  printResult(){
    window.print()
  }
}
