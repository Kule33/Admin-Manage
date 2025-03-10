import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBookingComponent } from './eventBooking.component';

describe('EventBookingComponent', () => {
  let component: EventBookingComponent;
  let fixture: ComponentFixture<EventBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
