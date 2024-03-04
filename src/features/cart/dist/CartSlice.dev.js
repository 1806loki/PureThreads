"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectCartLoaded = exports.selectCartStatus = exports.selectItems = exports.cartSlice = exports.resetCartAsync = exports.deleteItemFromCartAsync = exports.updateCartAsync = exports.fetchItemsByUserIdAsync = exports.addToCartAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _cartAPI = require("./cartAPI");

var initialState = {
  status: 'idle',
  items: [],
  cartLoaded: false
};
var addToCartAsync = (0, _toolkit.createAsyncThunk)('cart/addToCart', function _callee(_ref) {
  var item, alert, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          item = _ref.item, alert = _ref.alert;
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _cartAPI.addToCart)(item));

        case 3:
          response = _context.sent;
          alert.success('Item Added to Cart');
          return _context.abrupt("return", response.data);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.addToCartAsync = addToCartAsync;
var fetchItemsByUserIdAsync = (0, _toolkit.createAsyncThunk)('cart/fetchItemsByUserId', function _callee2() {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _cartAPI.fetchItemsByUserId)());

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchItemsByUserIdAsync = fetchItemsByUserIdAsync;
var updateCartAsync = (0, _toolkit.createAsyncThunk)('cart/updateCart', function _callee3(update) {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _cartAPI.updateCart)(update));

        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.updateCartAsync = updateCartAsync;
var deleteItemFromCartAsync = (0, _toolkit.createAsyncThunk)('cart/deleteItemFromCart', function _callee4(itemId) {
  var response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _cartAPI.deleteItemFromCart)(itemId));

        case 2:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
});
exports.deleteItemFromCartAsync = deleteItemFromCartAsync;
var resetCartAsync = (0, _toolkit.createAsyncThunk)('cart/resetCart', function _callee5() {
  var response;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _cartAPI.resetCart)());

        case 2:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
exports.resetCartAsync = resetCartAsync;
var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(addToCartAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(addToCartAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.items.push(action.payload);
    }).addCase(fetchItemsByUserIdAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchItemsByUserIdAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.items = action.payload;
      state.cartLoaded = true;
    }).addCase(fetchItemsByUserIdAsync.rejected, function (state, action) {
      state.status = 'idle';
      state.cartLoaded = true;
    }).addCase(updateCartAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(updateCartAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      var index = state.items.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      state.items[index] = action.payload;
    }).addCase(deleteItemFromCartAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(deleteItemFromCartAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      var index = state.items.findIndex(function (item) {
        return item.id === action.payload.id;
      });
      state.items.splice(index, 1);
    }).addCase(resetCartAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(resetCartAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.items = [];
    });
  }
}); // export const { increment } = cartSlice.actions;

exports.cartSlice = cartSlice;

var selectItems = function selectItems(state) {
  return state.cart.items;
};

exports.selectItems = selectItems;

var selectCartStatus = function selectCartStatus(state) {
  return state.cart.status;
};

exports.selectCartStatus = selectCartStatus;

var selectCartLoaded = function selectCartLoaded(state) {
  return state.cart.cartLoaded;
};

exports.selectCartLoaded = selectCartLoaded;
var _default = cartSlice.reducer;
exports["default"] = _default;