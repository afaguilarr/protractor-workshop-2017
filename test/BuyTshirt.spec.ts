import { browser } from 'protractor';
import { MenuContentPage, AddressStepPage,
  BankPaymentPage, OrderResumePage, PaymentStepPage,
  ProductAddedModalPage, ProductDetailPage,
  ProductListPage, ShippingStepPage, SignInStepPage,
  SummaryStepPage } from '../src/page';

describe('Given I want to buy a t-shirt', () => {

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

  describe('When I open the webpage', () => {
    beforeAll(async() => {
      await browser.get(webpage);
    });

    describe('and I decide to buy a t-shirt', () => {
      beforeAll(async() => {
        await menuContentPage.goToTShirtMenu();
        await productListPage.goToTShirtDetail();
        await productDetailPage.goToTShirtModal();
        await productAddedModalPage.goToSummary();
        await summaryStepPage.goToSignIn();
      });

      describe('and I sign In', () => {
        beforeAll(async() => {
          await signInStepPage.sendMail(email);
          await signInStepPage.sendPassword(password);
          await signInStepPage.signIn();
        });

        describe('and I follow the payment process', () => {
          beforeAll(async() => {
            await addressStepPage.goToShipping();
            await shippingStepPage.conditionsAgree();
            await shippingStepPage.goToPayment();
            await paymentStepPage.goToBank();
            await bankPaymentPage.goToOrderResume();
          });

          it('then the t-shirt order should be completed', async () => {
            await expect(orderResumePage.order())
              .toBe('Your order on My Store is complete.');
          });
        });
      });
    });
  });
});
