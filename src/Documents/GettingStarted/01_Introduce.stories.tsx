/** @jsx jsx */
import { jsx } from '@emotion/core';

import Page from '../../Components/Page/Page';

export default {
  title: 'Documents|Getting Started',
  component: Page,
  parameters: {
    options: { isToolshown: false, showPanel: false },
  },
};

export const Introduce = (): JSX.Element => {
  return (
    <Page
      title={'Introduction'}
      subTitle={'Components '}
      info={'공통적으로 쓰일 Components에 대한 story book입니다.'}
      className={'introduction'}
    />
  );
};

Introduce.story = {
  name: 'Introduction',
};
