const receipt = (state = [], action) => {
  switch (action.type) {
    case "ADD_BASKET":
      return [...state, action.payload];
    case "CLEAR_RECEIPT":
      return [];
    default:
      return state;
  }
};

export default receipt;
