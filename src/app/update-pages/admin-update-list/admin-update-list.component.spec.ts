import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateListComponent } from './admin-update-list.component';

describe('AdminUpdateListComponent', () => {
  let component: AdminUpdateListComponent;
  let fixture: ComponentFixture<AdminUpdateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateListComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
