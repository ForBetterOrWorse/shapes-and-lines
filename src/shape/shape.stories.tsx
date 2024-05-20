import type { Meta, StoryObj } from '@storybook/react';

import { Shape } from './shape';

const meta: Meta<typeof Shape> = {
  component: Shape,
};

export default meta;
type Story = StoryObj<typeof Shape>;

export const Circle: Story = {
  args: {
    type: 'circle'
  },
};

export const Square: Story = {
  args: {
    type: 'square'
  },
};