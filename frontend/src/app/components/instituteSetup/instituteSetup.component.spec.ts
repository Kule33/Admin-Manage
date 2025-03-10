import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteSetupComponent } from './instituteSetup.component';

describe('InstituteSetupComponent', () => {
  let component: InstituteSetupComponent;
  let fixture: ComponentFixture<InstituteSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstituteSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
