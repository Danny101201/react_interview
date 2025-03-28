
import { createContext, PropsWithChildren, useContext, useMemo } from "react";
import { PaymentGateway } from "../gateways/payment-gateway";
import { InMemoryPaymentGateway } from "../gateways/in-memory-payment-gateway";

export type Dependencies = {
  paymentGateway: PaymentGateway;
}

const DependenciesContext = createContext<Dependencies | null>(null)

const DependenciesProvider = ({ children }: PropsWithChildren) => {
  const value = useMemo<Dependencies>(() => {
    const paymentGateway = new InMemoryPaymentGateway()
    return {
      paymentGateway
    }
  }, [])
  return (
    <DependenciesContext.Provider value={value}>{children}</DependenciesContext.Provider>
  )
}
const useDependencies = () => {
  const dependencies = useContext(DependenciesContext)
  if (!dependencies) {
    throw new Error('Dependencies not found')
  }
  return dependencies
}
export { DependenciesProvider, useDependencies }