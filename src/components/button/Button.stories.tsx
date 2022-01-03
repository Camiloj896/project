import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from './Button';

const styles = {
  width: '100%',
};

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => <div style={styles}><Button {...args} /></div>;

Template.args = {
    title: 'Button',
    position: 'start',
    handleClick: () => {alert('Click')},
    offcanvas: false,
    ChildComponent: () => <div>Child Component</div>
};