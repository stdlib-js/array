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

# emptyLike

> Create an uninitialized array having the same length and data type as a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var emptyLike = require( '@stdlib/array/empty-like' );
```

#### emptyLike( x\[, dtype] )

Creates an uninitialized array having the same length and [data type][@stdlib/array/dtypes] as a provided array `x`.

```javascript
var x = [ 1, 2, 3, 4, 5 ];

var arr = emptyLike( x );
// returns [ 0, 0, 0, 0, 0 ];
```

By default, the output array [data type][@stdlib/array/dtypes] is inferred from the provided array `x`. To return an array having a different [data type][@stdlib/array/dtypes], provide a `dtype` argument.

```javascript
var x = [ 1, 1 ];

var arr = emptyLike( x, 'int32' );
// returns <Int32Array>
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   In browser environments, the function always returns zero-filled arrays.
-   If `dtype` is `'generic'`, the function always returns a zero-filled array.
-   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array/dtypes' );
var zeros = require( '@stdlib/array/zeros' );
var emptyLike = require( '@stdlib/array/empty-like' );

// Create a zero-filled array:
var x = zeros( 4, 'complex128' );

// Get a list of array data types:
var dt = dtypes();

// Generate empty arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = emptyLike( x, dt[ i ] );
    console.log( arr );
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

-   <span class="package-name">[`@stdlib/array/empty`][@stdlib/array/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/full-like`][@stdlib/array/full-like]</span><span class="delimiter">: </span><span class="description">create a filled array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/ones-like`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/zeros-like`][@stdlib/array/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/ndarray/empty-like`][@stdlib/ndarray/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having the same shape and data type as a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/empty]: https://github.com/stdlib-js/array/tree/main/empty

[@stdlib/array/full-like]: https://github.com/stdlib-js/array/tree/main/full-like

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array/tree/main/ones-like

[@stdlib/array/zeros-like]: https://github.com/stdlib-js/array/tree/main/zeros-like

[@stdlib/ndarray/empty-like]: https://github.com/stdlib-js/ndarray-empty-like

<!-- </related-links> -->

</section>

<!-- /.links -->
