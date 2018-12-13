import { ActionTypes, Action } from "./actionCreators";
import { Row } from "./types";

export interface State {
  isLoadingDB: boolean;
  rowList: Row[];
}

const initialState: State = {
  isLoadingDB: false,
  rowList: []
};

export function reducer(state: State = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_ROWS_TO_STORE:
      return {
        ...state,
        rowList: [...state.rowList, ...payload.rows]
      };
    case ActionTypes.SET_IS_LOADING_DB:
      return {
        ...state,
        isLoadingDB: payload.isLoadingDB
      };
    default:
      return {
        ...state
      };
  }
}
