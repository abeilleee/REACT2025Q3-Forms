import { type FC } from 'react';
import type { FormValues } from '@/features/lib';

type FormCardProps = {
  cardData: FormValues;
  className?: string;
};

export const FormCard: FC<FormCardProps> = ({ cardData }) => {
  const { name, age, email, password, gender, country, terms } = cardData;

  return (
    <div className="pd-base flex h-[300px] w-[350px] flex-col justify-center gap-2 rounded-lg bg-blue-900/50 p-2.5 text-amber-50 shadow-xl">
      <div>
        <span>Name: </span>
        <span>{name}</span>
      </div>

      <div>
        <span>Age: </span>
        <span>{age}</span>
      </div>

      <div>
        <span>Email: </span>
        <span>{email}</span>
      </div>

      <div>
        <span>Password: </span>
        <span>{password}</span>
      </div>

      <div>
        <span>Gender: </span>
        <span>{gender}</span>
      </div>

      <div>
        <span>Country: </span>
        <span>{country}</span>
      </div>

      <div>
        <span>T&C agreement: </span>
        <span>{terms && 'true'}</span>
      </div>

      <div>
        <span>Image: </span>
        <span>image</span>
      </div>
    </div>
  );
};
