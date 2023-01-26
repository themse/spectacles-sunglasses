export type SalesCollectionItem = {
  id: number;
  name: string;
  salesCategory: string;
  sex: string;
  slug: string;
};

export type SalesCollectionState = {
  salesCollection: { [key: string]: SalesCollectionItem[] };
  isLoading: boolean;
};
