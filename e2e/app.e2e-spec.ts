import { UbicacionesPage } from './app.po';

describe('ubicaciones App', function() {
  let page: UbicacionesPage;

  beforeEach(() => {
    page = new UbicacionesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
