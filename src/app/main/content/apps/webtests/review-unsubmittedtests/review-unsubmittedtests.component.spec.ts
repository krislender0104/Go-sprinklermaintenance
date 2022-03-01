import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUnsubmittedtestsComponent } from './review-unsubmittedtests.component';

describe('ReviewUnsubmittedtestsComponent', () => {
  let component: ReviewUnsubmittedtestsComponent;
  let fixture: ComponentFixture<ReviewUnsubmittedtestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewUnsubmittedtestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewUnsubmittedtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
