import { TechnicianCreateModule } from './technician-create.module';

describe('TechnicianCreateModule', () => {
  let technicianCreateModule: TechnicianCreateModule;

  beforeEach(() => {
    technicianCreateModule = new TechnicianCreateModule();
  });

  it('should create an instance', () => {
    expect(technicianCreateModule).toBeTruthy();
  });
});
