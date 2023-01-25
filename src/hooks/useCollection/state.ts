export type CollectionItem = {
  id: number;
  name: string;
  category: string;
  sex: string;
  slug: string;
};

type State = {
  isLoading: boolean;
  err: string | null;

  collectionList?: CollectionItem[] | null;
};

export const initialState: State = {
  isLoading: false,
  err: null,
};

export enum ReducerActionKind {
  FETCH_COLLECTION_LIST,
  SUCCESS_COLLECTION_LIST,
  FAILED_COLLECTION_LIST,
}

type ReducerAction = {
  type: ReducerActionKind;
  payload?: CollectionItem[];
  err?: string;
};

export const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case ReducerActionKind.FETCH_COLLECTION_LIST: {
      return {
        ...state,
        collectionList: null,
        err: null,
        isLoading: true,
      };
    }
    case ReducerActionKind.SUCCESS_COLLECTION_LIST: {
      return {
        ...state,
        collectionList: action.payload,

        err: null,
        isLoading: false,
      };
    }
    case ReducerActionKind.FAILED_COLLECTION_LIST: {
      return {
        ...state,
        collectionList: null,
        isLoading: false,

        err: action.err ?? 'Something went wrong',
      };
    }

    default: {
      throw new Error(`Unexpected action type: ${action.type}`);
    }
  }
};
