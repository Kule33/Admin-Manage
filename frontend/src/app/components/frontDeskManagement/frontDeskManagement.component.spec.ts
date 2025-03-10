import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontDeskManagementComponent } from './frontDeskManagement.component';

describe('FrontDeskManagementComponent', () => {
  let component: FrontDeskManagementComponent;
  let fixture: ComponentFixture<FrontDeskManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontDeskManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontDeskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
