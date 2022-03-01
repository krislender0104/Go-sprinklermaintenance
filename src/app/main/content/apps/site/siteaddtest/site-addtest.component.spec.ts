import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAddtestComponent } from './site-addtest.component';

describe('SiteAddtestComponent', () => {
  let component: SiteAddtestComponent;
  let fixture: ComponentFixture<SiteAddtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAddtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAddtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
