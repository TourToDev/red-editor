import "./styles/index.less";
import React from "react";
import { render } from "react-dom";
import App from "./views/App";
import { store } from "./store/store";
import { Provider } from "react-redux";
console.log('store')
console.log(store)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
