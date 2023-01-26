// TODO used simplified structure for demo, improve
export type GlassItem = {
  id: number;
  name: string;
  imgSrc: string;
  category: string;
  variant: string;
};

type State = {
  isLoading: boolean;
  err: string | null;

  glassList?: GlassItem[] | null;
};

export const initialState: State = {
  isLoading: false,
  err: null,
};

export enum ReducerActionKind {
  FETCH_GLASS_LIST,
  SUCCESS_GLASS_LIST,
  FAILED_GLASS_LIST,
}

type ReducerAction = {
  type: ReducerActionKind;
  payload?: GlassItem[];
  err?: string;
};

export const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case ReducerActionKind.FETCH_GLASS_LIST: {
      return {
        ...state,
        glassList: null,
        err: null,
        isLoading: true,
      };
    }
    case ReducerActionKind.SUCCESS_GLASS_LIST: {
      return {
        ...state,
        glassList: action.payload,

        err: null,
        isLoading: false,
      };
    }
    case ReducerActionKind.FAILED_GLASS_LIST: {
      return {
        ...state,
        glassList: null,
        isLoading: false,

        err: action.err ?? 'Something went wrong',
      };
    }

    default: {
      throw new Error(`Unexpected action type: ${action.type}`);
    }
  }
};
