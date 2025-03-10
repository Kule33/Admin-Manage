import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/adminDashboard/adminDashboard.component';

// Institute Setup
import { InstituteSetupComponent } from './components/instituteSetup/instituteSetup.component';
import { StreamDetailsComponent } from './components/streamDetails/streamDetails.component';

// Calendar
import { CalendarComponent } from './components/calendar/calendar.component';

// Human Resource Management
import { HumanResourceManagementComponent } from './components/humanResourceManagement/humanResourceManagement.component';
import { EmployeeRegistrationComponent } from './components/humanResourceManagement/employeeRegistration/employeeRegistration.component';
import { ManageOtComponent } from './components/humanResourceManagement/manageOt/manageOt.component';
import { EmployeeAttendanceAndLeavesComponent } from './components/humanResourceManagement/employeeAttendanceAndLeaves/employeeAttendanceAndLeaves.component';

// Tariff Component
import { TariffComponent } from './components/tariff/tariff.component';

// Event Management Components
import { EventManagementComponent } from './components/eventManagement/eventManagement.component';
import { EventBookingComponent } from './components/eventManagement/eventBooking/eventBooking.component';

// Front Desk Management Component
import { FrontDeskManagementComponent } from './components/frontDeskManagement/frontDeskManagement.component';

export const routes: Routes = [
  // Dashboard Route
  { path: '', component: AdminDashboardComponent },

  // Institute Setup Routes
  { path: 'institute-setup', component: InstituteSetupComponent },
  { path: 'institute-setup/stream/:id', component: StreamDetailsComponent },

  // Calendar Route
  { path: 'calendar', component: CalendarComponent },

  // Human Resource Management Routes
  { path: 'human-resource-management', component: HumanResourceManagementComponent },
  { path: 'human-resource-management/employee-registration', component: EmployeeRegistrationComponent },
  { path: 'human-resource-management/manage-ot', component: ManageOtComponent },
  { path: 'human-resource-management/employee-attendance-leaves', component: EmployeeAttendanceAndLeavesComponent },

  // Tariff Route
  { path: 'tariff', component: TariffComponent },
  
  // Event Management Routes
  { path: 'event-management', component: EventManagementComponent },
  { path: 'event-management/event-booking', component: EventBookingComponent },

  // Front Desk Management Route
  { path: 'front-desk-management', component: FrontDeskManagementComponent }
];
