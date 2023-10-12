export const searchProducts = (event) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_PRODUCTS",
      payload: event,
    });
  };
};
