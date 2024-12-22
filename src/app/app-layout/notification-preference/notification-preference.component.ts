import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { NgFor } from '@angular/common';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notification-preference',
  standalone: true,
  imports: [CardModule, ReactiveFormsModule, ToggleButtonModule,
            InputTextModule, NgFor, RadioButtonModule, ButtonModule],
  templateUrl: './notification-preference.component.html',
  styleUrls: ['./notification-preference.component.scss'],
})
export class NotificationPreferenceComponent implements OnInit {
  formGroup: FormGroup;
  frequencyOptions = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'daily', label: 'Daily' },
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      email: new FormControl<boolean>(true),
      emailAddress: new FormControl<string | null>(null),
      sms: new FormControl<boolean>(true),
      smsNotif: new FormControl<string | null>(null),
      frequency: new FormControl<string>(null)
    });
  }
  OnsubmitPreference(){
    this.formGroup.reset();
  }
}
