import { ActionTypes, Action } from "./actionCreators";

interface State {
  rowList: any[];
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
