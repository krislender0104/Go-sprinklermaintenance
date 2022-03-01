import { GeneratecustomnoticeModule } from './generatecustomnotice.module';

describe('GeneratecustomnoticeModule', () => {
  let generatecustomnoticeModule: GeneratecustomnoticeModule;

  beforeEach(() => {
    generatecustomnoticeModule = new GeneratecustomnoticeModule();
  });

  it('should create an instance', () => {
    expect(generatecustomnoticeModule).toBeTruthy();
  });
});
