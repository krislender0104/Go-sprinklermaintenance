import { SitesearchModule } from './sitesearch.module';

describe('SitesearchModule', () => {
  let sitesearchModule: SitesearchModule;

  beforeEach(() => {
    sitesearchModule = new SitesearchModule();
  });

  it('should create an instance', () => {
    expect(sitesearchModule).toBeTruthy();
  });
});
