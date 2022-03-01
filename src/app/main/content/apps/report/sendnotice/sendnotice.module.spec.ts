import { SendnoticeModule } from './sendnotice.module';

describe('SendnoticeModule', () => {
  let sendnoticeModule: SendnoticeModule;

  beforeEach(() => {
    sendnoticeModule = new SendnoticeModule();
  });

  it('should create an instance', () => {
    expect(sendnoticeModule).toBeTruthy();
  });
});
