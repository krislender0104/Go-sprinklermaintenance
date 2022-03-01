import { PendingtestModule } from './pendingtest.module';

describe('PendingtestModule', () => {
  let pendingtestModule: PendingtestModule;

  beforeEach(() => {
    pendingtestModule = new PendingtestModule();
  });

  it('should create an instance', () => {
    expect(pendingtestModule).toBeTruthy();
  });
});
 