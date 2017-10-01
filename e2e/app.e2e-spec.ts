import { PizzaCalculatorPage } from './app.po';

describe('pizza-calculator App', () => {
  let page: PizzaCalculatorPage;

  beforeEach(() => {
    page = new PizzaCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
