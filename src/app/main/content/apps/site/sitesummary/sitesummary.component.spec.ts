import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesummaryComponent } from './sitesummary.component';

describe('SitesummaryComponent', () => {
  let component: SitesummaryComponent;
  let fixture: ComponentFixture<SitesummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
