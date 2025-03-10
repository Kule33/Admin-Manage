import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './eventBooking.component.html',
  styleUrls: ['./eventBooking.component.scss']
})
export class EventBookingComponent {
  bookingForm: FormGroup;
  
  constructor(private fb: FormBuilder, private router: Router) {
    this.bookingForm = this.fb.group({
      companyName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      eventDetails: ['', Validators.required]
    });
  }
  
  openDatePicker(controlName: string) {
    // Logic to open date picker
    console.log(`Opening date picker for ${controlName}`);
  }
  
  openTimePicker(controlName: string) {
    // Logic to open time picker
    console.log(`Opening time picker for ${controlName}`);
  }
  
  goBack() {
    this.router.navigate(['/event-management']);
  }
  
  goNext() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      // Navigate to next step or submit
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.bookingForm.controls).forEach(key => {
        const control = this.bookingForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}
