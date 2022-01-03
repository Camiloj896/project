import { render, screen, fireEvent } from '@testing-library/react'
import Button from './../../components/button/Button';
import ButtonI from './../../interfaces/ButtonI';

const MockProps: ButtonI = {
    title: 'button test',
    handleClick: jest.fn(),
}

test('Button Component renders appropriately', () => {
    const onClick = jest.fn();
    render(<Button title={MockProps.title} handleClick={onClick} />)
    const buttonElement = screen.getByText(MockProps.title);
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(buttonElement).toBeInTheDocument();
})