import { AdsearchModule } from './adsearch.module';

describe('AdsearchModule', () => {
  let adsearchModule: AdsearchModule;

  beforeEach(() => {
    adsearchModule = new AdsearchModule();
  });

  it('should create an instance', () => {
    expect(adsearchModule).toBeTruthy();
  });
});
