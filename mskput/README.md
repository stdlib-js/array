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

# mskput

> Replace elements of an array with provided values according to a provided mask array.

<section class="usage">

## Usage

```javascript
var mskput = require( '@stdlib/array/mskput' );
```

#### mskput( x, mask, values\[, options] )

Replaces elements of an array with provided values according to a provided mask array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20, 40 ] );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **values**: values to set.
-   **options**: function options.

The function supports the following options:

-   **mode**: string specifying behavior when the number of `values` does not equal the number of falsy `mask` values. Default: `'repeat'`.

The function supports the following modes:

-   `'strict'`: specifies that the function must raise an exception when the number of `values` does not **exactly** equal the number of falsy `mask` values.
-   `'non_strict'`: specifies that the function must raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'strict_broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the number of `values` does not **exactly** equal the number of falsy `mask` values.
-   `'broadcast'`: specifies that the function must broadcast a single-element `values` array and otherwise raise an exception when the function is provided insufficient `values` to satisfy the `mask` array.
-   `'repeat'`: specifies that the function must reuse provided `values` when replacing elements in `x` in order to satisfy the `mask` array.

In broadcasting modes, the function supports broadcasting a `values` array containing a single element against the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 1, 0, 1, 0 ], [ 20 ], {
    'mode': 'strict_broadcast'
});
// returns [ 1, 20, 3, 20 ]

var bool = ( out === x );
// returns true
```

In repeat mode, the function supports recycling elements in a `values` array to satisfy the number of falsy values in the `mask` array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = mskput( x, [ 0, 0, 1, 0 ], [ 20, 40 ], {
    'mode': 'repeat'
});
// returns [ 20, 40, 3, 20 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   If a `mask` array element is falsy, the corresponding element in `x` is **replaced**; otherwise, the corresponding element in `x` is "masked" and thus left unchanged.
-   The `values` array must have a [data type][@stdlib/array/dtypes] which can be [safely cast][@stdlib/array/safe-casts] to the input array data type. Floating-point data types (both real and complex) are allowed to downcast to a lower precision data type of the [same kind][@stdlib/array/same-kind-casts] (e.g., element values from a `'float64'` values array can be assigned to corresponding elements in a `'float32'` input array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var bernoulli = require( '@stdlib/random/base/bernoulli' );
var linspace = require( '@stdlib/array/base/linspace' );
var mskput = require( '@stdlib/array/mskput' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate a random mask array:
var N = discreteUniform( 5, 15 );
var mask = filledBy( N, bernoulli.factory( 0.3 ) );
console.log( mask );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2000 ) );
console.log( values );

// Update a random sample of elements in `x`:
var out = mskput( x, mask, values );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/place`][@stdlib/array/place]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="package-name">[`@stdlib/array/put`][@stdlib/array/put]</span><span class="delimiter">: </span><span class="description">replace specified elements of an array with provided values.</span>
-   <span class="package-name">[`@stdlib/array/take`][@stdlib/array/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array/tree/main/same-kind-casts

<!-- <related-links> -->

[@stdlib/array/place]: https://github.com/stdlib-js/array/tree/main/place

[@stdlib/array/put]: https://github.com/stdlib-js/array/tree/main/put

[@stdlib/array/take]: https://github.com/stdlib-js/array/tree/main/take

<!-- </related-links> -->

</section>

<!-- /.links -->
