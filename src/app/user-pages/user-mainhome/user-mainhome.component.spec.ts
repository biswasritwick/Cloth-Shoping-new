import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainhomeComponent } from './user-mainhome.component';

describe('UserMainhomeComponent', () => {
  let component: UserMainhomeComponent;
  let fixture: ComponentFixture<UserMainhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserMainhomeComponent]
    });
    fixture = TestBed.createComponent(UserMainhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
