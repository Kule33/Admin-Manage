import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-human-resource-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './humanResourceManagement.component.html',
  styleUrls: ['./humanResourceManagement.component.scss']
})
export class HumanResourceManagementComponent {}
