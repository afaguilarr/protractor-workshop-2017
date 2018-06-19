import { ElementFinder, ElementArrayFinder, promise, element, by } from 'protractor';

export class ProductListPage {
  private get productContainerList(): ElementArrayFinder {
    return element.all(by.css('#center_column > ul > li'));
  }

  private findByProduct(productName): ElementFinder {
    return this.productContainerList
    .filter((elem) => {
      return elem.$('.product-name').getText()
      .then((text) => {
        return text === productName;
      });
    }).first();
  }

  public selectProduct(productName): promise.Promise<void> {
    return this.findByProduct(productName).$('img').click();
  }
}
