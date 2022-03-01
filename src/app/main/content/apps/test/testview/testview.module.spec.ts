import { TestviewModule } from './testview.module';

describe('TestviewModule', () => {
  let testviewModule: TestviewModule;

  beforeEach(() => {
    testviewModule = new TestviewModule();
  });

  it('should create an instance', () => {
    expect(testviewModule).toBeTruthy();
  });
});
