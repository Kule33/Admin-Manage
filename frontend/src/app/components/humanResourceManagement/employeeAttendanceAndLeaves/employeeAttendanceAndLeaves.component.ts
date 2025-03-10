import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-attendance-and-leaves',
  standalone: true,
  imports: [FormsModule],  // ✅ Import FormsModule
  templateUrl: './employeeAttendanceAndLeaves.component.html',
  styleUrls: ['./employeeAttendanceAndLeaves.component.scss'],
})
export class EmployeeAttendanceAndLeavesComponent {
  employeeId = '';
  name = '';
  department = '';
  leaveDays = '';

  checkLeaveStatus() {
    console.log(`Checking leave status for ${this.name} (ID: ${this.employeeId})`);
  }
}
