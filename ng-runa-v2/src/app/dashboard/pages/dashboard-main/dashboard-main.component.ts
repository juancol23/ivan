import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarDashboardComponent } from '../../components/navbar-dashboard/navbar-dashboard.component';

@Component({
  selector: 'dashboard-main',
  standalone: true,
  imports: [CommonModule, NavbarDashboardComponent],
  templateUrl: './dashboard-main.component.html',
  styleUrl: './dashboard-main.component.css',
})
export class DashboardMainComponent {}
