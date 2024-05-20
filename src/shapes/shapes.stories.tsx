import type { Meta, StoryObj } from '@storybook/react';

import { Shapes } from './shapes';

const meta: Meta<typeof Shapes> = {
  component: Shapes,
};

export default meta;
type Story = StoryObj<typeof Shapes>;

export const Circles: Story = {
  args: {
    shapes: [{ type: 'circle', count: 3 }]
  },
};

export const Squares: Story = {
  args: {
    shapes: [{ type: 'square', count: 3 }]
  },
};

export const CirclesAndSquares: Story = {
  args: {
    shapes: [{ type: 'circle', count: 3 }, { type: 'square', count: 3 }]
  },
};

