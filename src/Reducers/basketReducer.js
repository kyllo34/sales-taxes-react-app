import { calculateSalesTax, round2Dec } from "../utilities/utils";

const basket = (
  state = { items: [], summary: { salesTax: 0, total: 0 } },
  action
) => {
  switch (action.type) {
    case "ADD_ITEM":
      // Define itemTax to be the calculated sales tax multiplied by the item quantity
      let itemTax =
        calculateSalesTax(action.payload) * parseFloat(action.payload.quantity);
      // Define itemCost to be the original cost plus tax
      let itemCost = parseFloat(action.payload.cost) + itemTax;
      // Create a copy of the summary object to avoid mutation
      let newSummary = { ...state.summary };
      // Set sales tax equal to itself plus the new item's tax
      newSummary.salesTax = parseFloat(newSummary.salesTax) + itemTax;
      // Set total equal to itself plus the new item's cost multiplied by its quantity
      newSummary.total =
        parseFloat(newSummary.total) +
        itemCost * parseFloat(action.payload.quantity);
      // Define newItem to be the string of the quantity, import state, description, and cost of the item
      let newItem = `${action.payload.quantity} ${
        action.payload.imported ? "imported" : ""
      } ${action.payload.description}: $${itemCost.toFixed(2)}`;
      return {
        items: [...state.items, newItem],
        summary: round2Dec(newSummary),
      };
    case "CLEAR_BASKET":
      return { items: [], summary: { salesTax: 0, total: 0 } };
    default:
      return state;
  }
};

export default basket;
