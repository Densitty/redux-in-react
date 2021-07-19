import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import frozenItemUpdate, {
  frozenItemIncrease,
  frozenItemDecrease,
} from "../action/frozenItemsUpdate";

const FrozenDept = (props) => {
  const increment = (id) => {
    props.frozenItemIncrease(id);
  };

  const decrement = (id) => {
    console.log(id);
    props.frozenItemDecrease(id);
  };

  const updateItem = (operation, id) => {
    props.frozenItemUpdate(operation, id);
  };

  return (
    <div>
      <h3>The frozen food department</h3>
      <h4>The frozen store has the following items available for sale</h4>
      <ul>
        {props.frozenData.map((item, idx) => {
          return (
            <li key={idx}>
              <div>
                {item.food} - {item.quantity}
              </div>
              {/* <button type="button" onClick={() => increment(idx)}> */}
              <button type="button" onClick={() => updateItem("+", idx)}>
                Increase Item
              </button>
              {/* <button type="button" onClick={() => decrement(idx)}> */}
              <button type="button" onClick={() => updateItem("-", idx)}>
                Reduce Item
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    frozenData: state.frozen,
  };
};

// the mapDispatchToProps ties our component to the dispatch;
// it takes 1 arg, dispatch, and returns bindActionCreators and we hand bindAction creators an object (where key is a local prop and value is a function that is dispatched when run )
// bindActionCreators takes 2 args (action creator and dispatch)
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      frozenItemUpdate,
      frozenItemDecrease,
      frozenItemIncrease,
    },
    dispatch
  );
};
// the first function in connect take 2 props (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
