import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWebsiteLayoutsComponent } from './login-website-layouts.component';

describe('LoginWebsiteLayoutsComponent', () => {
  let component: LoginWebsiteLayoutsComponent;
  let fixture: ComponentFixture<LoginWebsiteLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginWebsiteLayoutsComponent]
    });
    fixture = TestBed.createComponent(LoginWebsiteLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
