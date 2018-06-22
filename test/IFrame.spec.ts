import { browser } from 'protractor';
import { IFramePracticePage } from '../src/page';

const webpage = 'http://toolsqa.com/iframe-practice-page/';
const newHeight = 200;

describe(`Given I want to enter to ${webpage}` , () => {

  const iFramePracticePage: IFramePracticePage = new IFramePracticePage();

  describe('When I open the webpage', () => {
    beforeAll(async() => {
      await browser.get(webpage);
    });

    describe('and I use javascript code to change the first IFrame height', () => {
      beforeAll(async() => {
        await iFramePracticePage.iFrameHeight(newHeight);
      });

      it(`then the height should be ${newHeight}`, async() => {
        await expect(iFramePracticePage.height())
              .toBe(newHeight);
      });
    });
  });
});
