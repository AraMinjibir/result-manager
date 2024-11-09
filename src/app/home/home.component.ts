import { Component } from '@angular/core';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [LoginPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
