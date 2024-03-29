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

# sliceAssign

> Assign element values from a broadcasted input array to corresponding elements in an output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var sliceAssign = require( '@stdlib/array/base/fancy-slice-assign' );
```

#### slice( x, y, s, strict )

Assigns element values from a broadcasted input array to corresponding elements in an output array.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var x = [ 1, 2, 3, 4 ];
var y = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

var s = new Slice( null, null, -2 );
// returns <Slice>

var out = sliceAssign( x, y, s, false );
// returns [ 0, 4, 0, 3, 0, 2, 0, 1 ]

var bool = ( out === y );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **y**: output array.
-   **s**: [slice][@stdlib/slice/ctor] object specifying the output array slice.
-   **strict**: boolean indicating whether to enforce strict bounds checking.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The input array **must** be broadcast compatible with the output array slice (i.e., contain only one element or the same number of elements as in the slice).
-   The input array must have a [data type][@stdlib/array/dtypes] which can be [safely cast][@stdlib/array/safe-casts] to the output array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the [same kind][@stdlib/array/same-kind-casts] (e.g., element values from a `'float64'` input array can be assigned to corresponding elements in a `'float32'` output array).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/zero-to' );
var zeros = require( '@stdlib/array/zeros' );
var Slice = require( '@stdlib/slice/ctor' );
var sliceAssign = require( '@stdlib/array/base/fancy-slice-assign' );

var x = zeroTo( 10, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var y = zeros( 10, 'generic' );
// returns [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]

var s = new Slice();
var out = sliceAssign( x, y, s, false );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( null, null, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 4, 0, 3, 0, 2, 0, 1, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( -2, null, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 4, 0, 3, 0, 2, 0, 1, 0, 0, 0 ]

x = zeroTo( 6, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, -2 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 1, 2, 3, 4, 5, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 2, 5 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 1, 2, 0, 0, 0, 0, 0 ]

x = zeroTo( 3, 'generic' );
// returns [ 0, 1, 2 ]

y = zeros( 10, 'generic' );
s = new Slice( 4, 1, -1 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 2, 1, 0, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5 );
out = sliceAssign( x, y, s, false );
// returns [ 0, 1, 2, 3, 4, 0, 0, 0, 0, 0 ]

x = zeroTo( 5, 'generic' );
// returns [ 0, 1, 2, 3, 4 ]

y = zeros( 10, 'generic' );
s = new Slice( 5, null );
out = sliceAssign( x, y, s, false );
// returns [ 0, 0, 0, 0, 0, 0, 1, 2, 3, 4 ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array/tree/main/same-kind-casts

</section>

<!-- /.links -->
