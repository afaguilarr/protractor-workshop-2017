import { browser, Config } from 'protractor';
import { reporter }   from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/**/*.spec.js'],
  noGlobals: true,
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  onPrepare: () => {
    browser.manage().timeouts().implicitlyWait(0);
    browser.ignoreSynchronization = true;
    reporter();
  }
};
