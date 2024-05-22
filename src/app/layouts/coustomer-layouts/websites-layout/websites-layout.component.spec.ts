import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitesLayoutComponent } from './websites-layout.component';

describe('WebsitesLayoutComponent', () => {
  let component: WebsitesLayoutComponent;
  let fixture: ComponentFixture<WebsitesLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsitesLayoutComponent]
    });
    fixture = TestBed.createComponent(WebsitesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
