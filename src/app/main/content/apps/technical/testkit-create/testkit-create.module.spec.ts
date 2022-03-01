import { TestkitCreateModule } from './testkit-create.module';

describe('TestkitCreateModule', () => {
  let testkitCreateModule: TestkitCreateModule;

  beforeEach(() => {
    testkitCreateModule = new TestkitCreateModule();
  });

  it('should create an instance', () => {
    expect(testkitCreateModule).toBeTruthy();
  });
});
