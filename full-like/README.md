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

# fullLike

> Create a filled array having the same length and data type as a provided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var fullLike = require( '@stdlib/array/full-like' );
```

#### fullLike( x, value\[, dtype] )

Creates a filled array having the same length and [data type][@stdlib/array/dtypes] as a provided array `x`.

```javascript
var x = [ 1, 2, 3, 4, 5 ];

var arr = fullLike( x, 1 );
// returns [ 1, 1, 1, 1, 1 ]
```

By default, the output array [data type][@stdlib/array/dtypes] is inferred from the provided array `x`. To return an array having a different [data type][@stdlib/array/dtypes], provide a `dtype` argument.

```javascript
var x = [ 1, 1 ];

var arr = fullLike( x, 1, 'int32' );
// returns <Int32Array>[ 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided a number and the output array [data type][@stdlib/array/dtypes] is a complex number [data type][@stdlib/array/dtypes], the function returns a complex number array where each element has a real component whose value equals the provided fill value and where each element has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array/dtypes' );
var zeros = require( '@stdlib/array/zeros' );
var fullLike = require( '@stdlib/array/full-like' );

// Create a zero-filled array:
var x = zeros( 4, 'complex128' );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    y = fullLike( x, 1.0, dt[ i ] );
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

-   <span class="package-name">[`@stdlib/array/full`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array/ones-like`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="package-name">[`@stdlib/array/zeros-like`][@stdlib/array/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having the same length and data type as a provided array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/full]: https://github.com/stdlib-js/array/tree/main/full

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array/tree/main/ones-like

[@stdlib/array/zeros-like]: https://github.com/stdlib-js/array/tree/main/zeros-like

<!-- </related-links> -->

</section>

<!-- /.links -->
