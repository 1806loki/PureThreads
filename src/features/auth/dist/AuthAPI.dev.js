"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUser = createUser;
exports.loginUser = loginUser;
exports.checkAuth = checkAuth;
exports.signOut = signOut;
exports.resetPasswordRequest = resetPasswordRequest;
exports.resetPassword = resetPassword;

function createUser(userData) {
  return new Promise(function _callee(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('/auth/signup', {
              method: 'POST',
              body: JSON.stringify(userData),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context.sent;
            resolve({
              data: data
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  });
}

function loginUser(loginInfo) {
  return new Promise(function _callee2(resolve, reject) {
    var response, data, error;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch('/auth/login', {
              method: 'POST',
              body: JSON.stringify(loginInfo),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 3:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 11;
              break;
            }

            _context2.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context2.sent;
            resolve({
              data: data
            });
            _context2.next = 15;
            break;

          case 11:
            _context2.next = 13;
            return regeneratorRuntime.awrap(response.text());

          case 13:
            error = _context2.sent;
            reject(error);

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            reject(_context2.t0);

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 17]]);
  });
}

function checkAuth() {
  return new Promise(function _callee3(resolve, reject) {
    var response, data, error;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(fetch('/auth/check'));

          case 3:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 11;
              break;
            }

            _context3.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context3.sent;
            resolve({
              data: data
            });
            _context3.next = 15;
            break;

          case 11:
            _context3.next = 13;
            return regeneratorRuntime.awrap(response.text());

          case 13:
            error = _context3.sent;
            reject(error);

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            reject(_context3.t0);

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 17]]);
  });
}

function signOut(userId) {
  return new Promise(function _callee4(resolve, reject) {
    var response, error;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(fetch('/auth/logout'));

          case 3:
            response = _context4.sent;

            if (!response.ok) {
              _context4.next = 8;
              break;
            }

            resolve({
              data: 'success'
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.next = 10;
            return regeneratorRuntime.awrap(response.text());

          case 10:
            error = _context4.sent;
            reject(error);

          case 12:
            _context4.next = 18;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            reject(_context4.t0);

          case 18:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
}

function resetPasswordRequest(email) {
  return new Promise(function _callee5(resolve, reject) {
    var response, data, error;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(fetch('/auth/reset-password-request', {
              method: 'POST',
              body: JSON.stringify({
                email: email
              }),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 3:
            response = _context5.sent;

            if (!response.ok) {
              _context5.next = 11;
              break;
            }

            _context5.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            data = _context5.sent;
            resolve({
              data: data
            });
            _context5.next = 15;
            break;

          case 11:
            _context5.next = 13;
            return regeneratorRuntime.awrap(response.text());

          case 13:
            error = _context5.sent;
            reject(error);

          case 15:
            _context5.next = 20;
            break;

          case 17:
            _context5.prev = 17;
            _context5.t0 = _context5["catch"](0);
            reject(_context5.t0);

          case 20:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 17]]);
  });
}

function resetPassword(data) {
  return new Promise(function _callee6(resolve, reject) {
    var response, _data, error;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(fetch('/auth/reset-password', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 3:
            response = _context6.sent;

            if (!response.ok) {
              _context6.next = 11;
              break;
            }

            _context6.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            _data = _context6.sent;
            resolve({
              data: _data
            });
            _context6.next = 15;
            break;

          case 11:
            _context6.next = 13;
            return regeneratorRuntime.awrap(response.text());

          case 13:
            error = _context6.sent;
            reject(error);

          case 15:
            _context6.next = 20;
            break;

          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](0);
            reject(_context6.t0);

          case 20:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 17]]);
  });
}