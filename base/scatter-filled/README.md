<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# scatterFilled

> Scatter a list of provided values to specified indices in a new filled "generic" array.

<section class="usage">

## Usage

```javascript
var scatterFilled = require( '@stdlib/array/base/scatter-filled' );
```

#### scatterFilled( fill, len, indices, values, mode )

Scatters a list of provided values to specified indices in a new filled "generic" array.

```javascript
var out = scatterFilled( null, 4, [ 1, 3 ], [ 20, 40 ], 'throw' );
// returns [ null, 20, null, 40 ]
```

The function supports the following parameters:

-   **fill**: fill value.
-   **len**: output array length.
-   **indices**: list of indices.
-   **values**: values to scatter. When `indices` contains one or more elements, `values` must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with `indices` (i.e., must have either one element or the same number of elements as `indices`).
-   **mode**: index [mode][@stdlib/ndarray/base/ind].

If `indices` is an empty array, the function returns a filled array.

```javascript
var out = scatterFilled( null, 4, [], [ 20, 40 ], 'throw' );
// returns [ null, null, null, null ]
```

The function supports broadcasting a `values` array containing a single element against an `indices` array containing one or more elements.

```javascript
var out = scatterFilled( null, 4, [ 1, 3 ], [ 20 ], 'throw' );
// returns [ null, 20, null, 20 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var scatterFilled = require( '@stdlib/array/base/scatter-filled' );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, 10 ) );
console.log( indices );

// Generate an array of random values:
var values = filledBy( N, discreteUniform.factory( 1000, 2025 ) );
console.log( values );

// Scatter a random sample of elements to a new array:
var out = scatterFilled( null, 11, indices, values, 'throw' );
console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
