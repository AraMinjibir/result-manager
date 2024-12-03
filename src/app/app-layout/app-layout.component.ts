import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarModule, ButtonModule,
    DashboardComponent
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  sidebarVisible: boolean = false;
}
