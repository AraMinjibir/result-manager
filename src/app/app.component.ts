import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'result-manager';
  
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  loading: boolean = false;

  load() {

  }
}
