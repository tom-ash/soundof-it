import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const MyPostings = () => {
  const linkProps = {
    linkKey: 'user/postings/index',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
