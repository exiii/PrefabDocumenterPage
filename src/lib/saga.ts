import { take, put, fork, call } from "redux-saga/effects";
import SQL from "sql.js";
import { ActionTypes } from "./actionCreators";
import { SagaIterator } from "redux-saga";

function getDBFromFile(file: File): Promise<SQL.Database> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = function() {
      const units = new Uint8Array(reader.result as ArrayBuffer);
      const db = new SQL.Database(units);
      resolve(db);
    };
    reader.readAsArrayBuffer(file);
  });
}

function* uploadDBFileSaga(): SagaIterator {
  const { payload } = yield take(ActionTypes.UPLOAD_DB_FILE);
  const { file } = payload;
  const db: SQL.Database = yield call(getDBFromFile, file);
  const stmt = db.prepare("select * from Document");
  stmt.getAsObject({
    $guid: 1,
    $filename: 2,
    $filepath: 3,
    $indentLevel: 4,
    $description: 5
  });
  stmt.bind({
    $guid: 1,
    $filename: 2,
    $filepath: 3,
    $indentLevel: 4,
    $description: 5
  });
  while (stmt.step()) {
    const row = stmt.getAsObject();
    yield put({
      type: ActionTypes.ADD_DB_TO_STORE,
      payload: {
        row
      }
    });
  }
}

export default function* rootSaga(): SagaIterator {
  fork(uploadDBFileSaga);
}
