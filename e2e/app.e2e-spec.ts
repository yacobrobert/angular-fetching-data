import { ValarsAppPage } from './app.po';

describe('valars-app App', () => {
  let page: ValarsAppPage;

  beforeEach(() => {
    page = new ValarsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
