import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Checkout } from '../src/component/Checkout';
import { DependenciesProvider } from '../src/contexts/dependencies';

const mockGetBalance = vi.fn()
const mockProcessPayment = vi.fn()
vi.mock('../src/contexts/dependencies', async (importOriginal) => {
  return {
    ...await importOriginal<typeof import('../src/contexts/dependencies')>(),
    // this will only affect "foo" outside of the original module
    useDependencies: () => ({
      paymentGateway: {
        getBalance: mockGetBalance,
        processPayment: mockProcessPayment
      }
    })
  }
})

describe('COMPONENT: Checkout', () => {
  it('should process payment for 100', async () => {
    mockGetBalance
      .mockResolvedValueOnce(500)
      .mockResolvedValueOnce(400)
    
    render(<Checkout />, { wrapper: DependenciesProvider });
    const payment = screen.getByTestId('balance-display')
    expect(payment).toBeInTheDocument()
    await waitFor(() => {
      expect(payment).toHaveTextContent('Balance: 500$')
    })

    fireEvent.click(screen.getByText('Pay 100$'))
    await waitFor(() => {
      expect(payment).toHaveTextContent('Balance: 400$')
    })
  });
});