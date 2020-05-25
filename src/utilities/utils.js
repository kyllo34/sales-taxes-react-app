// import taxBracket lookup from config.js
const { taxBracket, importTax } = require("./config");

// Declare function that accepts an item to determine the sales tax to be applied
export function calculateSalesTax(item) {
  // First I define the base itemTax to be whatever tax percentage is applicable based on its category
  let itemTaxPercent = taxBracket[item.category];
  // Second I check if the item is imported, if it is, add the import tax
  if (item.imported) itemTaxPercent += importTax;
  // I calculate the itemTax to be the rounded product of the tax percentage, item cost, and 20 divided by 100 and then 20
  // as per rounding rules for sales tax; n%, a shelf price of p contains (np/100 rounded up to the nearest 0.05) amount of sales tax.
  let itemTax = Math.ceil((itemTaxPercent * parseFloat(item.cost) * 20) / 100) / 20;
  return itemTax;
}

// Declare function that returns the summary object but with its values rounded to the 100s
// This function was created to account for rounding errors for numbers whose value cannot be represented exactly in binary
//  i.e. 14.99 + 1.5 = 16.490000000000002 => 16.49
export function round2Dec(summary) {
  // Defined roundedSummary to be copy of summary as to avoid mutation
  let roundedSummary = Object.keys(summary).reduce(
    // Iterate through both keys in the summary object and round their respective values to the nearest 100th place and returns a string
    // Use reduce method on object.keys iterator to iterate through keys and modify them and returning a new modified object
    // Initialize the spread of the summary object as the accumulator
    function(accumulator, property) {
      accumulator[property] = (
        Math.round(accumulator[property] * 100) / 100
      ).toFixed(2);
      return accumulator;
    },
    { ...summary }
  );

  return roundedSummary;
}