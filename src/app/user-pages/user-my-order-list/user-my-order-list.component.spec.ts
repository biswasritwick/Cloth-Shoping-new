import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyOrderListComponent } from './user-my-order-list.component';

describe('UserMyOrderListComponent', () => {
  let component: UserMyOrderListComponent;
  let fixture: ComponentFixture<UserMyOrderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMyOrderListComponent]
    });
    fixture = TestBed.createComponent(UserMyOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
