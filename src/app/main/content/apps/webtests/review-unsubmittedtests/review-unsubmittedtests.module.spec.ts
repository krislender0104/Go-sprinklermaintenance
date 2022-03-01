import { ReviewUnsubmittedtestsModule } from './review-unsubmittedtests.module';

describe('ReviewUnsubmittedtestsModule', () => {
  let reviewUnsubmittedtestsModule: ReviewUnsubmittedtestsModule;

  beforeEach(() => {
    reviewUnsubmittedtestsModule = new ReviewUnsubmittedtestsModule();
  });

  it('should create an instance', () => {
    expect(reviewUnsubmittedtestsModule).toBeTruthy();
  });
});
