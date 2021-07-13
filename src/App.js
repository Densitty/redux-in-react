import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

// store - stores data (something like state)
import { createStore } from "redux";
// import { DECREASE, INCREASE } from "./actions";
import reducer from "./reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";

// initial store
const initialStore = { cart: cartItems, total: 0, amount: 0 };

/* function reducer(state, action) {
  console.log({ state, action });
  if (action.type === DECREASE) {
    // state.count = state.count - 1 // never mutate state
    // Object.assign({}, state) is same as {...state}
    return {
      ...state, 
      count: state.count - 1,
    };
  }

  if (action.type === INCREASE) {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  if (action.type === "RESET") {
    return {
      ...state,
      count: 0,
    };
  }
  // (old) state is what a reducer must return
  return state;
} */

const store = createStore(
  reducer,
  /* initialStore, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// after store is initialized, create a dispatch method (send actions to the store)
// action (an object) - must have TYPE property to show which kind of action we want to undertake b ased of functionality of our app

// console.log(store.getState());
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
