import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSellerListComponent } from './admin-seller-list.component';

describe('AdminSellerListComponent', () => {
  let component: AdminSellerListComponent;
  let fixture: ComponentFixture<AdminSellerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSellerListComponent]
    });
    fixture = TestBed.createComponent(AdminSellerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
