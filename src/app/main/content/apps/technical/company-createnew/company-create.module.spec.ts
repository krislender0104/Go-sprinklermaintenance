import { CompanyCreateModule } from './company-create.module';

describe('CompanyCreateModule', () => {
  let companyCreateModule: CompanyCreateModule;

  beforeEach(() => {
    companyCreateModule = new CompanyCreateModule();
  });

  it('should create an instance', () => {
    expect(companyCreateModule).toBeTruthy();
  });
});
