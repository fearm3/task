export const addUserView = (payload) => {
  return {
    type: "ADD_USER_ViEW",
    payload,
  };
};

export const getView = (payload) => {
  return {
    type: "GET_VIEWS",
    payload,
  };
};

export const addUserViews = (payload) => {
  return (dispatch) => {
    dispatch(addUserView(payload));
  };
};

export const getViews = () => {
  return (dispatch) => {
    const data = JSON.parse(localStorage.getItem("lastView"));
    console.log(data);

    dispatch(getView(data));
  };
};
