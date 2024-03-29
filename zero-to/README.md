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

# zeroTo

> Generate a linearly spaced numeric array whose elements increment by `1` starting from zero.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var zeroTo = require( '@stdlib/array/zero-to' );
```

#### zeroTo( n\[, dtype] )

Generates a linearly spaced numeric array whose elements increment by `1` starting from zero.

```javascript
var arr = zeroTo( 5 );
// returns <Float64Array>[ 0.0, 1.0, 2.0, 3.0, 4.0 ]
```

If `n == 0`, the function returns an empty array.

```javascript
var arr = zeroTo( 0 );
// returns <Float64Array>[]
```

The function recognizes the following data types:

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

By default, the output array data type is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = zeroTo( 5, 'int32' );
// returns <Int32Array>[ 0, 1, 2, 3, 4 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For complex number arrays, each element of the returned array has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var zeroTo = require( '@stdlib/array/zero-to' );

// Generate an array of random numbers:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, 100, 200, opts );

// Generate an array of indices:
var idx = zeroTo( x.length, opts.dtype );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
console.log( idx );
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

-   <span class="package-name">[`@stdlib/array/empty`][@stdlib/array/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/full`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/one-to`][@stdlib/array/one-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one.</span>
-   <span class="package-name">[`@stdlib/array/zero-to-like`][@stdlib/array/zero-to-like]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.</span>
-   <span class="package-name">[`@stdlib/array/zeros`][@stdlib/array/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having a specified length.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/array/empty]: https://github.com/stdlib-js/array/tree/main/empty

[@stdlib/array/full]: https://github.com/stdlib-js/array/tree/main/full

[@stdlib/array/one-to]: https://github.com/stdlib-js/array/tree/main/one-to

[@stdlib/array/zero-to-like]: https://github.com/stdlib-js/array/tree/main/zero-to-like

[@stdlib/array/zeros]: https://github.com/stdlib-js/array/tree/main/zeros

<!-- </related-links> -->

</section>

<!-- /.links -->
