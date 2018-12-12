export enum ActionTypes {
  UPLOAD_DB_FILE = "UPLOAD_DB_FILE",
  ADD_DB_TO_STORE = "ADD_DB_TO_STORE"
}

export interface Action {
  type: ActionTypes;
  payload: any;
}

export function uploadDBFile(file: File) {
  return {
    type: ActionTypes.UPLOAD_DB_FILE,
    payload: {
      file
    }
  };
}

export function addDBToStore(row: any) {
  return {
    type: ActionTypes.ADD_DB_TO_STORE,
    payload: {
      row
    }
  };
}
