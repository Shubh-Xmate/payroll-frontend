import { Component } from '@angular/core';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarComponent, MainContentComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}