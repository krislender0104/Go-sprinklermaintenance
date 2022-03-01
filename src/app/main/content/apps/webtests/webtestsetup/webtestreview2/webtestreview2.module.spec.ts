import { Webtestreview2Module } from './webtestreview2.module';

describe('Webtestreview2Module', () => {
  let webtestreview2Module: Webtestreview2Module;

  beforeEach(() => {
    webtestreview2Module = new Webtestreview2Module();
  });

  it('should create an instance', () => {
    expect(webtestreview2Module).toBeTruthy();
  });
});
