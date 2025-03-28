import { useCallback, useEffect, useState } from 'react'
import { useDependencies } from '../contexts/dependencies'

export const Checkout = () => {
  const { paymentGateway } = useDependencies()
  const [balance, setBalance] = useState(0);

  const getBalance = useCallback(async () => {
    const balance = await paymentGateway.getBalance()
    setBalance(balance)
  }, [paymentGateway])

  const onPaymentClick = useCallback(() => {
    paymentGateway.processPayment(100)
    getBalance()
  }, [paymentGateway])

  useEffect(() => {
    getBalance()
  }, [getBalance])

  return (
    <div>
      <h2>Checkout component</h2>
      <span data-testid="balance-display">Balance: {balance}$</span>
      <br />
      <button onClick={getBalance}>Refresh balance</button>
      <br />
      <button onClick={onPaymentClick}>Pay 100$</button>
    </div>
  )
}
