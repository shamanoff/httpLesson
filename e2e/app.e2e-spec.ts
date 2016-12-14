import { HttpLessonPage } from './app.po';

describe('http-lesson App', function() {
  let page: HttpLessonPage;

  beforeEach(() => {
    page = new HttpLessonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
