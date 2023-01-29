import { useState } from 'react';

export enum FilterField {
  COLOUR = 'Colour',
  SHAPE = 'Shape',
}

type DataReturn = {
  selectedColorSet: Set<string>;
  selectedShapeSet: Set<string>;

  onFilterSelect: (name: FilterField, values: string[]) => void;
};

export const useFilter = (): DataReturn => {
  const [selectedColorSet, setSelectedColorSet] = useState<Set<string>>(
    new Set()
  );
  const [selectedShapeSet, setSelectedShapeSet] = useState<Set<string>>(
    new Set()
  );

  const onFilterSelect = (name: FilterField, values: string[]): void => {
    switch (name) {
      case FilterField.COLOUR: {
        setSelectedColorSet(new Set(values));

        break;
      }
      case FilterField.SHAPE: {
        setSelectedShapeSet(new Set(values));
        break;
      }
      default: {
        // ignore unnecessary keys
        break;
      }
    }
  };

  return { selectedColorSet, selectedShapeSet, onFilterSelect };
};
