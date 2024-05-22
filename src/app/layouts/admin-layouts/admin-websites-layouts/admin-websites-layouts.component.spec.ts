import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWebsitesLayoutsComponent } from './admin-websites-layouts.component';

describe('AdminWebsitesLayoutsComponent', () => {
  let component: AdminWebsitesLayoutsComponent;
  let fixture: ComponentFixture<AdminWebsitesLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminWebsitesLayoutsComponent]
    });
    fixture = TestBed.createComponent(AdminWebsitesLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
