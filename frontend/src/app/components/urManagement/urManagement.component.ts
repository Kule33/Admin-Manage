import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ur-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './urManagement.component.html',
  styleUrls: ['./urManagement.component.scss']
})
export class UrManagementComponent {
  selectedRole: string = 'student'; // Default role

  studentData: any[] = [];
  employeeData: any[] = [];
  lecturerData: any[] = [];

  constructor() {
    this.initializeData();
  }

  initializeData() {
    this.studentData = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ];

    this.employeeData = [
      { id: 1, name: 'Michael Brown', email: 'michael@example.com' },
      { id: 2, name: 'Emily Davis', email: 'emily@example.com' }
    ];

    this.lecturerData = [
      { id: 1, name: 'Dr. Richard Roe', email: 'richard@example.com' },
      { id: 2, name: 'Dr. Laura Wilson', email: 'laura@example.com' }
    ];
  }

  onRoleChange(role: string) {
    this.selectedRole = role;
  }

  editRole(user: any) {
    console.log(`Editing role for: ${user.name}`);
  }
}
