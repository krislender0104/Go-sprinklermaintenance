import { TechniciancreateModule } from './techniciancreate.module';

describe('TechniciancreateModule', () => {
  let techniciancreateModule: TechniciancreateModule;

  beforeEach(() => {
    techniciancreateModule = new TechniciancreateModule();
  });

  it('should create an instance', () => {
    expect(techniciancreateModule).toBeTruthy();
  });
});
