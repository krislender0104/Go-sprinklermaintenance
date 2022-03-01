import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAddhazardComponent } from './site-addhazard.component';

describe('SiteAddhazardComponent', () => {
  let component: SiteAddhazardComponent;
  let fixture: ComponentFixture<SiteAddhazardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAddhazardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAddhazardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
