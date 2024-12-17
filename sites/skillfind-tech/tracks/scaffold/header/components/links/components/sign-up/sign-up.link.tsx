import React from 'react';
import { DeprecatedLink } from '../../../../../../../../../common/components/support/deprecated-link/deprecated-link';

export const SignUpLink = () => {
  const linkProps = {
    linkKey: 'user/new/form',
    customClassNames: 'link',
  };

  return <DeprecatedLink {...linkProps} />;
};
