import { ComponentStory, ComponentMeta } from '@storybook/react';

import Price from './Price';

export default {
  title: 'Components/Price',
  component: Price,
} as ComponentMeta<typeof Price>;

export const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

Template.args = {
    amount: 0,
    title: 'price'
};