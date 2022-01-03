import { ComponentStory, ComponentMeta } from '@storybook/react';

import PercentageItem from './PercentageItem';

const styles = {
  width: '10%',
  margin: '0 auto'
};

export default {
  title: 'Components/PercentageItem',
  component: PercentageItem,
} as ComponentMeta<typeof PercentageItem>;

export const Template: ComponentStory<typeof PercentageItem> = (args) => <div style={styles}><PercentageItem {...args} /></div>;

Template.args = {
    title: 'test',
    value: 0,
};