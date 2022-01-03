import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import LoadingData from './LoadingData';

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default {
  title: 'Components/LoadingData',
  component: LoadingData,
} as ComponentMeta<typeof LoadingData>;

export const Template: ComponentStory<typeof LoadingData> = (args) => <div style={styles}><LoadingData /></div>;