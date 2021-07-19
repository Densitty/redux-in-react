import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import meatItemUpdate from "../action/meatItemsUpdate";

const MeatDept = (props) => {
  const updateItem = (qtyChange, index) => {
    props.meatItemUpdate(qtyChange, index);
  };

  return (
    <div>
      <h3>The Meat department</h3>
      <h4>The meat store on has the following items</h4>
      <ul>
        {props.meatData.map((item, idx) => {
          return (
            <li key={idx}>
              <div>
                {item.food} - {item.quantity}
              </div>
              {/* <button type="button" onClick={() => increment(idx)}> */}
              <button type="button" onClick={() => updateItem(1, idx)}>
                Increase Item
              </button>
              {/* <button type="button" onClick={() => decrement(idx)}> */}
              <button type="button" onClick={() => updateItem(-1, idx)}>
                Reduce Item
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// class ProduceDept extends React.Component {
//   render() {
//     console.log(this.props.frozenData);
//     return <h1>The frozen food department</h1>;
//   }
// }

const mapStateToProps = (state) => {
  return {
    meatData: state.meat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      meatItemUpdate,
    },
    dispatch
  );
};

// the first function in connect take 2 props (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
