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

# strided2array2d

> Convert a strided array to a two-dimensional nested array.

<section class="intro">

</section>

<!-- /.intro -->

<section class="usage">

## Usage

```javascript
var strided2array2d = require( '@stdlib/array/base/strided2array2d' );
```

#### strided2array2d( x, shape, strides, offset )

Converts a strided array to a two-dimensional nested array.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var arr = strided2array2d( x, [ 3, 2 ], [ 2, 1 ], 0 );
// returns [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

arr = strided2array2d( x, [ 3, 2 ], [ 1, 3 ], 0 );
// returns [ [ 1, 4 ], [ 2, 5 ], [ 3, 6 ] ]
```

The function accepts the following arguments:

-   **x**: input array.
-   **shape**: array shape.
-   **strides**: dimension strides.
-   **offset**: index of the first indexed value in the input array.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that the input array is [compatible][@stdlib/ndarray/base/assert/is-buffer-length-compatible] with the specified array shape, dimension strides, and index offset.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/base/zero-to' );
var numel = require( '@stdlib/ndarray/base/numel' );
var shape2strides = require( '@stdlib/ndarray/base/shape2strides' );
var strided2array2d = require( '@stdlib/array/base/strided2array2d' );

var shape = [ 3, 3 ];

var x = zeroTo( numel( shape ) );
console.log( x );

var y = strided2array2d( x, shape, shape2strides( shape, 'row-major' ), 0 );
console.log( y );

y = strided2array2d( x, shape, shape2strides( shape, 'column-major' ), 0 );
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

[@stdlib/ndarray/base/assert/is-buffer-length-compatible]: https://github.com/stdlib-js/stdlib

</section>

<!-- /.links -->
