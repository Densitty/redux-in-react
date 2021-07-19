const seedData = [
  {
    food: "chicken breast",
    quantity: 14,
  },
  {
    food: "bacon",
    quantity: 11,
  },
  {
    food: "mahi mahi",
    quantity: 34,
  },
  {
    food: "salmon",
    quantity: 135,
  },
];

const meatReducer = (state = seedData, action) => {
  console.log("Redux Meat reducer is running");
  console.log(action);

  if (action.type === "updateMeat") {
    const newState = [...state];

    newState[action.payload.id].quantity += action.payload.qtyChange;

    return newState;
  }

  return state;
};

export default meatReducer;
