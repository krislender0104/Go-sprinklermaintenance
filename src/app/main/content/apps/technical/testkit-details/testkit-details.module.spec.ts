import { TestkitDetailsModule } from './testkit-details.module';

describe('TestkitDetailsModule', () => {
  let testkitDetailsModule: TestkitDetailsModule;

  beforeEach(() => {
    testkitDetailsModule = new TestkitDetailsModule();
  });

  it('should create an instance', () => {
    expect(testkitDetailsModule).toBeTruthy();
  });
});
