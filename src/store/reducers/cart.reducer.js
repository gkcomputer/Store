const initialState = {
  selectedItems: [],
  searchInput: "",
  filteredData: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        selectedItems: action.payload,
      };
    case "SEARCH_PRODUCTS":
      return {
        ...state,
        searchInput: action.payload,
      };
    case "FILTERED_DATA": {
      return {
        ...state,
        filteredData: action.payload,
      };
    }
    default:
      return state;
  }
};
