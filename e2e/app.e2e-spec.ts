import { ReduxSamplePage } from './app.po';

describe('redux-sample App', () => {
  let page: ReduxSamplePage;

  beforeEach(() => {
    page = new ReduxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rs works!');
  });
});
