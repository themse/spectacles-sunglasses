import { useQueryParam } from 'hooks/useQueryParam';

export enum FilterField {
  COLOUR = 'colour',
  SHAPE = 'shape',
}

const allowedFilterKeySet = new Set(Object.values(FilterField));

type DataReturn = {
  selectedColorSet: Set<string>;
  selectedShapeSet: Set<string>;

  onFilterSelect: (name: FilterField, values: string[]) => void;
};

export const useFilter = (): DataReturn => {
  const { params, setParams } = useQueryParam(allowedFilterKeySet);

  const selectedColorSet = new Set(params?.[FilterField.COLOUR] ?? []);
  const selectedShapeSet = new Set(params?.[FilterField.SHAPE] ?? []);

  const onFilterSelect = (name: FilterField, values: string[]): void => {
    setParams({ [name]: values });
  };

  return { selectedColorSet, selectedShapeSet, onFilterSelect };
};
