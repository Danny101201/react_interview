import { PaymentGateway } from "./payment-gateway";

export class InMemoryPaymentGateway implements PaymentGateway {
  private balance: number = 0
  processPayment(amount: number): Promise<void> {
    this.balance -= amount
    return Promise.resolve()
  }
  getBalance(): Promise<number> {
    return Promise.resolve(this.balance)
  }
}