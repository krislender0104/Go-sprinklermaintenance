import { SiteaddtestModule } from './siteaddtest.module';

describe('SiteaddtestModule', () => {
  let siteaddtestModule: SiteaddtestModule;

  beforeEach(() => {
    siteaddtestModule = new SiteaddtestModule();
  });

  it('should create an instance', () => {
    expect(siteaddtestModule).toBeTruthy();
  });
});
