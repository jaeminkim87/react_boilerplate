/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import * as colors from '../../Guidelines/Colors';

const cardStyle = css`
  display: block;
  border: 1px solid ${colors.borderColor};
  background-color: ${colors.whiteColor};
  cursor: default;

  .card-bottom {
    padding: 0.3125rem;
    box-sizing: border-box;
    .main-title {
      font-weight: bold;
    }
    .sub-title {
      font-size: 0.875rem;
    }
  }
`;

const sizes = {
  small: css`
    width: 7.5rem;
    margin-right: 0.625rem;
    .card-top {
      min-height: 5rem;
    }
  `,
  medium: css`
    width: 11.25rem;
    margin-right: 0.9375rem;
    .card-top {
      min-height: 7.5rem;
    }
  `,
  big: css`
    width: 13.13rem;
    margin-right: 1.5rem;
    .card-top {
      min-height: 8.75rem;
    }
  `,
};

interface CardProps {
  /** card 위쪽 배경 css */
  topBackground?: string;
  /** card 위쪽 배경 이미지 */
  topBackgroundImg?: string;
  /** card 위쪽 배경 css */
  bottomBackground?: string;
  /** card bottom title */
  bottomTitle: string;
  /** card bottom sub title */
  bottomSubTitle: string;
  /** card size를 설정합니다. */
  size: 'small' | 'medium' | 'big';
  /** card 너비를 설정합니다. */
  width?: string | number;
  /** card 비활성화 */
  disabled?: boolean;
  /** card 클릭 이벤트 */
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

function Card({
  topBackground,
  topBackgroundImg,
  bottomBackground,
  bottomTitle,
  bottomSubTitle,
  size,
  onClick,
}: CardProps): JSX.Element {
  let cardBottomTitle = bottomTitle;
  let cardBottomSubTitle = bottomSubTitle;
  if (size === 'small') {
    cardBottomSubTitle = bottomTitle;
    cardBottomTitle = bottomSubTitle;
  }

  return (
    <div className={'card'} css={[cardStyle, sizes[size]]} onClick={onClick}>
      <div className={'card-top'} css={{ backgroundColor: topBackground }}>
        {topBackgroundImg}
      </div>
      <div
        className={'card-bottom'}
        css={{ backgroundColor: bottomBackground }}
      >
        <p className={'main-title'}>{cardBottomTitle}</p>
        <p className={'sub-title'}>{cardBottomSubTitle}</p>
      </div>
    </div>
  );
}

Card.defaultProps = {
  size: 'big',
  bottomTitle: 'test',
};

export default Card;
