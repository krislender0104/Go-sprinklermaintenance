import { WebtestreviewModule } from './webtestreview.module';

describe('WebtestreviewModule', () => {
  let webtestreviewModule: WebtestreviewModule;

  beforeEach(() => {
    webtestreviewModule = new WebtestreviewModule();
  });

  it('should create an instance', () => {
    expect(webtestreviewModule).toBeTruthy();
  });
});
