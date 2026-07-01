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
