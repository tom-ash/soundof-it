import React, { useState } from 'react';
import { useTexts } from '../../../../../../../src copy/sites/shared/app/functions/store/use-texts';
import { DeleteModal } from '../../../../../../../../common/components/support/modals/delete/delete';
import { deleteApi } from '../../../../../../../src copy/sites/shared/app/functions/fetch-api/fetch-api';
import { changeUrl } from '../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';

export const Delete = () => {
  const { deleteButtonLabel } = useTexts();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="delete">
      <button onClick={() => setShowModal(true)}>{deleteButtonLabel}</button>
      {showModal && (
        <DeleteModal
          onCancel={() => setShowModal(false)}
          onConfirm={async () => {
            await deleteApi({ path: 'users' });

            changeUrl({ href: '/' });
          }}
        />
      )}
    </div>
  );
};
