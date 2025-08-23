import { type FC } from 'react';
import type { StoredData } from '@/shared/model/store';
import { FormCard } from '@/shared/ui';

type TileProps = {
  data: StoredData[];
  title: string;
};

export const Tile: FC<TileProps> = ({ data, title }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <h3 className="text-center text-white">{title}</h3>
      {data && (
        <div className="flex flex-col gap-5">
          {data.map((cardData: StoredData, idx: number) => {
            return <FormCard cardData={cardData} key={idx} />;
          })}
        </div>
      )}
    </div>
  );
};
