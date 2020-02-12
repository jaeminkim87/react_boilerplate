/** @jsx jsx*/
import React from 'react';
import { jsx } from '@emotion/core';

import Page from '../Components/Page/Page';
import CardWrap from '../Components/CardWrap/CardWrap';
import Card from '../Components/Card/Card';
import * as color from '../Guidelines/Colors';

export default {
  title: 'Documents|Guidelines/Colors',
  Component: Page,
  parameters: {
    options: { isToolshown: false, showPanel: false },
  },
};

export const Colors = (): JSX.Element => {
  return (
    <Page
      title={'Colors'}
      subTitle={'Color들 모음입니다.'}
      info={'프로젝트에서 사용하는 컬러들의 색상값 입니다.'}
      className={'colors'}
    >
      <CardWrap title={'Main Color'}>
        <Card
          topBackground={`${color.mainColor}`}
          bottomSubTitle={`${color.mainColor}`}
          bottomTitle={'Main color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.mainHoverColor}`}
          bottomSubTitle={`${color.mainHoverColor}`}
          bottomTitle={'Main hover color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.mainDisabledColor}`}
          bottomSubTitle={`${color.mainDisabledColor}`}
          bottomTitle={'Main Disabled color'}
          size={'medium'}
        />
      </CardWrap>
      <CardWrap title={'Sub Color'}>
        <Card
          topBackground={`${color.subColor}`}
          bottomSubTitle={`${color.subColor}`}
          bottomTitle={'Sub color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.subHoverColor}`}
          bottomSubTitle={`${color.subHoverColor}`}
          bottomTitle={'Sub hover color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.subDisabledColor}`}
          bottomSubTitle={`${color.subDisabledColor}`}
          bottomTitle={'Sub disabled color'}
          size={'medium'}
        />
      </CardWrap>
      <CardWrap title={'Other Colors'}>
        <Card
          topBackground={`${color.fontColor}`}
          bottomSubTitle={`${color.fontColor}`}
          bottomTitle={'Font color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.borderColor}`}
          bottomSubTitle={`${color.borderColor}`}
          bottomTitle={'Border color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.dangerColor}`}
          bottomSubTitle={`${color.dangerColor}`}
          bottomTitle={'Danger color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.warningColor}`}
          bottomSubTitle={`${color.warningColor}`}
          bottomTitle={'Warning color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.successColor}`}
          bottomSubTitle={`${color.successColor}`}
          bottomTitle={'Success color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.infoColor}`}
          bottomSubTitle={`${color.infoColor}`}
          bottomTitle={'Info color'}
          size={'medium'}
        />
        <Card
          topBackground={`${color.darkColor}`}
          bottomSubTitle={`${color.darkColor}`}
          bottomTitle={'Dark color'}
          size={'medium'}
        />
      </CardWrap>
    </Page>
  );
};

Colors.story = {
  name: 'Colors',
};
