import { create } from "zustand";

interface BearState {
  selectedTypes: string[];
  addtypes: (newType: string) => void;
  removeType: (typeToRemove: string) => void;
}

const typesStore = create<BearState>((set) => ({
  selectedTypes: [],

  addtypes: (newType: string) => {
    set((state) => ({
      selectedTypes: [...state.selectedTypes, newType],
    }));
  },

  removeType: (typeToRemove: string) => {
    set((state) => ({
      selectedTypes: state.selectedTypes.filter(
        (type) => type !== typeToRemove
      ),
    }));
  },
}));

export default typesStore;
