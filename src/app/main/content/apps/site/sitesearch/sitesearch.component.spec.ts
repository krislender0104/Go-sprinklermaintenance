import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesearchComponent } from './sitesearch.component';

describe('SitesearchComponent', () => {
  let component: SitesearchComponent;
  let fixture: ComponentFixture<SitesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
