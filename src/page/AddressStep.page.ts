import { element, by, ElementFinder, promise } from 'protractor';

export class AddressStepPage {

  private get shippingButton(): ElementFinder {
    return element(by.css('#center_column > form > p > button > span'));
  }

  public goToShipping(): promise.Promise<void> {
    return this.shippingButton.click();
  }
}
