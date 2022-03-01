import { SiteimportModule } from './siteimport.module';

describe('SiteimportModule', () => {
  let siteimportModule: SiteimportModule;

  beforeEach(() => {
    siteimportModule = new SiteimportModule();
  });

  it('should create an instance', () => {
    expect(siteimportModule).toBeTruthy();
  });
});
