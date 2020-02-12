/** @jsx jsx*/
import React from 'react';
import { jsx, css } from '@emotion/core';
import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';

export default {
  title: 'Documents|Guidelines/Grid',
  Component: Page,
  parameters: {
    options: { isToolshown: false, showPanel: false },
  },
};

export const Grid = (): JSX.Element => {
  return (
    <Page
      title={'Grid'}
      subTitle={'Grid 설명입니다.'}
      info={
        '프로젝트 레이아웃을 만들때 쓰이는 Grid 정보입니다. Grid는 react-flexbox-grid를 사용합니다.'
      }
      className={'grid'}
    >
      <Button
        size={'medium'}
        onClick={() => {
          window.open(
            'http://roylee0704.github.io/react-flexbox-grid/',
            '_blank',
          );
        }}
      >
        React Flexbox Grid Link
      </Button>
    </Page>
  );
};

Grid.story = {
  name: 'Grid',
};
