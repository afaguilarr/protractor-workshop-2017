import { ElementFinder, promise, element, by } from 'protractor';

export class ProductListPage {
  private get tShirtDetail(): ElementFinder {
    return element(by
      .css('a.product_img_link > img'));
  }

  public goToTShirtDetail(): promise.Promise<void> {
    return this.tShirtDetail.click();
  }
}
