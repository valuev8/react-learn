import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import Logo from '../shared/components/logo/Logo';

export default {
  title: 'Logo',
  component: Logo,

} as Meta;

const Template: Story = () => <Logo />;

export const logo = Template.bind({});
