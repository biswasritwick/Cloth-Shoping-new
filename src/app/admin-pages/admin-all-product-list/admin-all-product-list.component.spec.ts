import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllProductListComponent } from './admin-all-product-list.component';

describe('AdminAllProductListComponent', () => {
  let component: AdminAllProductListComponent;
  let fixture: ComponentFixture<AdminAllProductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAllProductListComponent]
    });
    fixture = TestBed.createComponent(AdminAllProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
