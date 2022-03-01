import { HazardcheckModule } from './hazardcheck.module';

describe('HazardcheckModule', () => {
  let hazardcheckModule: HazardcheckModule;

  beforeEach(() => {
    hazardcheckModule = new HazardcheckModule();
  });

  it('should create an instance', () => {
    expect(hazardcheckModule).toBeTruthy();
  });
});
