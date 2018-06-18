import { ElementFinder, promise, element, by } from 'protractor';

export class ShippingStepPage {
  private get agreeCheckbox(): ElementFinder {
    return element(by.id('cgv'));
  }

  private get paymentButton(): ElementFinder {
    return element(by.css('p > button > span'));
  }

  public conditionsAgree(): promise.Promise<void> {
    return this.agreeCheckbox.click();
  }

  public goToPayment(): promise.Promise<void> {
    return this.paymentButton.click();
  }
}
