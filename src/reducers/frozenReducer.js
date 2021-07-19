const seedData = [
  {
    food: "TV Dinners",
    quantity: 10,
  },
  {
    food: "Frozen Veggies",
    quantity: 22,
  },
  {
    food: "Frozen Pizzas",
    quantity: 14,
  },
];

const frozenReducer = (state = seedData, action) => {
  console.log("Redux reducer is running");
  console.log(action);

  if (action.type === "increaseFrozen") {
    console.log("increasing rozen item");
    const newState = [...state];
    newState[action.payload.id].quantity++;
    return newState;
  }

  if (action.type === "decreaseFrozen") {
    // console.log("increasing rozen item");

    const newState = [...state];
    newState[action.payload.id].quantity--;
    return newState;
  }

  if (action.type === "updateFrozen") {
    const newState = [...state];

    if (action.payload.operation === "+") {
      newState[action.payload.id].quantity++;
    } else if (action.payload.operation === "-") {
      newState[action.payload.id].quantity--;
    }

    return newState;
  }

  return state;
};

export default frozenReducer;
