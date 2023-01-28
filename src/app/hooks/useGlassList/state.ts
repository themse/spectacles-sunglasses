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
  REQUEST,
  SUCCESS,
  FAILURE,

  FETCH_MORE,
}

type ReducerAction = {
  type: ReducerActionKind;
  payload?: { glassList: GlassItem[]; totalAmount: number };
  err?: string;
};

export const reducer = (state: State, action: ReducerAction): State => {
  switch (action.type) {
    case ReducerActionKind.REQUEST: {
      return {
        ...state,
        ...initialState,
        isLoading: true,
      };
    }
    case ReducerActionKind.SUCCESS: {
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
    case ReducerActionKind.FAILURE: {
      return {
        ...state,
        ...initialState,

        err: action.err ?? 'Something went wrong',
      };
    }

    case ReducerActionKind.FETCH_MORE: {
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
