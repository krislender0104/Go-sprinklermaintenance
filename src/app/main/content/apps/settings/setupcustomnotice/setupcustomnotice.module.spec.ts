import { SetupcustomnoticeModule } from './setupcustomnotice.module';

describe('SetupcustomnoticeModule', () => {
  let setupcustomnoticeModule: SetupcustomnoticeModule;

  beforeEach(() => {
    setupcustomnoticeModule = new SetupcustomnoticeModule();
  });

  it('should create an instance', () => {
    expect(setupcustomnoticeModule).toBeTruthy();
  });
});
