import { Component } from '@angular/core';
<<<<<<< HEAD
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
<<<<<<< HEAD
=======
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

>>>>>>> 02c99c17ae12fdd3a8d0f6026ee4a0acb1ea0ad6
=======
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 7f8cb53 (final submission)

@Component({
  selector: 'app-layout',
  standalone: true,
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [SidebarModule, ButtonModule],
=======
  imports: [DashboardComponent, HeaderComponent, SidebarComponent],
>>>>>>> 02c99c17ae12fdd3a8d0f6026ee4a0acb1ea0ad6
=======
  imports: [SidebarModule, ButtonModule,
    DashboardComponent
  ],
>>>>>>> 7f8cb53 (final submission)
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

<<<<<<< HEAD
  sidebarVisible: boolean = false;
=======
  
>>>>>>> 02c99c17ae12fdd3a8d0f6026ee4a0acb1ea0ad6
}
