import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAttendanceAndLeavesComponent } from './employeeAttendanceAndLeaves.component';

describe('EmployeeAttendanceAndLeavesComponent', () => {
  let component: EmployeeAttendanceAndLeavesComponent;
  let fixture: ComponentFixture<EmployeeAttendanceAndLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAttendanceAndLeavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAttendanceAndLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
