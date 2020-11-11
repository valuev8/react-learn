import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import Button, {ButtonProps} from '../shared/components/button/Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Button</Button>;

export const Primary = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  theme: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  theme: 'danger',
};

export const Solid = Template.bind({});
Solid.args = {
  theme: 'solid',
};
