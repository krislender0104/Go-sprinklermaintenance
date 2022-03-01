import { HazardModule } from './hazard.module';

describe('HazardModule', () => {
  let hazardModule: HazardModule;

  beforeEach(() => {
    hazardModule = new HazardModule();
  });

  it('should create an instance', () => {
    expect(hazardModule).toBeTruthy();
  });
});
