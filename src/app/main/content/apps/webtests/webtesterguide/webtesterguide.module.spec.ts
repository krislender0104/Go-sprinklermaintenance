import { WebtesterguideModule } from './webtesterguide.module';

describe('WebtesterguideModule', () => {
  let webtesterguideModule: WebtesterguideModule;

  beforeEach(() => {
    webtesterguideModule = new WebtesterguideModule();
  });

  it('should create an instance', () => {
    expect(webtesterguideModule).toBeTruthy();
  });
});
