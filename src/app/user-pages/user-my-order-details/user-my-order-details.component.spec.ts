import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyOrderDetailsComponent } from './user-my-order-details.component';

describe('UserMyOrderDetailsComponent', () => {
  let component: UserMyOrderDetailsComponent;
  let fixture: ComponentFixture<UserMyOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMyOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(UserMyOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
