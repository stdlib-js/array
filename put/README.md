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

# put

> Replace specified elements of an array with provided values.

<section class="usage">

## Usage

```javascript
var put = require( '@stdlib/array/put' );
```

#### put( x, indices, values\[, options] )

Replaces specified elements of an array with provided values.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20, 40 ] );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **values**: values to set. When `indices` contains one or more elements, `values` must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with `indices` (i.e., must have either one element or the same number of elements as `indices`).
-   **options**: function options.

The function supports the following options:

-   **mode**: index [mode][@stdlib/ndarray/base/ind]. Default: `'normalize'`.

If `indices` is an empty array, the function returns the input array unchanged.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [], [ 20, 40 ] );
// returns [ 1, 2, 3, 4 ]
```

The function supports broadcasting a `values` array containing a single element against an `indices` array containing one or more elements.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20 ] );
// returns [ 1, 20, 3, 20 ]
```

By default, the function normalizes negative integer indices to positive integer index equivalents.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ -3, -1 ], [ 20, 40 ] );
// returns [ 1, 20, 3, 40 ]
```

To specify an alternative index [mode][@stdlib/ndarray/base/ind], provide a `mode` option.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ -10, 10 ], [ 20, 40 ], {
    'mode': 'clamp'
});
// returns [ 20, 2, 3, 40 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   Because each index is only validated at the time of replacing a particular element, mutation may occur even when one or more indices are out-of-bounds, including when the index [mode][@stdlib/ndarray/base/ind] indicates to raise an exception.
-   The `values` array must have a [data type][@stdlib/array/dtypes] which can be [safely cast][@stdlib/array/safe-casts] to the input array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the [same kind][@stdlib/array/same-kind-casts] (e.g., element values from a `'float64'` values array can be assigned to corresponding elements in a `'float32'` input array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var linspace = require( '@stdlib/array/base/linspace' );
var put = require( '@stdlib/array/put' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );
console.log( indices );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2000 ) );
console.log( values );

// Update a random sample of elements in `x`:
var out = put( x, indices, values );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/mskput`][@stdlib/array/mskput]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="package-name">[`@stdlib/array/place`][@stdlib/array/place]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="package-name">[`@stdlib/array/take`][@stdlib/array/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array/tree/main/same-kind-casts

<!-- <related-links> -->

[@stdlib/array/mskput]: https://github.com/stdlib-js/array/tree/main/mskput

[@stdlib/array/place]: https://github.com/stdlib-js/array/tree/main/place

[@stdlib/array/take]: https://github.com/stdlib-js/array/tree/main/take

<!-- </related-links> -->

</section>

<!-- /.links -->
