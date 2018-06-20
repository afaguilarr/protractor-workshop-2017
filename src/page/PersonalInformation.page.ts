import { element, by, ElementFinder, promise } from 'protractor';

export class PersonalInformationPage {

  private get formTitle(): ElementFinder {
    return element(by.css('.wpb_wrapper > h1'));
  }

  private get firstNameField(): ElementFinder {
    return element(by.name('firstname'));
  }

  private get lastNameField(): ElementFinder {
    return element(by.name('lastname'));
  }

  private getElementByValue(value): ElementFinder {
    return element(by.css(`[value='${value}']`));
  }

  private get continentsSelect(): ElementFinder {
    return element(by.id('continents'));
  }

  private getContinentByName(continentName): ElementFinder {
    return element(by
      .cssContainingText('#continents > option', continentName));
  }

  private getSeleniumCommandByName(commandName): ElementFinder {
    return element(by
      .cssContainingText('#selenium_commands > option', commandName));
  }

  private get submitButton(): ElementFinder {
    return element(by.id(`submit`));
  }

  public async fillForm(formData): Promise<void> {
    await this.firstNameField.sendKeys(formData.firstName);
    await this.lastNameField.sendKeys(formData.lastName);
    await this.getElementByValue(formData.sex).click();
    await this.getElementByValue(formData.experience).click();
    for (const profession of formData.profession) {
      await this.getElementByValue(profession).click();
    }
    for (const tool of formData.tools) {
      await this.getElementByValue(tool).click();
    }
    await this.continentsSelect.click();
    await this.getContinentByName(formData.continent).click();
    for (const command of formData.commands) {
      await this.getSeleniumCommandByName(command).click();
    }
  }

  public async submitForm(): Promise<void> {
    return this.submitButton.click();
  }

  public title(): promise.Promise<string> {
    return this.formTitle.getText();
  }
}
