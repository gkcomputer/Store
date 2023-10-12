export const addToCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
};

export const filterDataHandler = (el) => {
  return (dispatch) => {
    dispatch({
      type: "FILTERED_DATA",
      payload: el,
    });
  };
};
