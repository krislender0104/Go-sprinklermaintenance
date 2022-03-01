import { SitesummaryModule } from './sitesummary.module';

describe('SitesummaryModule', () => {
  let sitesummaryModule: SitesummaryModule;

  beforeEach(() => {
    sitesummaryModule = new SitesummaryModule();
  });

  it('should create an instance', () => {
    expect(sitesummaryModule).toBeTruthy();
  });
});
