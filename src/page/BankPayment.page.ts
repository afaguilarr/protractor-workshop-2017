import { element, by, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get orderResumeButton(): ElementFinder {
    return element(
      by.css('#cart_navigation > button > span'));
  }

  public goToOrderResume(): promise.Promise<void> {
    return this.orderResumeButton.click();
  }
}
