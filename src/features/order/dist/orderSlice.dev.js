"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectStatus = exports.selectTotalOrders = exports.selectOrders = exports.selectCurrentOrder = exports.resetOrder = exports.orderSlice = exports.fetchAllOrdersAsync = exports.updateOrderAsync = exports.createOrderAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _orderAPI = require("./orderAPI");

var initialState = {
  orders: [],
  status: 'idle',
  currentOrder: null,
  totalOrders: 0
}; //we may need more info of current order

var createOrderAsync = (0, _toolkit.createAsyncThunk)('order/createOrder', function _callee(order) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _orderAPI.createOrder)(order));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.createOrderAsync = createOrderAsync;
var updateOrderAsync = (0, _toolkit.createAsyncThunk)('order/updateOrder', function _callee2(order) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _orderAPI.updateOrder)(order));

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
exports.updateOrderAsync = updateOrderAsync;
var fetchAllOrdersAsync = (0, _toolkit.createAsyncThunk)('order/fetchAllOrders', function _callee3(_ref) {
  var sort, pagination, response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          sort = _ref.sort, pagination = _ref.pagination;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _orderAPI.fetchAllOrders)(sort, pagination));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
});
exports.fetchAllOrdersAsync = fetchAllOrdersAsync;
var orderSlice = (0, _toolkit.createSlice)({
  name: 'order',
  initialState: initialState,
  reducers: {
    resetOrder: function resetOrder(state) {
      state.currentOrder = null;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(createOrderAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(createOrderAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.orders.push(action.payload);
      state.currentOrder = action.payload;
    }).addCase(fetchAllOrdersAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchAllOrdersAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.orders = action.payload.orders;
      state.totalOrders = action.payload.totalOrders;
    }).addCase(updateOrderAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(updateOrderAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      var index = state.orders.findIndex(function (order) {
        return order.id === action.payload.id;
      });
      state.orders[index] = action.payload;
    });
  }
});
exports.orderSlice = orderSlice;
var resetOrder = orderSlice.actions.resetOrder;
exports.resetOrder = resetOrder;

var selectCurrentOrder = function selectCurrentOrder(state) {
  return state.order.currentOrder;
};

exports.selectCurrentOrder = selectCurrentOrder;

var selectOrders = function selectOrders(state) {
  return state.order.orders;
};

exports.selectOrders = selectOrders;

var selectTotalOrders = function selectTotalOrders(state) {
  return state.order.totalOrders;
};

exports.selectTotalOrders = selectTotalOrders;

var selectStatus = function selectStatus(state) {
  return state.order.status;
};

exports.selectStatus = selectStatus;
var _default = orderSlice.reducer;
exports["default"] = _default;