export type CollectionItem = {
  id: number;
  name: string;
  salesCategory: string;
  sex: string;
  slug: string;
};

type State = {
  isLoading: boolean;
  err: string | null;

  collection?: { [key: string]: CollectionItem[] } | null;
};

export const initialState: State = {
  isLoading: false,
  err: null,
};

export enum ReducerActionKind {
  REQUEST,
  SUCCESS,
  FAILURE,
}

type ReducerAction = {
  type: ReducerActionKind;
  payload?: { [key: string]: CollectionItem[] };
  err?: string;
};

export const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case ReducerActionKind.REQUEST: {
      return {
        ...state,
        collection: null,
        err: null,
        isLoading: true,
      };
    }
    case ReducerActionKind.SUCCESS: {
      return {
        ...state,
        collection: action.payload,

        err: null,
        isLoading: false,
      };
    }
    case ReducerActionKind.FAILURE: {
      return {
        ...state,
        collection: null,
        isLoading: false,

        err: action.err ?? 'Something went wrong',
      };
    }

    default: {
      throw new Error(`Unexpected action type: ${action.type}`);
    }
  }
};
