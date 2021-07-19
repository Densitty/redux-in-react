import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import clearInventory from "../action/storeUpdate";

const Main = (props) => {
  const clearInventoryAction = () => {
    // if there needs to be more functionalities
    props.clearInventory();
  };
  console.log(props.frozenData);
  const frozenQuantity = props.frozenData.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);
  const produceQuantity = props.produceData.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);
  const meatQuantity = props.meatData.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);

  return (
    <div>
      <h2>Frozen Department has - {frozenQuantity} items in total</h2>
      <h2>Produce Department has - {produceQuantity} items in total </h2>
      <h2>Meat Department has - {meatQuantity} items in total </h2>
      <button onClick={props.clearInventory}>clear all Inventory</button>
      {/* <button onClick={clearInventoryAction}>clear all Inventory</button> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    frozenData: state.frozen,
    produceData: state.produce,
    meatData: state.meat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      clearInventory,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
