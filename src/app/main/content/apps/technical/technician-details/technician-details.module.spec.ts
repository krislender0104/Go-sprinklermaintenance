import { TechnicianDetailsModule } from './technician-details.module';

describe('TechnicianDetailsModule', () => {
  let technicianDetailsModule: TechnicianDetailsModule;

  beforeEach(() => {
    technicianDetailsModule = new TechnicianDetailsModule();
  });

  it('should create an instance', () => {
    expect(technicianDetailsModule).toBeTruthy();
  });
});
