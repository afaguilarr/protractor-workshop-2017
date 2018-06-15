import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage,
  BankPaymentPage, OrderResumePage, PaymentStepPage,
  ProductAddedModalPage, ProductDetailPage,
  ProductListPage, ShippingStepPage, SignInStepPage,
  SummaryStepPage } from '../src/page';

describe('Buy a t-shirt', () => {

  const webpage = 'http://automationpractice.com/';
  const email = 'aperdomobo@gmail.com';
  const password = 'WorkshopProtractor';
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const orderResumePage: OrderResumePage = new OrderResumePage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productDetailPage: ProductDetailPage = new ProductDetailPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  beforeAll(async () => {
    await browser.get(webpage);
    await(browser.sleep(1000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(1000));
    await productListPage.goToTShirtDetail();
    await(browser.sleep(1000));
    await productDetailPage.goToTShirtModal();
    await(browser.sleep(1000));
    await productAddedModalPage.goToSummary();
    await(browser.sleep(1000));
    await summaryStepPage.goToSignIn();
    await(browser.sleep(1000));
    await signInStepPage.sendMail(email);
    await signInStepPage.sendPassword(password);
    await signInStepPage.signIn();
    await(browser.sleep(1000));
    await addressStepPage.goToShipping();
    await(browser.sleep(1000));
    await shippingStepPage.conditionsAgree();
    await(browser.sleep(1000));
    await shippingStepPage.goToPayment();
    await(browser.sleep(1000));
    await paymentStepPage.goToBank();
    await(browser.sleep(1000));
    await bankPaymentPage.goToOrderResume();
    await(browser.sleep(1000));
  });

  it('then should be bought a t-shirt', async () => {
    await expect(orderResumePage.order())
   .toBe('Your order on My Store is complete.');
  });
});
