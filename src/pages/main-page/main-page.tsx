import { useState } from 'react';

import { ReactHookForm, UncontrolledForm } from '@/features/ui';
import { useFormStore } from '@/shared/model';
import { FormCard, Modal } from '@/shared/ui';

type FormType = 'controlled' | 'uncontrolled' | null;

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<FormType>(null);
  const { controlledData, unControlledData } = useFormStore();

  const onClick = (form: FormType) => {
    setIsOpen(true);
    setSelectedForm(form);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="pd-base flex gap-3.5 text-amber-50">
        <button onClick={() => onClick('controlled')}>React hook form</button>
        <button onClick={() => onClick('uncontrolled')}>
          Uncontrolled form
        </button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          children={
            selectedForm === 'controlled' ? (
              <ReactHookForm />
            ) : (
              <UncontrolledForm />
            )
          }
        />
      </div>

      <div className="pd-base flex justify-around">
        <div className="flex flex-col gap-3.5">
          <h3 className="text-center text-white">Controlled Form</h3>
          {controlledData && (
            <div className="flex flex-col gap-5">
              {controlledData.map((data, idx) => {
                return <FormCard cardData={data} key={idx} />;
              })}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3.5">
          <h3 className="text-center text-white">Uncontrolled Form</h3>
          {unControlledData && (
            <div className="flex flex-col gap-5">
              {unControlledData.map((data, idx) => {
                return <FormCard cardData={data} key={idx} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
