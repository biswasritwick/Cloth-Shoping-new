import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFooterComponent } from './seller-footer.component';

describe('SellerFooterComponent', () => {
  let component: SellerFooterComponent;
  let fixture: ComponentFixture<SellerFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerFooterComponent]
    });
    fixture = TestBed.createComponent(SellerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
