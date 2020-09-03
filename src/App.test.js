import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import unregister from "./registerServiceWorker";
import ErrorBoundary from "./components/ErrorBoundary";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

import { Provider } from "react-redux";
import store from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./config/firebase";
import firebase from "firebase/app";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <HashRouter basename="VirtualLearning">
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </HashRouter>
      </ReactReduxFirebaseProvider>
    </Provider>,
    div
  );
});
