import { TestentryModule } from './testentry.module';

describe('TestentryModule', () => {
  let testentryModule: TestentryModule;

  beforeEach(() => {
    testentryModule = new TestentryModule();
  });

  it('should create an instance', () => {
    expect(testentryModule).toBeTruthy();
  });
});
