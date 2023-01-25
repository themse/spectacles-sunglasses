export type SalesCollectionItem = {
  id: number;
  name: string;
  category: string;
  sex: string;
  slug: string;
};

export type SalesCollectionState = {
  salesCollectionList: SalesCollectionItem[];
  isLoading: boolean;
};
