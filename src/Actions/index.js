// Adds item to basket
export function addItem(item) {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
}

// Adds new basket to receipt array
export function addBasket(basket) {
  return {
    type: "ADD_BASKET",
    payload: basket,
  };
}

// Clears basket object
export function clearBasket() {
  return {
    type: "CLEAR_BASKET",
  };
}

// Clears receipt
export function clearReceipt() {
  return {
    type: "CLEAR_RECEIPT",
  };
}
