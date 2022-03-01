import { MailmergeModule } from './mailmerge.module';

describe('MailmergeModule', () => {
  let mailmergeModule: MailmergeModule;

  beforeEach(() => {
    mailmergeModule = new MailmergeModule();
  });

  it('should create an instance', () => {
    expect(mailmergeModule).toBeTruthy();
  });
});
