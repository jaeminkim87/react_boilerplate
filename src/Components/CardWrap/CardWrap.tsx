/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const cardWrapStyle = css`
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 1.875rem;
`;

interface CardWrapProps {
  /** CardWrap의 title */
  title?: string;
  /** CardWrap의 클래스 명*/
  className?: string;
  /** CardWrap안의 내용*/
  children: React.ReactNode;
}

function CardWrap({ title, children, className }: CardWrapProps): JSX.Element {
  return (
    <div>
      <h3>{title}</h3>
      <div className={className} css={[cardWrapStyle]}>
        {children}
      </div>
    </div>
  );
}

export default CardWrap;
