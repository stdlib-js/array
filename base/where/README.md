<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# where

> Take elements from either one of two arrays depending on a condition.

<section class="usage">

## Usage

```javascript
var where = require( '@stdlib/array/base/where' );
```

#### where( condition, x, y )

Takes elements from either `x` or `y` depending on a condition.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var condition = [ true, false, true, false ];

var z = where( condition, x, y );
// returns [ 1, 6, 3, 8 ]
```

The function supports the following parameters:

-   **condition**: array of values indicating whether to take an element from either `x` or `y`. If a condition element is truthy, the function takes a respective element from `x`; otherwise, the function takes a respective element from `y`. If non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.
-   **x**: first input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.
-   **y**: second input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the resolved output array length.

When all input arrays are non-empty, the function supports broadcasting single-element arrays to the resolved output array length, which is equal to the maximum length of all provided input arrays.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5 ];

var condition = [ true, false, true, false ];

var z = where( condition, x, y );
// returns [ 1, 5, 3, 5 ]

z = where( condition, y, x );
// returns [ 5, 2, 5, 4 ]

z = where( [ true ], x, y );
// returns [ 1, 2, 3, 4 ]

z = where( [ false ], x, y );
// returns [ 5, 5, 5, 5 ]

z = where( condition, [ 1 ], y );
// returns [ 1, 5, 1, 5 ]
```

If `condition` is an empty array, the function returns an empty array.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var condition = [];

var z = where( condition, x, y );
// returns []
```

#### where.assign( condition, x, y, out, stride, offset )

Takes elements from either `x` or `y` depending on a condition and assigns the values to elements in a provided output array.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = [ 0, 0, 0, 0 ];
var condition = [ true, false, true, false ];

var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 1, 6, 3, 8 ]

var bool = ( arr === out );
// returns true
```

The function supports the following parameters:

-   **condition**: array of values indicating whether to take an element from either `x` or `y`. If a condition element is truthy, the function takes a respective element from `x`; otherwise, the function takes a respective element from `y`. If non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **x**: first input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **y**: second input array. If `condition` is non-empty, must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with the output array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.

The function supports broadcasting single-element arrays to the output array length.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5 ];

var condition = [ true, false, true, false ];

var out = [ 0, 0, 0, 0 ];
var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 1, 5, 3, 5 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( condition, y, x, out, 1, 0 );
// returns [ 5, 2, 5, 4 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( [ true ], x, y, out, 1, 0 );
// returns [ 1, 2, 3, 4 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( [ false ], x, y, out, 1, 0 );
// returns [ 5, 5, 5, 5 ]

out = [ 0, 0, 0, 0 ];
arr = where.assign( condition, [ 1 ], y, out, 1, 0 );
// returns [ 1, 5, 1, 5 ]
```

When `condition` is an empty array, the function returns the output array unchanged.

```javascript
var x = [ 1, 2, 3, 4 ];
var y = [ 5, 6, 7, 8 ];

var out = [ 0, 0, 0, 0 ];
var condition = [];

var arr = where.assign( condition, x, y, out, 1, 0 );
// returns [ 0, 0, 0, 0 ]

var bool = ( arr === out );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var where = require( '@stdlib/array/base/where' );

var opts = {
    'dtype': 'generic'
};

// Generate an array of indicator values:
var condition = bernoulli( 20, 0.9, opts );
console.log( condition );

// Generate an array of random values:
var x = discreteUniform( condition.length, 0, 10, opts );
console.log( x );

// Define an array containing a broadcasted "missing" value:
var y = [ NaN ];

// Return an array with randomly placed missing values:
var z = where( condition, x, y );
console.log( z );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
