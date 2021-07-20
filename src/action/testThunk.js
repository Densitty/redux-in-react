const testThunk = () => {
  return (dispatch, getState) => {
    setTimeout(() => {
      console.log("I waited 2 seconds");
      console.log(getState());
      dispatch({
        type: "testThunk",
      });
    }, 2000);
  };
};

export default testThunk;
