import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given I want to fill an information form', () => {

  const webpage = 'http://toolsqa.com/automation-practice-form/';
  const correctTitle = 'Practice Automation Form';
  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  describe('When I open the webpage', () => {
    beforeAll(async() => {
      await browser.get(webpage);
    });

    describe('And I fill and submit the form', () => {
      beforeAll(async() => {
        await personalInformationPage.fillForm({
          firstName: 'Alejandro',
          lastName: 'Perdomo',
          sex: 'Male',
          experience: 7,
          profession: ['Automation Tester'],
          tools: ['Selenium Webdriver'],
          continent: 'South America',
          commands: [
            'Browser Commands',
            'Navigation Commands',
            'Switch Commands',
            'Wait Commands',
            'WebElement Commands']
        });
        await personalInformationPage.submitForm();
      });

      it(`then the title of the form must be the following: ${correctTitle}`,
         async () => {
           await expect(personalInformationPage.title())
              .toBe(correctTitle);
         });
    });
  });
});
