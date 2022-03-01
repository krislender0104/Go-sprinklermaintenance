import { AssigningappoinmentsModule } from './assigningappoinments.module';

describe('AssigningappoinmentsModule', () => {
  let assigningappoinmentsModule: AssigningappoinmentsModule;

  beforeEach(() => {
    assigningappoinmentsModule = new AssigningappoinmentsModule();
  });

  it('should create an instance', () => {
    expect(assigningappoinmentsModule).toBeTruthy();
  });
});
