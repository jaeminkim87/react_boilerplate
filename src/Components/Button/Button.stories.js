/** @jsx jsx */
import Button from './Button';
import { jsx } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs, withA11y],
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'big'], 'small');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary',
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');
  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      width={width}
      onClick={action('onClick')}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: 'Default',
};
