import { ElementFinder, promise, element, by } from 'protractor';

export class ProductAddedModalPage {
  private get summaryButton(): ElementFinder {
    return element(by
      .css('[style*="display: block;"] .button-container > a'));
  }

  public goToSummary(): promise.Promise<void> {
    return this.summaryButton.click();
  }
}
