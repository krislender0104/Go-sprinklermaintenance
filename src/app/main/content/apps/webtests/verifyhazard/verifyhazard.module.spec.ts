import { VerifyhazardModule } from './verifyhazard.module';

describe('VerifyhazardModule', () => {
  let verifyhazardModule: VerifyhazardModule;

  beforeEach(() => {
    verifyhazardModule = new VerifyhazardModule();
  });

  it('should create an instance', () => {
    expect(verifyhazardModule).toBeTruthy();
  });
});
