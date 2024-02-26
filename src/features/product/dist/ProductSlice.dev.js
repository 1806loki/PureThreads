"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectTotalItems = exports.selectProductListStatus = exports.selectProductById = exports.selectCategories = exports.selectBrands = exports.selectAllProducts = exports.clearSelectedProduct = exports.productSlice = exports.updateProductAsync = exports.createProductAsync = exports.fetchCategoriesAsync = exports.fetchBrandsAsync = exports.fetchProductsByFiltersAsync = exports.fetchProductByIdAsync = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _productAPI = require("./productAPI");

var initialState = {
  products: [],
  brands: [],
  categories: [],
  status: 'idle',
  totalItems: 0,
  selectedProduct: null
};
var fetchProductByIdAsync = (0, _toolkit.createAsyncThunk)('product/fetchProductById', function _callee(id) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _productAPI.fetchProductById)(id));

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
exports.fetchProductByIdAsync = fetchProductByIdAsync;
var fetchProductsByFiltersAsync = (0, _toolkit.createAsyncThunk)('product/fetchProductsByFilters', function _callee2(_ref) {
  var filter, sort, pagination, admin, response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          filter = _ref.filter, sort = _ref.sort, pagination = _ref.pagination, admin = _ref.admin;
          _context2.next = 3;
          return regeneratorRuntime.awrap((0, _productAPI.fetchProductsByFilters)(filter, sort, pagination, admin));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchProductsByFiltersAsync = fetchProductsByFiltersAsync;
var fetchBrandsAsync = (0, _toolkit.createAsyncThunk)('product/fetchBrands', function _callee3() {
  var response;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap((0, _productAPI.fetchBrands)());

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
exports.fetchBrandsAsync = fetchBrandsAsync;
var fetchCategoriesAsync = (0, _toolkit.createAsyncThunk)('product/fetchCategories', function _callee4() {
  var response;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap((0, _productAPI.fetchCategories)());

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
exports.fetchCategoriesAsync = fetchCategoriesAsync;
var createProductAsync = (0, _toolkit.createAsyncThunk)('product/create', function _callee5(product) {
  var response;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap((0, _productAPI.createProduct)(product));

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
exports.createProductAsync = createProductAsync;
var updateProductAsync = (0, _toolkit.createAsyncThunk)('product/update', function _callee6(update) {
  var response;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap((0, _productAPI.updateProduct)(update));

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
exports.updateProductAsync = updateProductAsync;
var productSlice = (0, _toolkit.createSlice)({
  name: 'product',
  initialState: initialState,
  reducers: {
    clearSelectedProduct: function clearSelectedProduct(state) {
      state.selectedProduct = null;
    }
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(fetchProductsByFiltersAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchProductsByFiltersAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.products = action.payload.products;
      state.totalItems = action.payload.totalItems;
    }).addCase(fetchBrandsAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchBrandsAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.brands = action.payload;
    }).addCase(fetchCategoriesAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchCategoriesAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.categories = action.payload;
    }).addCase(fetchProductByIdAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(fetchProductByIdAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.selectedProduct = action.payload;
    }).addCase(createProductAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(createProductAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      state.products.push(action.payload);
    }).addCase(updateProductAsync.pending, function (state) {
      state.status = 'loading';
    }).addCase(updateProductAsync.fulfilled, function (state, action) {
      state.status = 'idle';
      var index = state.products.findIndex(function (product) {
        return product.id === action.payload.id;
      });
      state.products[index] = action.payload;
      state.selectedProduct = action.payload;
    });
  }
});
exports.productSlice = productSlice;
var clearSelectedProduct = productSlice.actions.clearSelectedProduct;
exports.clearSelectedProduct = clearSelectedProduct;

var selectAllProducts = function selectAllProducts(state) {
  return state.product.products;
};

exports.selectAllProducts = selectAllProducts;

var selectBrands = function selectBrands(state) {
  return state.product.brands;
};

exports.selectBrands = selectBrands;

var selectCategories = function selectCategories(state) {
  return state.product.categories;
};

exports.selectCategories = selectCategories;

var selectProductById = function selectProductById(state) {
  return state.product.selectedProduct;
};

exports.selectProductById = selectProductById;

var selectProductListStatus = function selectProductListStatus(state) {
  return state.product.status;
};

exports.selectProductListStatus = selectProductListStatus;

var selectTotalItems = function selectTotalItems(state) {
  return state.product.totalItems;
};

exports.selectTotalItems = selectTotalItems;
var _default = productSlice.reducer;
exports["default"] = _default;