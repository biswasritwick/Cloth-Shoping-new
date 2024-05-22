import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerOrderListDetailsComponent } from './seller-order-list-details.component';

describe('SellerOrderListDetailsComponent', () => {
  let component: SellerOrderListDetailsComponent;
  let fixture: ComponentFixture<SellerOrderListDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerOrderListDetailsComponent]
    });
    fixture = TestBed.createComponent(SellerOrderListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
