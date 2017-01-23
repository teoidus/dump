// Mapping class?
ArrayCube = {
  apply: function(toSquares, fromSquares) {
    var result = [];
    for (var i = 0; i < toSquares.length; i++) {
      result.push(fromSquares[toSquares[i]]);
    }
    return result;
  },

  inverse: function(a) {
    var result = new Array(a.length);
    for (var i = 0; i < a.length; i++) {
      result[a[i]] = i;
    }
    return result;
  },

  double: function(a) {
    return ArrayCube.composite([a, a]);
  },

  composite: function(transforms) {
    var result = [];
    for (var i = 0; i < transforms[0].length; i++) {
      result.push(i); // identity
    }
    for (var i = 0; i < transforms.length; i++) {
      result = ArrayCube.apply(transforms[i], result);
    }
    return result;
  },

  mappings: {
    I: [
      0, 1, 2, 3, 4, 5, 6, 7, 8,
      9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31, 32, 33, 34, 35,
      36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52, 53
    ],
    U: [
      6, 3, 0, 7, 4, 1, 8, 5, 2,
      18, 19, 20, 12, 13, 14, 15, 16, 17,
      27, 28, 29, 21, 22, 23, 24, 25, 26,
      36, 37, 38, 30, 31, 32, 33, 34, 35,
      9, 10, 11, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52, 53
    ],
    x: [
      18, 19, 20, 21, 22, 23, 24, 25, 26,
      11, 14, 17, 10, 13, 16, 9, 12, 15, // 9, 10, 11, 12, 13, 14, 15, 16, 17,
      45, 46, 47, 48, 49, 50, 51, 52, 53, // 18, 19, 20, 21, 22, 23, 24, 25, 26,
      33, 30, 27, 34, 31, 28, 35, 32, 29, // 27, 28, 29, 30, 31, 32, 33, 34, 35,
      8, 7, 6, 5, 4, 3, 2, 1, 0, // 36, 37, 38, 39, 40, 41, 42, 43, 44,
      44, 43, 42, 41, 40, 39, 38, 37, 36 // 45, 46, 47, 48, 49, 50, 51, 52, 53
    ],
    y: [
      6, 3, 0, 7, 4, 1, 8, 5, 2,
      18, 19, 20, 21, 22, 23, 24, 25, 26,
      27, 28, 29, 30, 31, 32, 33, 34, 35,
      36, 37, 38, 39, 40, 41, 42, 43, 44,
      9, 10, 11, 12, 13, 14, 15, 16, 17,
      47, 50, 53, 46, 49, 52, 45, 48, 51, // 45, 46, 47, 48, 49, 50, 51, 52, 53
    ]
  },
  moveMaps: {}
}

with (ArrayCube) with (ArrayCube.mappings) {
  ArrayCube.mappings.z = ArrayCube.composite([x, y, inverse(x)]); // z = x y x'
  ArrayCube.mappings.L = ArrayCube.composite([z, U, inverse(z)]);
  ArrayCube.mappings.F = ArrayCube.composite([x, U, inverse(x)]);
  ArrayCube.mappings.R = ArrayCube.composite([inverse(z), U, z]);
  ArrayCube.mappings.B = ArrayCube.composite([inverse(x), U, x]);
  ArrayCube.mappings.D = ArrayCube.composite([double(x), U, double(x)]);
  ArrayCube.mappings.M = ArrayCube.composite([inverse(x), inverse(L), R]); // M = x' L' R
  ArrayCube.mappings.E = ArrayCube.composite([inverse(y), U, inverse(D)]); // E = y' U D'
  ArrayCube.mappings.S = ArrayCube.composite([z, inverse(F), B]); // S = z F' B
}

ArrayCube.moveMaps.distribute = function(filter, rotations) {
  var result = [];
  for (var i = 0; i < filter.length; i++) {
    if (filter[i] != 0)
      result.push(rotations[filter[i]-1])
    else result.push({ axis: 0, angle: 0 });
  }
  return result;
};

ArrayCube.moveMaps.filterU = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0
];
ArrayCube.moveMaps.filterM = [
  0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0,
  0, 1, 0, 0, 1, 0, 0, 1, 0
];
ArrayCube.moveMaps.filterAll = [
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1
]
with (ArrayCube) with (ArrayCube.moveMaps) {
  ArrayCube.moveMaps.x = distribute(filterAll, [{ axis: 0, angle: 90 }]);
  ArrayCube.moveMaps.y = distribute(filterAll, [{ axis: 2, angle: 90 }]);
  ArrayCube.moveMaps.z = distribute(filterAll, [{ axis: 1, angle: 270 }]);
  ArrayCube.moveMaps.U = distribute(filterU, [{ axis: 2, angle: 90 }]);
  ArrayCube.moveMaps.L = distribute(apply(inverse(mappings.z), filterU), [{ axis: 0, angle: 270 }]);
  ArrayCube.moveMaps.F = distribute(apply(inverse(mappings.x), filterU), [{ axis: 1, angle: 270 }]);
  ArrayCube.moveMaps.R = distribute(apply(mappings.z, filterU), [{ axis: 0, angle: 90 }]);
  ArrayCube.moveMaps.B = distribute(apply(mappings.x, filterU), [{ axis: 1, angle: 90 }]);
  ArrayCube.moveMaps.D = distribute(apply(double(mappings.x), filterU), [{ axis: 2, angle: 270 }]);
  ArrayCube.moveMaps.M = distribute(filterM, [{ axis: 0, angle: 270 }]);
  ArrayCube.moveMaps.E = distribute(apply(mappings.z, filterM), [{ axis: 2, angle: 270 }]);
  ArrayCube.moveMaps.S = distribute(apply(mappings.y, filterM), [{ axis: 1, angle: 270 }]);
}
