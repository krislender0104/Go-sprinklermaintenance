import { TestBed, inject } from '@angular/core/testing';

import { ReviewUnsubmittedtestsService } from './review-unsubmittedtests.service';

describe('ReviewUnsubmittedtestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewUnsubmittedtestsService]
    });
  });

  it('should be created', inject([ReviewUnsubmittedtestsService], (service: ReviewUnsubmittedtestsService) => {
    expect(service).toBeTruthy();
  }));
});
