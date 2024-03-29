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

# Mostly Safe Casts

> Return a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast and, for floating-point data types, can be downcast.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var mostlySafeCasts = require( '@stdlib/array/mostly-safe-casts' );
```

#### mostlySafeCasts( \[dtype] )

If provided a `dtype` argument, returns a list of array [data types][@stdlib/array/dtypes] to which a provided array [data type][@stdlib/array/dtypes] can be safely cast and, for floating-point data types, can be downcast.

```javascript
var out = mostlySafeCasts( 'float32' );
// e.g., returns [ 'float32', 'float64', ... ]
```

If not provided a `dtype` argument, the function returns a casting table.

```javascript
var out = mostlySafeCasts();
// returns {...}

var f32 = out[ 'float32' ];
// returns {...}

var v = f32[ 'float64' ];
// returns 1
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = mostlySafeCasts( 'foo' );
// returns null
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
var mostlySafeCasts = require( '@stdlib/array/mostly-safe-casts' );

// Get the list of supported array data types:
var DTYPES = dtypes();

// Print the list of array data types to which a data type can be cast...
var list;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    list = mostlySafeCasts( DTYPES[ i ] );
    console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
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

-   <span class="package-name">[`@stdlib/array/convert`][@stdlib/array/convert]</span><span class="delimiter">: </span><span class="description">convert an array to an array of a different data type.</span>
-   <span class="package-name">[`@stdlib/array/convert-same`][@stdlib/array/convert-same]</span><span class="delimiter">: </span><span class="description">convert an array to the same data type as a second input array.</span>
-   <span class="package-name">[`@stdlib/array/dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="package-name">[`@stdlib/array/safe-casts`][@stdlib/array/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast.</span>
-   <span class="package-name">[`@stdlib/array/same-kind-casts`][@stdlib/array/same-kind-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast or cast within the same kind.</span>
-   <span class="package-name">[`@stdlib/ndarray/mostly-safe-casts`][@stdlib/ndarray/mostly-safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast and, for floating-point data types, can be downcast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/convert]: https://github.com/stdlib-js/array/tree/main/convert

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array/tree/main/convert-same

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array/tree/main/same-kind-casts

[@stdlib/ndarray/mostly-safe-casts]: https://github.com/stdlib-js/ndarray-mostly-safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
