
import * as React from 'react';

import { Heading } from '../components/Typography/header';
import { Paragraph } from '../components/Typography/Paragraph';
import { Label } from '../components/Typography/Label';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Typography',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const AllHeadings: Story = {
  render: () => (
    <>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </>
  ),
};

export const ParagraphText: Story = {
  render: () => (
    <Paragraph>
      This is a paragraph. Typography components help ensure visual consistency and legibility.
    </Paragraph>
  ),
};

export const LabelText: Story = {
  render: () => <Label htmlFor="username">Username</Label>,
};