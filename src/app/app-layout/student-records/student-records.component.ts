import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'student-records',
  standalone: true,
  imports: [TableModule, FormsModule,FloatLabelModule, IconFieldModule, InputIconModule],
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {

  searchText: string = '';
  
  students = [
    { id: 'S101', name: 'Abubakar', class: '10A' },
    { id: 'S102', name: 'Jabir', class: '9B' },
    { id: 'S103', name: 'Minjibir', class: '8C' },
    { id: 'S104', name: 'Kano', class: '11A' },
    { id: 'S105', name: 'Nigeria', class: '10B' },
  ];

  get filteredStudents() {
    return this.students.filter(student => 
      student.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      student.id.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
