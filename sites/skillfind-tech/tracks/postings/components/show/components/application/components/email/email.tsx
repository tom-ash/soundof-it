import React from 'react';
import { TextInput } from '../../../../../../../../../../common/components/support/text-input-semanticize/text-input';
import { validateEmail } from './validators/validate-email';

export const Email = () => {
  return (
    <TextInput inputKey="email" required={true} validate={validateEmail} />
  );
};
