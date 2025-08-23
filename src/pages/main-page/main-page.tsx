import { useEffect, useState } from 'react';
import { ReactHookForm, UncontrolledForm } from '@/features/ui';
import { useFormStore } from '@/shared/model';
import { Modal } from '@/shared/ui';
import { Tile } from '@/widgets';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
      <div className="pd-base flex flex-wrap justify-around">
        <Tile data={controlledData} title="Controlled Form" />
        <Tile data={unControlledData} title="Uncontrolled Form" />
      </div>
    </>
  );
};
