import { EditletterModule } from './editletter.module';

describe('EditletterModule', () => {
  let editletterModule: EditletterModule;

  beforeEach(() => {
    editletterModule = new EditletterModule();
  });

  it('should create an instance', () => {
    expect(editletterModule).toBeTruthy();
  });
});
