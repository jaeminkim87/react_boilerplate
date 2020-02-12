/** @jsx jsx*/
import React from 'react';
import { jsx } from '@emotion/core';
import Page from '../../Components/Page/Page';

export default {
  title: 'Documents|Getting Started',
  component: Page,
  parameters: {
    options: { isToolshown: false, showPanel: false },
  },
};

export const Accessibility = () => {
  return (
    <Page title={'Accessibility'} subTitle={''} className={'accessibility'} />
  );
};

Accessibility.story = {
  name: 'Accessibility',
};
