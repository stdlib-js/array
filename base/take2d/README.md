<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# take2d

> Take elements from a two-dimensional nested array.

<section class="usage">

## Usage

```javascript
var take2d = require( '@stdlib/array/base/take2d' );
```

#### take2d( x, indices, dimension, mode )

Takes elements along a specified `dimension` from a two-dimensional nested array according to a specified [index `mode`][@stdlib/ndarray/index-modes].

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];
var indices = [ 1, 1, 0, 0, -1, -1 ];

var y = take2d( x, indices, 1, 'normalize' );
// returns [ [ 2, 2, 1, 1, 2, 2 ], [ 4, 4, 3, 3, 4, 4 ] ]
```

The function accepts the following arguments:

-   **x**: input nested array.
-   **indices**: list of indices.
-   **dimension**: dimension along which to take elements. If provided a negative integer, the dimension is resolved relative to the last dimension, with the last dimension being `-1`.
-   **mode**: [index mode][@stdlib/ndarray/index-modes] specifying how to handle an index which is out-of-bounds.

If `indices` is an empty array, the function returns empty arrays along the specified `dimension`.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var y = take2d( x, [], 1, 'throw' );
// returns [ [], [] ]

var z = take2d( x, [], 0, 'throw' );
// returns []
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** deep copy nested array elements.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filled2dBy = require( '@stdlib/array/base/filled2d-by' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var take2d = require( '@stdlib/array/base/take2d' );

// Generate a random array:
var shape = [ 5, 5 ];
var x = filled2dBy( shape, discreteUniform.factory( 0, 100 ) );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, shape[1]-1 ) );
console.log( indices );

// Take a random sample of elements from `x`:
var y = take2d( x, indices, 1, 'throw' );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray-index-modes

</section>

<!-- /.links -->
