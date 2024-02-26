"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _productSlice = _interopRequireDefault(require("../features/product/productSlice"));

var _authSlice = _interopRequireDefault(require("../features/auth/authSlice"));

var _cartSlice = _interopRequireDefault(require("../features/cart/cartSlice"));

var _orderSlice = _interopRequireDefault(require("../features/order/orderSlice"));

var _userSlice = _interopRequireDefault(require("../features/user/userSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    product: _productSlice["default"],
    auth: _authSlice["default"],
    cart: _cartSlice["default"],
    order: _orderSlice["default"],
    user: _userSlice["default"]
  }
});
exports.store = store;