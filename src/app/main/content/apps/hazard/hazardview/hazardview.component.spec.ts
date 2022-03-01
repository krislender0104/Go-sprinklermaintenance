import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardviewComponent } from './hazardview.component';

describe('HazardviewComponent', () => {
  let component: HazardviewComponent;
  let fixture: ComponentFixture<HazardviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazardviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
