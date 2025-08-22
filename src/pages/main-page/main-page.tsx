import { useState } from 'react';
import { ReactHookForm } from '@/features/ui/react-hook-form/react-hook-form';
import { UncontrolledForm } from '@/features/ui/uncontrolled-form/uncontrolled';
import { Modal } from '@/shared/ui';

type FormType = 'controlled' | 'uncontrolled' | null;

export const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedForm, setSelectedForm] = useState<FormType>(null);

  const onClick = (form: FormType) => {
    setIsOpen(true);
    setSelectedForm(form);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="pd-base flex gap-3.5 text-amber-50">
      <button onClick={() => onClick('controlled')}>React hook form</button>
      <button onClick={() => onClick('uncontrolled')}>Uncontrolled form</button>
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
  );
};
