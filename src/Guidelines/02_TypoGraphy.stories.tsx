/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';
import Page from '../Components/Page/Page';
import * as font from '../Guidelines/Fonts';

export default {
  title: 'Documents|Guidelines/Typography',
  Component: Page,
  parameters: {
    options: { isToolshown: false, showPanel: false },
  },
};

const typoWrapStyle = css`
  margin-bottom: 0.625rem;
  label {
    font-weight: bold;
  }
`;

export const Typography = (): JSX.Element => {
  return (
    <Page
      title={'Typography'}
      subTitle={'Typography 모음입니다.'}
      info={
        '프로젝트에서 사용하는 폰트 사이즈들 입니다. Root font size는 16px로 기준을 잡았습니다.'
      }
      className={'typography'}
    >
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h1>Heading 1</h1>
        <p>
          <label>font-size</label>: {font.h1Size}
        </p>
        <p>
          <label>line-height</label>: {font.h1LineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h2>Heading 2</h2>
        <p>
          <label>font-size</label>: {font.h2Size}
        </p>
        <p>
          <label>line-height</label>: {font.h2LineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h3>Heading 3</h3>
        <p>
          <label>font-size</label>: {font.h3Size}
        </p>
        <p>
          <label>line-height</label>: {font.defaultLineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h4>Heading 4</h4>
        <p>
          <label>font-size</label>: {font.h4Size}
        </p>
        <p>
          <label>line-height</label>: {font.defaultLineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h5>Heading 5</h5>
        <p>
          <label>font-size</label>: {font.h5Size}
        </p>
        <p>
          <label>line-height</label>: {font.defaultLineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <h6>Heading 6</h6>
        <p>
          <label>font-size</label>: {font.h6Size}
        </p>
        <p>
          <label>line-height</label>: {font.defaultLineHeight}
        </p>
      </div>
      <div className={'typo-wrap'} css={typoWrapStyle}>
        <p>p</p>
        <p>
          <label>font-size</label>: {font.pSize}
        </p>
        <p>
          <label>line-height</label>: {font.defaultLineHeight}
        </p>
      </div>
    </Page>
  );
};

Typography.story = {
  name: 'Typography',
};
