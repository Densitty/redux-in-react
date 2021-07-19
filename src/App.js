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
import FrozenDept from "./components/FrozenDept";
import ProduceDept from "./components/ProduceDept";
import MeatDept from "./components/MeatDept";
import NavBar from "./components/NavBar";
import Main from "./components/Main";

const theStore = createStore(rootReducer);

function App() {
  return (
    <Router>
      <Provider store={theStore}>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route path="/Main" component={Main} />
          <Route path="/frozen-dept" component={FrozenDept} />
          <Route path="/produce-dept" component={ProduceDept} />
          <Route path="/meat-dept" component={MeatDept} />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
