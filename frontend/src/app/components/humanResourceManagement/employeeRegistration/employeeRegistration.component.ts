import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-employee-registration',
  standalone: true,
  imports: [CommonModule, FormsModule], //  Ensure FormsModule is imported
  templateUrl: './employeeRegistration.component.html',
  styleUrls: ['./employeeRegistration.component.scss']
})
export class EmployeeRegistrationComponent {
  //  Define fields for the form
  employeeFields = [
    { id: 'serviceNo', label: 'Service No' },
    { id: 'fullName', label: 'Full Name' },
    { id: 'address', label: 'Address' },
    { id: 'nicOrPp', label: 'NIC* or PP*' },
    { id: 'email', label: 'Email Address' },
    { id: 'position', label: 'Position' },
    { id: 'division', label: 'Division' }
  ];

  employeeData: any = {}; //  Define employeeData object

  //  Define the onBack method
  onBack() {
    console.log("Going back...");
    // Add navigation logic if required
  }

  //  Handle form submission
  onSubmit() {
    console.log('Form Submitted:', this.employeeData);
  }
}

