import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventManagement.component.html',
  styleUrls: ['./eventManagement.component.scss']
})
export class EventManagementComponent {
  
  constructor(private router: Router) {}
  
  navigateToEventBooking() {
    this.router.navigate(['/event-management/event-booking']);
  }
  
  goBack() {
    this.router.navigate(['/']);
  }
}
