import { element, by, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderText(): ElementFinder {
    return element(by.css('#center_column > div > p > strong'));
  }

  public order(): promise.Promise<string> {
    return this.orderText.getText();
  }
}
