import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FrontDeskData {
  streams: string;
  courses: string;
  fee: string;
  duration: string;
  availability: string;
  medium: string;
  entryRequirements: string;
  maxCount: string;
  nvqLevel: string;
  commencementDateTime: string;
}

@Component({
  selector: 'app-front-desk-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './frontDeskManagement.component.html',
  styleUrls: ['./frontDeskManagement.component.scss']
})
export class FrontDeskManagementComponent implements OnInit {
  frontDeskData: FrontDeskData[] = [
    {
      streams: 'Stream 1',
      courses: 'Course A',
      fee: '$500',
      duration: '3 Months',
      availability: 'Online',
      medium: 'Digital',
      entryRequirements: 'Basic Knowledge',
      maxCount: '30',
      nvqLevel: 'Level 4',
      commencementDateTime: '2024-06-15T09:00'
    }
  ];

  newEntry: FrontDeskData = {
    streams: '',
    courses: '',
    fee: '',
    duration: '',
    availability: '',
    medium: '',
    entryRequirements: '',
    maxCount: '',
    nvqLevel: '',
    commencementDateTime: ''
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmit(): void {
    // Add the new entry to the array
    this.frontDeskData.push({...this.newEntry});
    
    // Reset the form
    this.resetForm();
  }

  deleteEntry(index: number): void {
    // Remove the entry at the specified index
    this.frontDeskData.splice(index, 1);
  }

  private resetForm(): void {
    // Reset the newEntry to its initial state
    this.newEntry = {
      streams: '',
      courses: '',
      fee: '',
      duration: '',
      availability: '',
      medium: '',
      entryRequirements: '',
      maxCount: '',
      nvqLevel: '',
      commencementDateTime: ''
    };
  }
}