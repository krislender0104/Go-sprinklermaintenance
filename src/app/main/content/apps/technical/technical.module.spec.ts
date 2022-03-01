import { TechnicalModule } from './technical.module';

describe('TechnnicalModule', () => {
  let technicalModule: TechnicalModule;

  beforeEach(() => {
    technicalModule = new TechnicalModule();
  });

  it('should create an instance', () => {
    expect(technicalModule).toBeTruthy();
  });
});
