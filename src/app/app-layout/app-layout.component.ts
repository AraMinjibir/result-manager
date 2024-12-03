import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarModule, ButtonModule,
    DashboardComponent, HeaderComponent, AvatarModule
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  sidebarVisible: boolean = false;
}
