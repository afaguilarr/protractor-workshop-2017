import { browser, element, by, ElementFinder } from 'protractor';

export class IFramePracticePage {

  private get iFrame(): ElementFinder {
    return element(by.id('IF1'));
  }

  public async iFrameHeight(newHeight): Promise<void> {
    await browser
    .executeScript(`document.getElementById('IF1').setAttribute('height', ${newHeight});`);
  }

  public async height(): Promise<number> {
    const iFrameHeight = await this.iFrame.getAttribute('height');
    return Number(iFrameHeight);
  }
}
