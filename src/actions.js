export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";

/* an action creator */
// the essence of an action creator is to return a proper action with a proper type, i.e an action pertaining to the right action type
export const removeItem = (id) => {
  console.log(id);
  return { type: REMOVE, payload: { id } };
};

/* another action creator, if we want to implement it */
export const increase = () => {
  return {};
};
