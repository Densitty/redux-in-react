const seedData = [
  {
    food: "lettuce",
    quantity: 14,
  },
  {
    food: "turnips",
    quantity: 11,
  },
  {
    food: "apples",
    quantity: 34,
  },
  {
    food: "cillantro",
    quantity: 135,
  },
];

const produceReducer = (state = seedData, action) => {
  console.log("Produce reducer is running");
  console.log(action);
  const newState = [...state];

  switch (action.type) {
    case "updateProduce":
      if (action.payload.operation === "+") {
        newState[action.payload.id].quantity++;
      } else if (action.payload.operation === "-") {
        newState[action.payload.id].quantity--;
      }
      return newState;

    case "clearInventory":
      newState.forEach((item, i) => {
        item.quantity = 0;
      });
      return newState;

    default:
      return state;
  }
};

export default produceReducer;