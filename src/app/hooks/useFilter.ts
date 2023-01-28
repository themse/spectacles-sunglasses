import { useState } from 'react';

export enum FilterField {
  COLOUR = 'Colour',
  SHAPE = 'Shape',
}

type DataReturn = {
  selectedColorList: Set<string>;
  selectedShapeList: Set<string>;

  onFilterSelect: (name: FilterField, value: string) => void;
};

export const useFilter = (): DataReturn => {
  const [selectedColorList, setSelectedColorList] = useState<Set<string>>(
    new Set()
  );
  const [selectedShapeList, setSelectedShapeList] = useState<Set<string>>(
    new Set()
  );

  const onFilterSelect = (name: FilterField, value: string): void => {
    if (name === FilterField.COLOUR) {
      const mutSelectedColorList = new Set(selectedColorList);

      mutSelectedColorList.has(value)
        ? mutSelectedColorList.delete(value)
        : mutSelectedColorList.add(value);

      setSelectedColorList(mutSelectedColorList);
    } else if (name === FilterField.SHAPE) {
      const mutSelectedShapeList = new Set(selectedShapeList);

      mutSelectedShapeList.has(value)
        ? mutSelectedShapeList.delete(value)
        : mutSelectedShapeList.add(value);

      setSelectedShapeList(mutSelectedShapeList);
    }
  };

  return { selectedColorList, selectedShapeList, onFilterSelect };
};
