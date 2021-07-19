import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// redux stuff
// store - stores data (something like state)
import { createStore } from "redux";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";

// store manager => rootReducer
import rootReducer from "./reducers/rootReducer";

// components

import Weather from "./Weather";
import WarmOrNot from "./WarmOrNot";

const theStore = createStore(rootReducer);

function App() {
  return (
    <Router>
      <Provider store={theStore}>
        <div className="App">
          <WarmOrNot />
          <Weather />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
