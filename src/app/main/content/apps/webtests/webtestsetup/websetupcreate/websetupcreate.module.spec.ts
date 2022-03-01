import { WebsetupcreateModule } from './websetupcreate.module';

describe('WebsetupcreateModule', () => {
  let websetupcreateModule: WebsetupcreateModule;

  beforeEach(() => {
    websetupcreateModule = new WebsetupcreateModule();
  });

  it('should create an instance', () => {
    expect(websetupcreateModule).toBeTruthy();
  });
});
