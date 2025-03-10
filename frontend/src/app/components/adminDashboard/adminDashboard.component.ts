import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Ensure RouterModule is imported

interface DashboardItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './adminDashboard.component.html',
  styleUrls: ['./adminDashboard.component.scss']
})
export class AdminDashboardComponent {
  dashboardItems: DashboardItem[] = [
    { label: 'Institute Setup', icon: 'assets/icons/institute-setup.png', route: '/institute-setup' },
    { label: 'User Roles Management', icon: 'assets/icons/user-roles.png', route: '/urManagement' },
    { label: 'Human Resource Management', icon: 'assets/icons/hr-management.png', route: '/human-resource-management' },
    { label: 'Front Desk Management', icon: 'assets/icons/front-desk.png', route: '/front-desk-management' },
    { label: 'Calendar', icon: 'assets/icons/calendar.png', route: '/calendar' },
    { label: 'Tariff', icon: 'assets/icons/tariff.png', route: '/tariff' },
    { label: 'Event Management', icon: 'assets/icons/event-management.png', route: '/event-management' }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('Navigating to:', route); // Debugging log

    if (this.router.url !== route) {
      this.router.navigate([route]);
    } else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([route]);
      });
    }
  }
}
