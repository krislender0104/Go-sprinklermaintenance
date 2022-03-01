import { SitelistModule } from './sitelist.module';

describe('SitelistModule', () => {
  let sitelistModule: SitelistModule;

  beforeEach(() => {
    sitelistModule = new SitelistModule();
  });

  it('should create an instance', () => {
    expect(sitelistModule).toBeTruthy();
  });
});
