import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Checkout } from '../src/component/Checkout';
import { DependenciesProvider } from '../src/contexts/dependencies';


describe('COMPONENT: Checkout', () => {
  it('should process payment for 100', async () => {
    render(<Checkout />, { wrapper: DependenciesProvider });
    const payment = screen.getByTestId('balance-display')
    expect(payment).toBeInTheDocument()
    expect(payment).toHaveTextContent('Balance: 0$')

    await waitFor(() => fireEvent.click(screen.getByText('Pay 100$')))
    expect(payment).toHaveTextContent('Balance: -100$')
  });
});