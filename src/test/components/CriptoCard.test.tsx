import { render, screen } from '@testing-library/react'
import CriptoCard from '../../components/cripto-card/card/CriptoCard';
import CriptoCardI from './../../interfaces/CriptoCardI';
import { MemoryRouter } from "react-router-dom";

test('CriptoCard renders appropriately', () => {

    const MockProps: CriptoCardI = {
        id: '5',
        symbol: 'BTC',
        name: 'Bitcoin',
        price_usd: '1200',
        percent_change_24h: '5',
        percent_change_1h: '10',
        percent_change_7d: '-5',
        price_btc: '12546'
    }


    render(
        <MemoryRouter initialEntries={['/']} >
            <CriptoCard data={MockProps} />
        </MemoryRouter>,
    )

    const PercentageItemElements = screen.getAllByRole("PercentageItem");

    expect(PercentageItemElements[0]).toHaveTextContent('1h');
    expect(PercentageItemElements[0]).toHaveTextContent(`${MockProps.percent_change_1h}`);

    expect(PercentageItemElements[1]).toHaveTextContent('24h');
    expect(PercentageItemElements[1]).toHaveTextContent(`${MockProps.percent_change_24h}`);

    expect(PercentageItemElements[2]).toHaveTextContent('7d');
    expect(PercentageItemElements[2]).toHaveTextContent(`${MockProps.percent_change_7d}`);

    const PriceElements = screen.getAllByRole("ComponentPrice");

    expect(PriceElements[0]).toHaveTextContent('Price');
    expect(PriceElements[0]).toHaveTextContent(`${MockProps.price_btc}`);

    expect(PriceElements[1]).toHaveTextContent('Price USD');
    expect(PriceElements[1]).toHaveTextContent(`${MockProps.price_usd}`);

    expect(screen.getByText(MockProps.symbol)).toBeInTheDocument();
    expect(screen.getByText(MockProps.name)).toBeInTheDocument();
})