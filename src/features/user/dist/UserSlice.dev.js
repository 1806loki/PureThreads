"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectUserInfoStatus = exports.selectUserInfo = exports.selectUserOrders = exports.userSlice = exports.updateUserAsync = exports.fetchLoggedInUserAsync = exports.fetchLoggedInUserOrderAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _userAPI = require("./userAPI");

var initialState = {
  status: 'idle',
  userInfo: null // this info will be used in case of detailed user info, while auth will
  // only be used for loggedInUser id etc checks

};
var fetchLoggedInUserOrderAsync = (0, _toolkit.createAsyncThunk)('user/fetchLoggedInUserOrders', function _callee() {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _userAPI.fetchLoggedInUserOrders)());

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
exports.fetchLoggedInUserOrderAsync = fetchLoggedInUserOrderAsync;
var fetchLoggedInUserAsync = (0, _toolkit.createAsyncThunk)('user/fetchLoggedInUser', function _callee2() {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap((0, _userAPI.fetchLoggedInUser)());

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
exports.fetchLoggedInUserAsync = fetchLoggedInUserAsync;
var updateUserAsync = (0, _toolkit.createAsyncThunk)('user/updateUser', function _callee3(update) {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _userAPI.updateUser)(update));

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
exports.updateUserAsync = updateUserAsync;
var userSlice = (0, _toolkit.createSlice)({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchLoggedInUserOrderAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchLoggedInUserOrderAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.userInfo.orders = action.payload;
    }).addCase(updateUserAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(updateUserAsync.fulfilled, function (state, action) {
      state.status = 'idle'; // earlier there was loggedInUser variable in other slice

      state.userInfo = action.payload;
    }).addCase(fetchLoggedInUserAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchLoggedInUserAsync.fulfilled, function (state, action) {
      state.status = 'idle'; // this info can be different or more from logged-in User info

      state.userInfo = action.payload;
    });
  }
});
exports.userSlice = userSlice;

var selectUserOrders = function selectUserOrders(state) {
  return state.user.userInfo.orders;
};

exports.selectUserOrders = selectUserOrders;

var selectUserInfo = function selectUserInfo(state) {
  return state.user.userInfo;
};

exports.selectUserInfo = selectUserInfo;

var selectUserInfoStatus = function selectUserInfoStatus(state) {
  return state.user.status;
}; // export const { increment } = userSlice.actions;


exports.selectUserInfoStatus = selectUserInfoStatus;
var _default = userSlice.reducer;
exports["default"] = _default;