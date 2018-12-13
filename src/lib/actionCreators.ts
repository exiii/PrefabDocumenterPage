import { Row } from "./types";

export enum ActionTypes {
  UPLOAD_DB_FILE = "UPLOAD_DB_FILE",
  ADD_ROWS_TO_STORE = "ADD_ROWS_TO_STORE",
  SET_IS_LOADING = "SET_IS_LOADING"
}

export interface Action {
  type: ActionTypes;
  payload: any;
}

export default {
  uploadDBFile(file: File) {
    return {
      type: ActionTypes.UPLOAD_DB_FILE,
      payload: {
        file
      }
    };
  },
  addDBToStore(rows: Row[]) {
    return {
      type: ActionTypes.ADD_ROWS_TO_STORE,
      payload: {
        rows
      }
    };
  },
  setIsLoading(isLoadingDB: boolean) {
    return {
      type: ActionTypes.SET_IS_LOADING,
      payload: {
        isLoadingDB
      }
    };
  }
};
