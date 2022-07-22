import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import MainTwo from "./MainTwo";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MainTwo />
  </Provider>
);
