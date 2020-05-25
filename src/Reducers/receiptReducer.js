const receipt = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return action.payload.items.length !== 0 ? [...state, action.payload]: [...state];
    case "CLEAR_RECEIPT":
      return [];
    default:
      return state;
  }
};

export default receipt;
