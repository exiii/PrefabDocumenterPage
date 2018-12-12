import { take, put, fork } from "redux-saga/effects";
import { ActionTypes } from "./actionCreators";
import { SagaIterator } from "redux-saga";

function* uploadDBFileSaga(): SagaIterator {
  const { payload } = yield take(ActionTypes.UPLOAD_DB_FILE);
  const { file } = payload;
  // TODO: Convert file to db.
  const row = file;
  yield put({
    type: ActionTypes.ADD_DB_TO_STORE,
    payload: {
      row
    }
  });
}

export default function* rootSaga(): SagaIterator {
  fork(uploadDBFileSaga);
}
