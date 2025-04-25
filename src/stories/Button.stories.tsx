

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button'; 


type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};
