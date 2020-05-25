const basket = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default basket;
