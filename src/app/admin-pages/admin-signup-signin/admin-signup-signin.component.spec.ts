import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignupSigninComponent } from './admin-signup-signin.component';

describe('AdminSignupSigninComponent', () => {
  let component: AdminSignupSigninComponent;
  let fixture: ComponentFixture<AdminSignupSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSignupSigninComponent]
    });
    fixture = TestBed.createComponent(AdminSignupSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
