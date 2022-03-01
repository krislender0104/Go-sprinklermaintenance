import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedtestsComponent } from './submittedtests.component';

describe('SubmittedtestsComponent', () => {
  let component: SubmittedtestsComponent;
  let fixture: ComponentFixture<SubmittedtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
