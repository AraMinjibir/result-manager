import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonModule, 
    AvatarModule, RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible: boolean = false;

}
