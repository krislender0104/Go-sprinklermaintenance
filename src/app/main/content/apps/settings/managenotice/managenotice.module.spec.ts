import { ManagenoticeModule } from './managenotice.module';

describe('ManagenoticeModule', () => {
  let managenoticeModule: ManagenoticeModule;

  beforeEach(() => {
    managenoticeModule = new ManagenoticeModule();
  });

  it('should create an instance', () => {
    expect(managenoticeModule).toBeTruthy();
  });
});
