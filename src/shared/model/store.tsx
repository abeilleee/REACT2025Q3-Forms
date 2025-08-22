import { create } from 'zustand';
import { countries, type FormValues } from '@/features/lib';

interface Store {
  controlledData: FormValues[];
  unControlledData: FormValues[];
  countries: string[];
}

interface Actions {
  setControlledData: (data: FormValues) => void;
  setUncontrolledData: (data: FormValues) => void;
}

export const useFormStore = create<Store & Actions>((set) => ({
  controlledData: [],
  unControlledData: [],
  countries: countries,

  setControlledData: (data: FormValues) =>
    set((state) => ({
      controlledData: [...state.controlledData, data],
    })),

  setUncontrolledData: (data: FormValues) =>
    set((state) => ({
      unControlledData: [...state.controlledData, data],
    })),
}));
