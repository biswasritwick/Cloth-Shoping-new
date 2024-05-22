import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerProductListComponent } from './seller-product-list.component';

describe('SellerProductListComponent', () => {
  let component: SellerProductListComponent;
  let fixture: ComponentFixture<SellerProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerProductListComponent]
    });
    fixture = TestBed.createComponent(SellerProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
