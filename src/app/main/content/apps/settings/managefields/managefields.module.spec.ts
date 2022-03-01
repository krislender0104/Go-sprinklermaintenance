import { ManagefieldsModule } from './managefields.module';

describe('ManagefieldsModule', () => {
  let managefieldsModule: ManagefieldsModule;

  beforeEach(() => {
    managefieldsModule = new ManagefieldsModule();
  });

  it('should create an instance', () => {
    expect(managefieldsModule).toBeTruthy();
  });
});
