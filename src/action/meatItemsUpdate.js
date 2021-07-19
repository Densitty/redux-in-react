// this is an action creator
// action creators return actions
// an action is an object that has at LEAST a property of type; the other property it may have is the payload
// this action creator is going to be handed over to the dispatch

export const meatItemIncrease = (id) => {
  console.log(id);
  return {
    type: "increaseMeat",
    payload: {
      id,
    },
  };
};

export const meatItemDecrease = (id) => {
  console.log(id);
  return {
    type: "decreaseMeat",
    payload: {
      id,
    },
  };
};

const meatItemUpdate = (qtyChange, id) => {
  return {
    type: "updateMeat",
    payload: {
      id,
      qtyChange,
    },
  };
};

export default meatItemUpdate;
