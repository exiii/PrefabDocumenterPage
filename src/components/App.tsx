import React from "react";
import { Provider } from "react-redux";
import store from "../lib/store";
import FileUploader from "./FileUploader";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Prefab</h1>
      </div>
      <FileUploader />
    </Provider>
  );
};

export default App;
