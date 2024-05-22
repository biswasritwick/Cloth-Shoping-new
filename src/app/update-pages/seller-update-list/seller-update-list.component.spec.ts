import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerUpdateListComponent } from './seller-update-list.component';

describe('SellerUpdateListComponent', () => {
  let component: SellerUpdateListComponent;
  let fixture: ComponentFixture<SellerUpdateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerUpdateListComponent]
    });
    fixture = TestBed.createComponent(SellerUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
