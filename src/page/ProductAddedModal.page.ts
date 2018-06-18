import { browser, protractor, ElementFinder, element, by } from 'protractor';
const { ExpectedConditions } = protractor;

export class ProductAddedModalPage {
  private get summaryButton(): ElementFinder {
    return element(by
      .css('[style*="display: block;"] .button-container > a'));
  }

  public async goToSummary(): Promise<void> {
    const isClickable = await ExpectedConditions.elementToBeClickable(this.summaryButton);
    await browser.wait(isClickable, 3000);
    return this.summaryButton.click();
  }
}
