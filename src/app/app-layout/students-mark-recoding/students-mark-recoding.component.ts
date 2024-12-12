import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgFor } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'marks-recording',
  standalone: true,
  imports: [TableModule, CardModule, DropdownModule,
    ReactiveFormsModule, InputNumberModule,InputTextModule,
    NgFor, ButtonModule],
  templateUrl: './students-mark-recoding.component.html',
  styleUrl: './students-mark-recoding.component.scss'
})
export class StudentsMarkRecodingComponent {

  resultsForm: FormGroup;
  subjects = [
    { name: 'Mathematics', code: 'MATH' },
    { name: 'English', code: 'ENG' },
    { name: 'Science', code: 'SCI' },
  ];

  constructor(private fb: FormBuilder) {
    this.resultsForm = this.fb.group({
      students: this.fb.array([this.createStudentForm()]),
    });
  }

  get students(): FormArray {
    return this.resultsForm.get('students') as FormArray;
  }

  createStudentForm(): FormGroup {
    return this.fb.group({
      name: [''],
      subject: [''],
      marks: [''],
    });
  }

  addStudentRow(): void {
    this.students.push(this.createStudentForm());
  }

  removeStudentRow(index: number): void {
    this.students.removeAt(index);
  }

  onSubmit(){
    this.resultsForm.reset()
  }


}
