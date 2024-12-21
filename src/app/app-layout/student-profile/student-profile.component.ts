import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { NgFor, NgIf } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

interface Subject {
  name: string;
  code: string;
}

@Component({
  selector: 'profile',
  standalone: true,
  imports: [CardModule, DropdownModule,
     InputTextModule, FloatLabelModule,
      NgFor, NgIf, InputNumberModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.scss'
})
export class StudentProfileComponent implements OnInit {
  subjects: Subject[] = [];
  formGroup!: FormGroup;

  details = [
    { id: 1, name: 'AraMjb', class: 'SS 3', gender: 'Male', age: 27 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.subjects = [
      { name: 'Mathematics', code: 'Mth' },
      { name: 'English', code: 'Eng' },
      { name: 'Physics', code: 'Phy' },
      { name: 'Chemistry', code: 'Che' },
      { name: 'Biology', code: 'Bio' }
    ];

    this.formGroup = this.fb.group({
      studentSubjects: this.fb.array([])
    });

    this.addSubjectRow(); // Initialize with one row
  }

  get studentSubjects() {
    return this.formGroup?.get('studentSubjects') as FormArray;
  }
  

  addSubjectRow() {
    this.studentSubjects.push(
      this.fb.group({
        selectedSubject: [null, Validators.required],
        marks: [null, [Validators.required, Validators.min(0), Validators.max(100)]]
      })
    );
  }

  removeSubjectRow(index: number) {
    this.studentSubjects.removeAt(index);
  }

  onSubmitForm() {
    this.formGroup.reset();
  }
}
