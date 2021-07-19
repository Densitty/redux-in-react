// this is an action creator
// action creators return actions
// an action is an object that has at LEAST a property of type; the other property it may have is the payload
// this action creator is going to be handed over to the dispatch

export const frozenItemIncrease = (id) => {
  console.log(id);
  return {
    type: "increaseFrozen",
    payload: {
      id,
    },
  };
};

export const frozenItemDecrease = (id) => {
  console.log(id);
  return {
    type: "decreaseFrozen",
    payload: {
      id,
    },
  };
};

const frozenItemUpdate = (operation, id) => {
  return {
    type: "updateFrozen",
    payload: {
      id,
      operation,
    },
  };
};

export default frozenItemUpdate;
