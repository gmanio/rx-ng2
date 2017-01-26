import { RxNg2Page } from './app.po';

describe('rx-ng2 App', function() {
  let page: RxNg2Page;

  beforeEach(() => {
    page = new RxNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
