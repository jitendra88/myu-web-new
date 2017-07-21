import { MyuWebNewPage } from './app.po';

describe('myu-web-new App', () => {
  let page: MyuWebNewPage;

  beforeEach(() => {
    page = new MyuWebNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
