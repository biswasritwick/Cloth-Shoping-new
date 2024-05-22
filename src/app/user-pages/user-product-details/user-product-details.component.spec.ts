import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductDetailsComponent } from './user-product-details.component';

describe('UserProductDetailsComponent', () => {
  let component: UserProductDetailsComponent;
  let fixture: ComponentFixture<UserProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProductDetailsComponent]
    });
    fixture = TestBed.createComponent(UserProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
