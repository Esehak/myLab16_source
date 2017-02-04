import { DataDrivenFormPage } from './app.po';

describe('data-driven-form App', function() {
  let page: DataDrivenFormPage;

  beforeEach(() => {
    page = new DataDrivenFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
