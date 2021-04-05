/**
 * Stakeholders:
 *  1. Merchant
 *      1.1. Wants to analyse transactions (history, status, etc.)
 *      1.2. Wants to select preferred GatewayProvider through which wire the money
 *  2. Customer
 *      2.1. Wants to buy product/service from merchant
 */

/**
 * Use a provider to process payments and notify interested parties
 */
export interface PaymentGatewayProxy {
  processUserPayment: () => void;
}

/**
 * Provide general API which can be implemented by different PaymentGateway
 */
export interface PaymentGatewayProvider {}

/**
 * Keeps track of transaction history and metadata
 */
export interface TransactionHistory {}

/**
 * Listen for new transaction or transaction update
 */
export interface TransactionListener {}
