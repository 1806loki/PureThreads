"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectPasswordReset = exports.selectMailSent = exports.selectUserChecked = exports.selectError = exports.selectLoggedInUser = exports.authSlice = exports.signOutAsync = exports.resetPasswordAsync = exports.resetPasswordRequestAsync = exports.checkAuthAsync = exports.loginUserAsync = exports.createUserAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _authAPI = require("./authAPI");

var initialState = {
  loggedInUserToken: null,
  status: "idle",
  error: null,
  userChecked: false,
  mailSent: false,
  passwordReset: false
};
var createUserAsync = (0, _toolkit.createAsyncThunk)("user/createUser", function _callee(userData) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _authAPI.createUser)(userData));

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
exports.createUserAsync = createUserAsync;
var loginUserAsync = (0, _toolkit.createAsyncThunk)("user/loginUser", function _callee2(loginInfo, _ref) {
  var rejectWithValue, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          rejectWithValue = _ref.rejectWithValue;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap((0, _authAPI.loginUser)(loginInfo));

        case 4:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          return _context2.abrupt("return", rejectWithValue(_context2.t0));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
exports.loginUserAsync = loginUserAsync;
var checkAuthAsync = (0, _toolkit.createAsyncThunk)("user/checkAuth", function _callee3() {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap((0, _authAPI.checkAuth)());

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
exports.checkAuthAsync = checkAuthAsync;
var resetPasswordRequestAsync = (0, _toolkit.createAsyncThunk)("user/resetPasswordRequest", function _callee4(email, _ref2) {
  var rejectWithValue, response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          rejectWithValue = _ref2.rejectWithValue;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap((0, _authAPI.resetPasswordRequest)(email));

        case 4:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          return _context4.abrupt("return", rejectWithValue(_context4.t0));

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
exports.resetPasswordRequestAsync = resetPasswordRequestAsync;
var resetPasswordAsync = (0, _toolkit.createAsyncThunk)("user/resetPassword", function _callee5(data, _ref3) {
  var rejectWithValue, response;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          rejectWithValue = _ref3.rejectWithValue;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap((0, _authAPI.resetPassword)(data));

        case 4:
          response = _context5.sent;
          console.log(response);
          return _context5.abrupt("return", response.data);

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          console.log(_context5.t0);
          return _context5.abrupt("return", rejectWithValue(_context5.t0));

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 9]]);
});
exports.resetPasswordAsync = resetPasswordAsync;
var signOutAsync = (0, _toolkit.createAsyncThunk)("user/signOut", function _callee6() {
  var response;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _authAPI.signOut)());

        case 2:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
});
exports.signOutAsync = signOutAsync;
var authSlice = (0, _toolkit.createSlice)({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder.addCase(createUserAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(createUserAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.loggedInUserToken = action.payload;
    }).addCase(loginUserAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(loginUserAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.loggedInUserToken = action.payload;
    }).addCase(loginUserAsync.rejected, function (state, action) {
      state.status = "idle";
      state.error = action.payload;
    }).addCase(signOutAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(signOutAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.loggedInUserToken = null;
    }).addCase(checkAuthAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(checkAuthAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.loggedInUserToken = action.payload;
      state.userChecked = true;
    }).addCase(checkAuthAsync.rejected, function (state, action) {
      state.status = "idle";
      state.userChecked = true;
    }).addCase(resetPasswordRequestAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(resetPasswordRequestAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.mailSent = true;
    }).addCase(resetPasswordAsync.pending, function (state) {
      state.status = "loading";
    }).addCase(resetPasswordAsync.fulfilled, function (state, action) {
      state.status = "idle";
      state.passwordReset = true;
    }).addCase(resetPasswordAsync.rejected, function (state, action) {
      state.status = "idle";
      state.error = action.payload;
    });
  }
});
exports.authSlice = authSlice;

var selectLoggedInUser = function selectLoggedInUser(state) {
  return state.auth.loggedInUserToken;
};

exports.selectLoggedInUser = selectLoggedInUser;

var selectError = function selectError(state) {
  return state.auth.error;
};

exports.selectError = selectError;

var selectUserChecked = function selectUserChecked(state) {
  return state.auth.userChecked;
};

exports.selectUserChecked = selectUserChecked;

var selectMailSent = function selectMailSent(state) {
  return state.auth.mailSent;
};

exports.selectMailSent = selectMailSent;

var selectPasswordReset = function selectPasswordReset(state) {
  return state.auth.passwordReset;
}; // export const { } = authSlice.actions;


exports.selectPasswordReset = selectPasswordReset;
var _default = authSlice.reducer;
exports["default"] = _default;