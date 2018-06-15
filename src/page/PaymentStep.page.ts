import { ElementFinder, promise, element, by } from 'protractor';

export class PaymentStepPage {
  private get bankButton(): ElementFinder {
    return element(by
      .css('#HOOK_PAYMENT > div:nth-child(1) > div > p > a'));
  }

  public goToBank(): promise.Promise<void> {
    return this.bankButton.click();
  }
}
