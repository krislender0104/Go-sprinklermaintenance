import { HazardviewModule } from './hazardview.module';

describe('HazardviewModule', () => {
  let hazardviewModule: HazardviewModule;

  beforeEach(() => {
    hazardviewModule = new HazardviewModule();
  });

  it('should create an instance', () => {
    expect(hazardviewModule).toBeTruthy();
  });
});
