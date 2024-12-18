import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RadioButtonModule } from 'primeng/radiobutton';

interface Rec {
  label: string;
  value: string;
}
interface Temp {
  name: string;
  code: string;
}


@Component({
  selector: 'notif-center',
  standalone: true,
  imports: [ReactiveFormsModule, DropdownModule, 
    InputTextareaModule, RadioButtonModule,
     NgFor, ButtonModule, CardModule],
  templateUrl: './notif-center.component.html',
  styleUrl: './notif-center.component.scss'
})
export class NotifCenterComponent {

  recipients: Rec[] | undefined;
  templates: Temp[] | undefined;
  formGroup: FormGroup | undefined;

  categories: any[] = [
      { name: 'email', key: 'A' },
      { name: 'sms', key: 'M' },
    ]

    ngOnInit() {
        this.recipients = [
          { label: 'Parent 1', value: 'parent1@example.com' },
          { label: 'Parent 2', value: 'parent2@example.com' },
          { label: 'All Parents', value: 'all_parents' },
        ];
        this.templates = [
          { name: 'Reminder', code: 'reminder' },
          { name: 'Event Update', code: 'event_update' },
          { name: 'Fee Notice', code: 'fee_notice' },
        ];

        this.formGroup = new FormGroup({
          selectedRecipient: new FormControl<Rec | null>(null),
          template:new FormControl<Temp | null>(null),
          message: new FormControl<string | null>(null),
          deliveryMethod: new FormControl(),
        });
    }
    applyTemplate(event: any) {
      const selectedTemplate = event.value?.code; 
      const templateMessages: Record<string, string> = {
        reminder: 'This is a reminder for an important event.',
        event_update: 'Here is an update for the upcoming event.',
        fee_notice: 'This is a reminder to pay the school fees.',
      };
    
      if (selectedTemplate && templateMessages[selectedTemplate]) {
        this.formGroup.patchValue({ message: templateMessages[selectedTemplate] });
      } else {
        this.formGroup.patchValue({ message: '' });
      }
    }
    
    OnSubmit(){
      this.formGroup.reset();
    }
}
