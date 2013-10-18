(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define('matrix-utilities', [], factory);
    }
    else {
        root.matrix-utilities = factory();
    }
}(this, function() {
(function() {
  var util;

  util = {
    multiply: function(one, two) {
      var j, k, l, result, row, size, sum, value, _i, _j, _len, _len1;
      if (one[0].length !== two.length) {
        throw new Error('Matrix 1\'s row count should equal matrix 2\'s column count');
      }
      size = one[0].length;
      result = [];
      for (j = _i = 0, _len = two.length; _i < _len; j = ++_i) {
        row = two[j];
        result[j] = [];
        for (k = _j = 0, _len1 = row.length; _j < _len1; k = ++_j) {
          value = row[k];
          l = size;
          sum = 0;
          while (l--) {
            sum += one[j][l] * two[l][k];
          }
          result[j][k] = sum;
        }
      }
      return result;
    },
    flip: function(matrix) {
      var j, k, result, row, value, _i, _j, _len, _len1;
      result = [];
      for (j = _i = 0, _len = matrix.length; _i < _len; j = ++_i) {
        row = matrix[j];
        for (k = _j = 0, _len1 = row.length; _j < _len1; k = ++_j) {
          value = row[k];
          (result[k] || (result[k] = []))[j] = value;
        }
      }
      return result;
    },
    to2d: function(matrix) {
      return [[matrix[0][0] || 1, matrix[0][1] || 0, matrix[0][3] || 0], [matrix[1][0] || 0, matrix[1][1] || 1, matrix[1][3] || 0]];
    },
    to3d: function(matrix) {
      return [[matrix[0][0] || 1, matrix[0][1] || 0, 0, matrix[0][2] || 0], [matrix[1][0] || 0, matrix[1][1] || 1, 0, matrix[1][2] || 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    },
    Identity: function() {
      return [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
    }
  };

}).call(this);

    return matrix-utilities;
}));
