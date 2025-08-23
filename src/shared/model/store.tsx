import { create } from 'zustand';
import { countries, type FormValues } from '@/features/lib';

export type StoredData = Omit<FormValues, 'image'> & { image: string };

interface Store {
  controlledData: StoredData[];
  unControlledData: StoredData[];
  countries: string[];
}

interface Actions {
  setControlledData: (data: StoredData) => void;
  setUncontrolledData: (data: StoredData) => void;
}

export const useFormStore = create<Store & Actions>((set) => ({
  controlledData: [],
  unControlledData: [],
  countries: countries,

  setControlledData: (data: StoredData) =>
    set((state) => ({
      controlledData: [...state.controlledData, data],
    })),

  setUncontrolledData: (data: StoredData) =>
    set((state) => ({
      unControlledData: [...state.controlledData, data],
    })),
}));
