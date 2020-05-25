const receipt = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return [...state, action.payload];
    case "GET_RECEIPT":
      return action.payload;
    default:
      return state;
  }
};

export default receipt;
