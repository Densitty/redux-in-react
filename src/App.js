import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// redux stuff
// store - stores data (something like state)
import { createStore, applyMiddleware } from "redux";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import reduxThunk from "redux-thunk";

// store manager => rootReducer
import rootReducer from "./reducers/rootReducer";

// components

import Weather from "./Weather";
import WarmOrNot from "./WarmOrNot";

const theStore = applyMiddleware(reduxPromise, reduxThunk)(createStore)(
  rootReducer
);

function App() {
  return (
    // <Router>
    <Provider store={theStore}>
      <div className="App">
        <WarmOrNot />
        <Weather />
      </div>
    </Provider>
    // </Router>
  );
}

export default App;
