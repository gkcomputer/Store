import mockData from "../../services/wines_project_api.json";
export const productsApi_action = () => {
  return async (dispatch) => {
    dispatch({
      type: "FETCHAPI_ACTION_LOADING",
    });
    try {
      const apiData = mockData.map((item) => {
        return { ...item, counter: 0 };
      });

      dispatch({
        type: "FETCHAPI_ACTION_SUCCESS",
        payload: apiData,
      });
    } catch (error) {
      console.log("my error", error);
      dispatch({
        type: "FETCHAPI_ACTION_ERROR",
        payload: error,
      });
    }
  };
};
