import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-institute-setup',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule
  templateUrl: './instituteSetup.component.html',
  styleUrls: ['./instituteSetup.component.scss']
})
export class InstituteSetupComponent {
navigateToStream(arg0: number) {
throw new Error('Method not implemented.');
}
  streams = [
    { id: 1, name: 'Equipment Operation and Logistics' },
    { id: 2, name: 'Mechanical Engineering' },
    { id: 3, name: 'Software Development' }
  ];
}

