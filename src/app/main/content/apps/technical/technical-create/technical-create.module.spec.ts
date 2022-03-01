import { TechnicalCreateModule } from './technical-create.module';

describe('TechnicalCreateModule', () => {
  let technicalCreateModule: TechnicalCreateModule;

  beforeEach(() => {
    technicalCreateModule = new TechnicalCreateModule();
  });

  it('should create an instance', () => {
    expect(technicalCreateModule).toBeTruthy();
  });
});
