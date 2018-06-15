import { ElementFinder, promise, element, by } from 'protractor';
import { PageValidations } from './PageValidations';

export class SignInStepPage {
  private get signInButton(): ElementFinder {
    return element(by.css('#SubmitLogin > span'));
  }

  private get emailField(): ElementFinder {
    return element(by.id('email'));
  }

  private get passwordField(): ElementFinder {
    return element(by.id('passwd'));
  }

  public sendMail(inputEmailAddress): promise.Promise<void> {
    PageValidations.emailValidator(inputEmailAddress);
    return this.emailField.sendKeys(inputEmailAddress);
  }

  public sendPassword(inputPassword): promise.Promise<void> {
    PageValidations.passwordValidator(inputPassword);
    return this.passwordField.sendKeys(inputPassword);
  }

  public signIn(): promise.Promise<void> {
    return this.signInButton.click();
  }
}
