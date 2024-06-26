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

# empty

> Create an uninitialized array having a specified length.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var empty = require( '@stdlib/array/empty' );
```

#### empty( length\[, dtype] )

Creates an uninitialized array having a specified length.

```javascript
var arr = empty( 2 );
// returns <Float64Array>
```

By default, the output array [data type][@stdlib/array/dtypes] is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative [data type][@stdlib/array/dtypes], provide a `dtype` argument.

```javascript
var arr = empty( 2, 'int32' );
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
var empty = require( '@stdlib/array/empty' );

// Get a list of array data types:
var dt = dtypes();

// Generate empty arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = empty( 4, dt[ i ] );
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

-   <span class="package-name">[`@stdlib/array/empty-like`][@stdlib/array/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/full`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/ones`][@stdlib/array/ones]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/zeros`][@stdlib/array/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/ndarray/empty`][@stdlib/ndarray/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized ndarray having a specified shape and data type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/empty-like]: https://github.com/stdlib-js/array/tree/main/empty-like

[@stdlib/array/full]: https://github.com/stdlib-js/array/tree/main/full

[@stdlib/array/ones]: https://github.com/stdlib-js/array/tree/main/ones

[@stdlib/array/zeros]: https://github.com/stdlib-js/array/tree/main/zeros

[@stdlib/ndarray/empty]: https://github.com/stdlib-js/ndarray-empty

<!-- </related-links> -->

</section>

<!-- /.links -->
