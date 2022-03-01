import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteImportComponent } from './site-import.component';

describe('SiteImportComponent', () => {
  let component: SiteImportComponent;
  let fixture: ComponentFixture<SiteImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
