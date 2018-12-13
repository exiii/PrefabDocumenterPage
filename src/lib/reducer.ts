import { ActionTypes, Action } from "./actionCreators";
import { Row } from "./types";

export interface State {
  rowList: Row[];
}

const initialState: State = {
  rowList: []
};

export function reducer(state: State = initialState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.ADD_DB_TO_STORE:
      return {
        ...state,
        rowList: [...state.rowList, payload.row]
      };
    default:
      return {
        ...state
      };
  }
}
