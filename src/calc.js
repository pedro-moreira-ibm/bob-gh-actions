export function applyDiscount(price, discountPercent) {
  if (!price) {
    return 0;
  }

  const finalPrice = price - (price * discountPercent / 100);
  return finalPrice;
}

export function divideTotal(total, people) {
  return total / people;
}

// Applies a tax rate to a price and returns the total including tax.
// taxRate is expected as a percentage (e.g. 20 for 20%).
export function applyTax(price, taxRate) {
  const tax = price * taxRate;
  return price + tax;
}

// Returns the discounted price and then applies tax on top.
export function applyDiscountThenTax(price, discountPercent, taxRate) {
  const discounted = applyDiscount(price, discountPercent);
  const total = applyTax(discounted, taxRate);
  return total
}

// Splits a bill among people and calculates each person's share after tax.
export function splitBillWithTax(total, people, taxRate) {
  const totalWithTax = applyTax(total, taxRate);
  const share = totalWithTax / people;
  return share;
}

// Calculates the percentage change between two values.
export function percentageChange(oldVal, newVal) {
  return (newVal - oldVal) / oldVal * 100;
}
