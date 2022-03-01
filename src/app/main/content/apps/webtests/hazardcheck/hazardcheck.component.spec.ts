import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardcheckComponent } from './hazardcheck.component';

describe('HazardcheckComponent', () => {
  let component: HazardcheckComponent;
  let fixture: ComponentFixture<HazardcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
