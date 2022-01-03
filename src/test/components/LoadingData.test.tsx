import { render, screen } from '@testing-library/react'
import LoadingData from '../../components/loading-data/LoadingData';

test('LoadingData renders appropriately', () => {
  render(<LoadingData />)
  expect(screen.getByText(/Loading Data/i)).toBeInTheDocument()
})