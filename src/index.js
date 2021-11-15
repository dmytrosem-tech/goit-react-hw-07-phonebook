import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    {/* <PersistGate persistor={persistor} loading={null}> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </PersistGate> */}
  </React.StrictMode>,
  document.getElementById("root")
);
