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

  results = [
    {name: 'Mjb', subject: 'Computer', totalMarks: 50},
    {name: 'Kano', subject: 'Computer', totalMarks: 30},
    {name: 'Nigeria', subject: 'Computer', totalMarks: 20},
    {name: 'Africa', subject: 'Computer', totalMarks: 35},
  ]
}
