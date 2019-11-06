import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import history from "../helpers/history";

import APIMiddleware from "../middleware/API";
import reducers from "../reducers";

function ReduxDevToolsMiddleware() {
  const ext = "__REDUX_DEVTOOLS_EXTENSION__";
  return window[ext] && window[ext]();
}

export default function configureStore(preloadedState = {}) {
  if (ReduxDevToolsMiddleware()) {
    return createStore(
      reducers(history),
      preloadedState,
      compose(
        applyMiddleware(thunk, APIMiddleware, routerMiddleware(history)),
        ReduxDevToolsMiddleware()
      )
    );
  } else {
    return createStore(
      reducers(history),
      preloadedState,
      compose(applyMiddleware(thunk, APIMiddleware, routerMiddleware(history)))
    );
  }
}
