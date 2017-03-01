import { ProjetAgilePage } from './app.po';

describe('projet-agile App', function() {
  let page: ProjetAgilePage;

  beforeEach(() => {
    page = new ProjetAgilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
