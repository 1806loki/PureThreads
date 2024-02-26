export function calculateDiscountPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  const discountPrice = originalPrice - discountAmount;
  return discountPrice.toFixed(2);
}
