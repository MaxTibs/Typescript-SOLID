# Payment gateway API

## Requirements
* REST API  - Customer - should be able to send payments using
* REST API  - Customer - should receive invoice before payment
* REST API  - Customer - should receive receipt in response of payment
* REST API  - Customer - should be able to remember its payment informations for the next purchases
* REST API  - Merchant - should be able to list the transactions history (who, when, how much - amount, what - invoice)
* REST API  - Merchant - should be able to list its customers
* UI        - Merchant - should be able to view the transactions history (who, when, how much - amount, what - invoice) through web browser
* UI        - Merchant - should be able to view its customers through web browser
* REST API  - Merchant - should be able to configure its preferred Payment gateway provider: Paypal, Braintree, Stripe, etc
* REST API  - Merchant - should be able to configure allowed payment methods (dynamically fetched from Payment gateway provider)