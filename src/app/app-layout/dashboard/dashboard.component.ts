import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';




@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  
}
