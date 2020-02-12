/** @jsx jsx */
import React from 'react';
import Wrapper from '../Wrapper/Wrapper';
import { jsx, css } from '@emotion/core';
import * as color from '../../Guidelines/Colors';
import * as font from '../../Guidelines/Fonts';

interface PageProps {
  /** Page 안의 내용 */
  children?: React.ReactNode;
  /** 내용을 둘러싸고 있는 wrap의 클래스 명 */
  className?: string;
  /** Page의 타이틀 */
  title: string;
  /** Page의 서브 타이틀 */
  subTitle?: string;
  /** Page 설명 */
  info?: string;
}

const PageStyle = css`
  width: 100%;
  box-sizing: border-box;
  color: ${color.fontColor};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    line-height: ${font.defaultLineHeight};
  }
  p {
    font-size: ${font.pSize};
    line-height: ${font.defaultLineHeight};
    margin: 0;
  }
  h1 {
    font-size: ${font.h1Size};
    line-height: ${font.h1LineHeight};
  }
  h2 {
    font-size: ${font.h2Size};
    line-height: ${font.h2LineHeight};
  }
  h3 {
    font-size: ${font.h3Size};
  }
  h4 {
    font-size: ${font.h4Size};
  }
  h5 {
    font-size: ${font.h5Size};
  }
  h6 {
    font-size: ${font.h6Size};
  }
  .page-info {
    margin-bottom: 1.25rem;
  }
`;

function Page({
  children,
  className,
  title,
  subTitle,
  info,
}: PageProps): JSX.Element {
  return (
    <div css={[PageStyle]}>
      <Wrapper className={className}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <p className={'page-info'}>{info}</p>
        {children}
      </Wrapper>
    </div>
  );
}

export default Page;
