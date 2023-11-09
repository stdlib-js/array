<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# zerosLike

> Create a zero-filled array having the same length and data type as a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var zerosLike = require( '@stdlib/array/zeros-like' );
```

#### zerosLike( x\[, dtype] )

Creates a zero-filled array having the same length and data type as a provided array `x`.

```javascript
var x = [ 1, 2, 3, 4, 5 ];

var arr = zerosLike( x );
// returns [ 0, 0, 0, 0, 0 ]
```

The function supports the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is inferred from the provided array `x`. To return an array having a different data type, provide a `dtype` argument.

```javascript
var x = [ 0, 0 ];

var arr = zerosLike( x, 'int32' );
// returns <Int32Array>[ 0, 0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array/dtypes' );
var zeros = require( '@stdlib/array/zeros' );
var zerosLike = require( '@stdlib/array/zeros-like' );

// Create a zero-filled array:
var x = zeros( 4, 'complex128' );

// Get a list of array data types:
var dt = dtypes();

// Generate additional zero-filled arrays...
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    y = zerosLike( x, dt[ i ] );
    console.log( y );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/empty-like`][@stdlib/array/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/full-like`][@stdlib/array/full-like]</span><span class="delimiter">: </span><span class="description">create a filled array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/nans-like`][@stdlib/array/nans-like]</span><span class="delimiter">: </span><span class="description">create an array filled with NaNs and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/ones-like`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/zeros`][@stdlib/array/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/ndarray/zeros-like`][@stdlib/ndarray/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled ndarray having the same shape and data type as a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/empty-like]: https://github.com/stdlib-js/array/tree/main/empty-like

[@stdlib/array/full-like]: https://github.com/stdlib-js/array/tree/main/full-like

[@stdlib/array/nans-like]: https://github.com/stdlib-js/array/tree/main/nans-like

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array/tree/main/ones-like

[@stdlib/array/zeros]: https://github.com/stdlib-js/array/tree/main/zeros

[@stdlib/ndarray/zeros-like]: https://github.com/stdlib-js/ndarray-zeros-like

<!-- </related-links> -->

</section>

<!-- /.links -->
