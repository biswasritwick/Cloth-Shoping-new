import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoustomerListComponent } from './admin-coustomer-list.component';

describe('AdminCoustomerListComponent', () => {
  let component: AdminCoustomerListComponent;
  let fixture: ComponentFixture<AdminCoustomerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCoustomerListComponent]
    });
    fixture = TestBed.createComponent(AdminCoustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
