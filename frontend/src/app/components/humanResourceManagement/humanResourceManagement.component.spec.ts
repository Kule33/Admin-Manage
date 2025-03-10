import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceManagementComponent } from './humanResourceManagement.component';

describe('HumanResourceManagementComponent', () => {
  let component: HumanResourceManagementComponent;
  let fixture: ComponentFixture<HumanResourceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumanResourceManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumanResourceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
