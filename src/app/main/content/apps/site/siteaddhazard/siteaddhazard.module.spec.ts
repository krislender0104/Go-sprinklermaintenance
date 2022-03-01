import { SiteaddhazardModule } from './siteaddhazard.module';

describe('SiteaddhazardModule', () => {
  let siteaddhazardModule: SiteaddhazardModule;

  beforeEach(() => {
    siteaddhazardModule = new SiteaddhazardModule();
  });

  it('should create an instance', () => {
    expect(siteaddhazardModule).toBeTruthy();
  });
});
