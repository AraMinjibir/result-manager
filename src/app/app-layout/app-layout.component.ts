import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvatarModule } from 'primeng/avatar';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [DashboardComponent, HeaderComponent, SidebarComponent, SidebarComponent, ButtonModule],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {
  sidebarVisible: boolean = false;
  
}
