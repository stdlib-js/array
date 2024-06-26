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

# filledarrayBy

> Create a filled array according to a provided callback function.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var filledarrayBy = require( '@stdlib/array/filled-by' );
```

#### filledarrayBy( \[dtype] )

Creates a filled array having a specified [data type][@stdlib/array/dtypes] `dtype`.

```javascript
var arr = filledarrayBy();
// returns <Float64Array>
```

By default, the output array [data type][@stdlib/array/dtypes] is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative [data type][@stdlib/array/dtypes], provide a `dtype` argument.

```javascript
var arr = filledarrayBy( 'int32' );
// returns <Int32Array>
```

#### filledarrayBy( length\[, dtype], clbk\[, thisArg] )

Returns a filled array according to a provided callback function and having a specified `length`.

```javascript
function constant() {
    return 1.0;
}

var arr1 = filledarrayBy( 5, constant );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0, 1.0 ]

var arr2 = filledarrayBy( 5, 'uint8', constant );
// returns <Uint8Array>[ 1, 1, 1, 1, 1 ]
```

#### filledarrayBy( array\[, dtype], clbk\[, thisArg] )

Creates a filled array from another array (or array-like object) according to a provided callback function.

```javascript
var arr0 = {
    '0': 0.5,
    '1': 0.5,
    '2': 0.5,
    'length': 3
};

function clbk1() {
    return 1.0;
}
var arr1 = filledarrayBy( arr0, clbk1 );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

function clbk2() {
    return 2.0;
}
var arr2 = filledarrayBy( arr1, clbk2 );
// returns <Float64Array>[ 2.0, 2.0, 2.0 ]

function clbk3() {
    return 3.0;
}
var arr3 = filledarrayBy( arr1, 'int32', clbk3 );
// returns <Int32Array>[ 3, 3, 3 ]
```

#### filledarrayBy( iterable\[, dtype], clbk\[, thisArg] )

Creates a filled array from an iterable according to a provided callback function.

```javascript
var iterConstant = require( '@stdlib/iter/constant' );

function clbk() {
    return 1.0;
}

var it = iterConstant( 3.0, {
    'iter': 3
});

var arr1 = filledarrayBy( it, clbk );
// returns <Float64Array>[ 1.0, 1.0, 1.0 ]

var arr2 = filledarrayBy( it, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0 ]
```

#### filledarrayBy( buffer\[, byteOffset\[, length]]\[, dtype], clbk\[, thisArg] )

Returns a filled [typed array][mdn-typed-array] view of an [`ArrayBuffer`][mdn-arraybuffer] according to a provided callback function.

```javascript
var ArrayBuffer = require( '@stdlib/array/buffer' );

function clbk() {
    return 1.0;
}

var buf = new ArrayBuffer( 32 );
var arr = filledarrayBy( buf, clbk );
// returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, clbk );
// returns <Float64Array>[ 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, 'float32', clbk );
// returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 16, 1, clbk );
// returns <Float64Array>[ 1.0 ]

buf = new ArrayBuffer( 32 );
arr = filledarrayBy( buf, 10, 4, 'int16', clbk );
// returns <Int16Array>[ 1, 1, 1, 1 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Creating a generic [array][mdn-array] from an [`ArrayBuffer`][mdn-arraybuffer] is **not** supported.

-   A callback function is provided a single argument:

    -   **index**: the current array index.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var dtypes = require( '@stdlib/array/typed-real-dtypes' );
var filledarrayBy = require( '@stdlib/array/filled-by' );

// Create a pseudorandom number generator:
var rand = discreteUniform( 0, 100 );

// Get a list of array data types:
var dt = dtypes();

// Generate filled arrays...
var arr;
var i;
for ( i = 0; i < dt.length; i++ ) {
    arr = filledarrayBy( 10, dt[ i ], rand );
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

-   <span class="package-name">[`@stdlib/array/filled`][@stdlib/array/filled]</span><span class="delimiter">: </span><span class="description">create a filled array.</span>
-   <span class="package-name">[`@stdlib/array/typed`][@stdlib/array/typed]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-arraybuffer]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/filled]: https://github.com/stdlib-js/array/tree/main/filled

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

<!-- </related-links> -->

</section>

<!-- /.links -->
