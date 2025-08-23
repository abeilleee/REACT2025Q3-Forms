import { type FC } from 'react';
import type { StoredData } from '@/shared/model/store';

type FormCardProps = {
  cardData: StoredData;
  className?: string;
};

export const FormCard: FC<FormCardProps> = ({ cardData }) => {
  const { name, age, email, password, gender, country, terms, image } =
    cardData;

  return (
    <div className="pd-base flex h-[580px] w-[350px] flex-col justify-center gap-2 rounded-lg bg-blue-900/50 p-2 text-amber-50 shadow-xl">
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
        <div className="h-[180px] w-[220px]">
          <img src={image} alt="image" className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};
