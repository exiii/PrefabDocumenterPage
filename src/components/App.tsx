import React from "react";
import { Provider } from "react-redux";
import store from "../lib/store";
import FileUploader from "./FileUploader";
import FileInfoList from "./FileInfoList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Prefab</h1>
      </div>
      <FileUploader />
      <FileInfoList />
    </Provider>
  );
};

export default App;
