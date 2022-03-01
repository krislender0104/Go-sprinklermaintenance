import { TechnicalDetailsModule } from './technical-details.module';

describe('TechnicalDetailsModule', () => {
  let technicalDetailsModule: TechnicalDetailsModule;

  beforeEach(() => {
    technicalDetailsModule = new TechnicalDetailsModule();
  });

  it('should create an instance', () => {
    expect(technicalDetailsModule).toBeTruthy();
  });
});
