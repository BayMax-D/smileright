import { FrontendPage } from './app.po';

describe('frontend App', () => {
  let page: FrontendPage;

  beforeEach(() => {
    page = new FrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    const text = page.getParagraphText().toString();
    expect(text).toEqual('app works!');
  });
});
