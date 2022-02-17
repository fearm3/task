const initialState = {
  lastViews: [],
};

export const rootReducer = (state = initialState.lastViews, action) => {
  switch (action.type) {
    case "ADD_USER_ViEW":
      // console.log(action.payload);
      // console.log(state);
      if (state == null) {
        return [...state, action.payload];
      }
      let addedItem = state.find((c) => c.id === action.payload.id);
      // console.log(addedItem);
      if (addedItem) {
        return state;
      } else {
        const newState = [...state, action.payload].reverse().substr(0, 4);
        localStorage.setItem("lastView", JSON.stringify(newState));
        return newState;
      }
    case "GET_VIEWS":
      return action.payload;

    default: {
      return state;
    }
  }
};
