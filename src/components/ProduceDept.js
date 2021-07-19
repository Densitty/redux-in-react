import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import produceItemUpdate from "../action/produceItemsUpdate";

const ProduceDept = (props) => {
  const updateItem = (operation, id) => {
    props.produceItemUpdate(operation, id);
  };

  return (
    <div>
      <h3>The Meat Store</h3>
      <h4>The following items are available fresh from the farm</h4>
      <ul>
        {props.produceData.map((item, idx) => {
          return (
            <li key={idx}>
              <div>
                {item.food} - {item.quantity}
              </div>
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

// class FrozenDept extends React.Component {
//   render() {
//     console.log(this.props.frozenData);
//     return <h1>The frozen food department</h1>;
//   }
// }

const mapStateToProps = (state) => {
  return {
    produceData: state.produce,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      produceItemUpdate,
    },
    dispatch
  );
};
// the first function in connect take 2 props (mapStateToProps, mapDispatchToProps)
export default connect(mapStateToProps, mapDispatchToProps)(ProduceDept);
