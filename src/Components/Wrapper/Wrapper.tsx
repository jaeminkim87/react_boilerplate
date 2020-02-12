/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

const WrapStyle = css`
  padding: 10px 20px;
`;

interface WrapperProps {
  /**
   * wrapper의 클래스명
   */
  className?: string;
  /**
   * Wrapper의 Width
   */
  width?: string | number;
  /** Wrapper 안의 내용 */
  children: React.ReactNode;
}

function Wrapper({ children, className, width }: WrapperProps): JSX.Element {
  return (
    <div className={className} css={[WrapStyle, { width }]}>
      {children}
    </div>
  );
}

export default Wrapper;
