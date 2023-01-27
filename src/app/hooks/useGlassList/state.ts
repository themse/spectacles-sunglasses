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

  totalAmount: number;
  chunkLength: number;
  glassList?: GlassItem[] | null;
};

export const initialState: State = {
  glassList: null,
  totalAmount: 0,
  chunkLength: 0,

  isLoading: false,
  err: null,
};

export enum ReducerActionKind {
  FETCH_GLASS_LIST,
  SUCCESS_GLASS_LIST,
  FAILED_GLASS_LIST,

  FETCH_MORE_GLASS_LIST,
}

type ReducerAction = {
  type: ReducerActionKind;
  payload?: { glassList: GlassItem[]; totalAmount: number };
  err?: string;
};

export const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case ReducerActionKind.FETCH_GLASS_LIST: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case ReducerActionKind.SUCCESS_GLASS_LIST: {
      const { glassList, totalAmount } = action.payload!;
      const updatedGlassListSet = new Set([
        ...(state.glassList ?? []),
        ...glassList,
      ]);

      return {
        ...state,
        glassList: [...updatedGlassListSet],
        totalAmount,
        chunkLength: updatedGlassListSet.size,

        err: null,
        isLoading: false,
      };
    }
    case ReducerActionKind.FAILED_GLASS_LIST: {
      return {
        ...state,
        ...initialState,

        err: action.err ?? 'Something went wrong',
      };
    }

    case ReducerActionKind.FETCH_MORE_GLASS_LIST: {
      return {
        ...state,

        isLoading: true,
      };
    }

    default: {
      throw new Error(`Unexpected action type: ${action.type}`);
    }
  }
};
