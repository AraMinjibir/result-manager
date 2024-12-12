import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'result-compilation',
  standalone: true,
  imports: [TableModule ],
  templateUrl: './result-compilation.component.html',
  styleUrl: './result-compilation.component.scss'
})
export class ResultCompilationComponent {

    students = [
    { id: 'S101', name: 'Abubakar', class: '10A', subject:'Statistics', totalMarks: 68 },
    { id: 'S102', name: 'Jabir', class: '9B', subject:'Computer', totalMarks: 70},
    { id: 'S103', name: 'Minjibir', class: '8C', subject:'Mathematics', totalMarks: 55 },
    { id: 'S104', name: 'Kano', class: '11A', subject:'Physics', totalMarks: 40 },
    { id: 'S105', name: 'Nigeria', class: '10B', subject:'English', totalMarks: 15 },
  ];

  
}
