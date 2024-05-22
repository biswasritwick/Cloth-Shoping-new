import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSellerComponent } from './admin-add-seller.component';

describe('AdminAddSellerComponent', () => {
  let component: AdminAddSellerComponent;
  let fixture: ComponentFixture<AdminAddSellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddSellerComponent]
    });
    fixture = TestBed.createComponent(AdminAddSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
