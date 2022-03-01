import { AppoinmentsModule } from './appoinments.module';

describe('AppoinmentsModule', () => {
  let appoinmentsModule: AppoinmentsModule;

  beforeEach(() => {
    appoinmentsModule = new AppoinmentsModule();
  });

  it('should create an instance', () => {
    expect(appoinmentsModule).toBeTruthy();
  });
});
