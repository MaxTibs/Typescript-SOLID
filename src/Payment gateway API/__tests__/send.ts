test('Send money to John Doe with Braintree', () => {
  const paymentGateway = new PaymentGateway();
  paymentGateway.setProvider(braintreeProvider);

  const amount = 1000;
  const user = 'John Doe';
  const result = paymentGateway.send(amount);

  expect(result.status).toBe(PAYMENT_STATUS.SUCCESS);
});
