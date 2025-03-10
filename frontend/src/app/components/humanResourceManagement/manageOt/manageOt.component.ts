import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-ot',
  standalone: true,
  templateUrl: './manageOt.component.html',
  styleUrls: ['./manageOt.component.scss'],
})
export class ManageOtComponent {
  serviceNo = '';
  nic = '';
  name = '';
  position = '';

  checkAttendance() {
    console.log('Checking attendance for:', this.serviceNo, this.nic, this.name, this.position);
  }
}
