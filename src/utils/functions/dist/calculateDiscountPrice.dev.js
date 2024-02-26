"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDiscountPrice = calculateDiscountPrice;

function calculateDiscountPrice(originalPrice, discountPercentage) {
  var discountAmount = originalPrice * discountPercentage / 100;
  var discountPrice = originalPrice - discountAmount;
  return discountPrice.toFixed(2);
}