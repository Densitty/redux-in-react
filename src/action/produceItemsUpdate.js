const frozenItemUpdate = (operation, id) => {
  return {
    type: "updateProduce",
    payload: {
      id,
      operation,
    },
  };
};

export default frozenItemUpdate;
