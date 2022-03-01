import { SiteCreateModule } from './site-create.module';

describe('SiteCreateModule', () => {
  let siteCreateModule: SiteCreateModule;

  beforeEach(() => {
    siteCreateModule = new SiteCreateModule();
  });

  it('should create an instance', () => {
    expect(siteCreateModule).toBeTruthy();
  });
});
