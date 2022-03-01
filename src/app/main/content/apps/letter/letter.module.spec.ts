import { LetterModule } from './letter.module';

describe('LetterModule', () => {
  let letterModule: LetterModule;

  beforeEach(() => {
    letterModule = new LetterModule();
  });

  it('should create an instance', () => {
    expect(letterModule).toBeTruthy();
  });
});
