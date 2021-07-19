const clearInventory = (operation, id) => {
  console.log("Clears the inventory");
  return {
    type: "clearInventory",
    payload: {
      id,
      operation,
    },
  };
};

export default clearInventory;
