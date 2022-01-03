import { render, screen } from '@testing-library/react'
import PercentageItem from './../../components/cripto-card/percentage-item/PercentageItem';
import PercentageItemI from './../../interfaces/PercentageItemI';

const MockProps: PercentageItemI = {
    title: 'Price',
    value: 1200
} 

test('PercentageItem Component renders appropriately', () => {
  render(<PercentageItem title={MockProps.title} value={MockProps.value} />)
  expect(screen.getByText(MockProps.title)).toBeInTheDocument();
  expect(screen.getByText(MockProps.value)).toBeInTheDocument();
})