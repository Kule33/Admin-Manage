import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // ✅ Import Router

@Component({
  selector: 'app-institute-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instituteSetup.component.html',
  styleUrls: ['./instituteSetup.component.scss']
})
export class InstituteSetupComponent {
  constructor(private router: Router) {} // ✅ No more error

  streams = [
    { id: 1, name: 'EQUIPMENT OPERATIONS & LOGISTICS' },
    { id: 2, name: 'INFORMATION SYSTEMS' },
    { id: 3, name: 'MANAGEMENT' },
    { id: 4, name: 'MARITIME & SEAMANSHIP' },
    { id: 5, name: 'TECHNICAL I (Electrical & Electronic, Industrial Engineering)' },
    { id: 6, name: 'TECHNICAL II (Workshop Practice)' }
  ];

  navigateToStream(id: number) {
    this.router.navigate(['/institute-setup/stream', id]);
  }
}
