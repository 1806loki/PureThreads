"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchProductById = fetchProductById;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.fetchProductsByFilters = fetchProductsByFilters;
exports.fetchCategories = fetchCategories;
exports.fetchBrands = fetchBrands;

function fetchProductById(id) {
  return new Promise(function _callee(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetch('/products/' + id));

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

function createProduct(product) {
  return new Promise(function _callee2(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetch('/products/', {
              method: 'POST',
              body: JSON.stringify(product),
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

function updateProduct(update) {
  return new Promise(function _callee3(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(fetch('/products/' + update.id, {
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

function fetchProductsByFilters(filter, sort, pagination, admin) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}
  // pagination = {_page:1,_limit=10}
  var queryString = '';

  for (var key in filter) {
    var categoryValues = filter[key];

    if (categoryValues.length) {
      queryString += "".concat(key, "=").concat(categoryValues, "&");
    }
  }

  for (var _key in sort) {
    queryString += "".concat(_key, "=").concat(sort[_key], "&");
  }

  for (var _key2 in pagination) {
    queryString += "".concat(_key2, "=").concat(pagination[_key2], "&");
  }

  if (admin) {
    queryString += "admin=true";
  }

  return new Promise(function _callee4(resolve) {
    var response, data, totalItems;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(fetch('/products?' + queryString));

          case 2:
            response = _context4.sent;
            _context4.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context4.sent;
            _context4.next = 8;
            return regeneratorRuntime.awrap(response.headers.get('X-Total-Count'));

          case 8:
            totalItems = _context4.sent;
            resolve({
              data: {
                products: data,
                totalItems: +totalItems
              }
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
}

function fetchCategories() {
  return new Promise(function _callee5(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(fetch('/categories'));

          case 2:
            response = _context5.sent;
            _context5.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context5.sent;
            resolve({
              data: data
            });

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
}

function fetchBrands() {
  return new Promise(function _callee6(resolve) {
    var response, data;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(fetch('/brands'));

          case 2:
            response = _context6.sent;
            _context6.next = 5;
            return regeneratorRuntime.awrap(response.json());

          case 5:
            data = _context6.sent;
            resolve({
              data: data
            });

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    });
  });
}