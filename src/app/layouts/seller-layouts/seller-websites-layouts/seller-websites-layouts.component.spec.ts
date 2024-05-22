import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerWebsitesLayoutsComponent } from './seller-websites-layouts.component';

describe('SellerWebsitesLayoutsComponent', () => {
  let component: SellerWebsitesLayoutsComponent;
  let fixture: ComponentFixture<SellerWebsitesLayoutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellerWebsitesLayoutsComponent]
    });
    fixture = TestBed.createComponent(SellerWebsitesLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
