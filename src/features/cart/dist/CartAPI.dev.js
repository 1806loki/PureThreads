"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToCart = addToCart;
exports.fetchItemsByUserId = fetchItemsByUserId;
exports.updateCart = updateCart;
exports.deleteItemFromCart = deleteItemFromCart;
exports.resetCart = resetCart;

function addToCart(item) {
  return new Promise(function _callee(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('/cart', {
              method: 'POST',
              body: JSON.stringify(item),
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

function fetchItemsByUserId() {
  return new Promise(function _callee2(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch('/cart'));

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context2.sent;
            resolve({
              data: data
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
}

function updateCart(update) {
  return new Promise(function _callee3(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(fetch('/cart/' + update.id, {
              method: 'PATCH',
              body: JSON.stringify(update),
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context3.sent;
            resolve({
              data: data
            });

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}

function deleteItemFromCart(itemId) {
  return new Promise(function _callee4(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(fetch('/cart/' + itemId, {
              method: 'DELETE',
              headers: {
                'content-type': 'application/json'
              }
            }));

          case 2:
            response = _context4.sent;
            _context4.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context4.sent;
            resolve({
              data: {
                id: itemId
              }
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
}

function resetCart() {
  // get all items of user's cart - and then delete each
  return new Promise(function _callee5(resolve) {
    var response, items, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(fetchItemsByUserId());

          case 2:
            response = _context5.sent;
            items = response.data;
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context5.prev = 7;
            _iterator = items[Symbol.iterator]();

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context5.next = 16;
              break;
            }

            item = _step.value;
            _context5.next = 13;
            return regeneratorRuntime.awrap(deleteItemFromCart(item.id));

          case 13:
            _iteratorNormalCompletion = true;
            _context5.next = 9;
            break;

          case 16:
            _context5.next = 22;
            break;

          case 18:
            _context5.prev = 18;
            _context5.t0 = _context5["catch"](7);
            _didIteratorError = true;
            _iteratorError = _context5.t0;

          case 22:
            _context5.prev = 22;
            _context5.prev = 23;

            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }

          case 25:
            _context5.prev = 25;

            if (!_didIteratorError) {
              _context5.next = 28;
              break;
            }

            throw _iteratorError;

          case 28:
            return _context5.finish(25);

          case 29:
            return _context5.finish(22);

          case 30:
            resolve({
              status: 'success'
            });

          case 31:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[7, 18, 22, 30], [23,, 25, 29]]);
  });
}