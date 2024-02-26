"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = createOrder;
exports.updateOrder = updateOrder;
exports.fetchAllOrders = fetchAllOrders;

function createOrder(order) {
  return new Promise(function _callee(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('/orders', {
              method: 'POST',
              body: JSON.stringify(order),
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

function updateOrder(order) {
  return new Promise(function _callee2(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch('/orders/' + order.id, {
              method: 'PATCH',
              body: JSON.stringify(order),
              headers: {
                'content-type': 'application/json'
              }
            }));

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

function fetchAllOrders(sort, pagination) {
  var queryString = '';

  for (var key in sort) {
    queryString += "".concat(key, "=").concat(sort[key], "&");
  }

  for (var _key in pagination) {
    queryString += "".concat(_key, "=").concat(pagination[_key], "&");
  }

  return new Promise(function _callee3(resolve) {
    var response, data, totalOrders;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(fetch('/orders?' + queryString));

          case 2:
            response = _context3.sent;
            _context3.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context3.sent;
            _context3.next = 8;
            return regeneratorRuntime.awrap(response.headers.get('X-Total-Count'));

          case 8:
            totalOrders = _context3.sent;
            resolve({
              data: {
                orders: data,
                totalOrders: +totalOrders
              }
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  });
}