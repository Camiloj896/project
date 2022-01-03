import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import CriptoCard from './CriptoCard';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  title: 'Components/CriptoCard',
  component: CriptoCard,
} as ComponentMeta<typeof CriptoCard>;

export const Template: ComponentStory<typeof CriptoCard> = (args) => <div style={styles}><CriptoCard {...args} /></div>;

Template.args = {
    data: {
        id: 1,
        symbol: 'symbol',
        name: 'name',
        nameid: 'nameId',
        rank: 0,
        price_usd: 0,
        percent_change_24h: 0,
        percent_change_1h: 0,
        percent_change_7d: 0,
        market_cap_usd: 'market cap',
        volume24: 0,
        volume24a:  0,
        csupply: 'supply',
        price_btc: 0,
        tsupply: 'tsupply',
        msupply: 'msupply'
    }
};