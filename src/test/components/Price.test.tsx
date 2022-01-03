import { render, screen } from '@testing-library/react'
import Price from './../../components/cripto-card/price/Price';
import PriceI from './../../interfaces/PriceI';

const MockProps: PriceI = {
    amount: 1200,
    title: 'Price'
}

test('Price Component renders appropriately', () => {
  render(<Price amount={MockProps.amount} title={MockProps.title} />)
  expect(screen.getByText(MockProps.title)).toBeInTheDocument();
  expect(screen.getByText(MockProps.amount)).toBeInTheDocument();
})