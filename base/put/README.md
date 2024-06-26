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
var put = require( '@stdlib/array/base/put' );
```

#### put( x, indices, values, mode )

Replaces specified elements of an array with provided values.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20, 40 ], 'throw' );
// returns [ 1, 20, 3, 40 ]

var bool = ( out === x );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **values**: values to set. When `indices` contains one or more elements, `values` must be broadcast [compatible][@stdlib/ndarray/base/broadcast-shapes] with `indices` (i.e., must have either one element or the same number of elements as `indices`).
-   **mode**: index [mode][@stdlib/ndarray/base/ind].

If `indices` is an empty array, the function returns the input array unchanged.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [], [ 20, 40 ], 'throw' );
// returns [ 1, 2, 3, 4 ]
```

The function supports broadcasting a `values` array containing a single element against an `indices` array containing one or more elements.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = put( x, [ 1, 3 ], [ 20 ], 'throw' );
// returns [ 1, 20, 3, 20 ]

var bool = ( out === x );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function mutates the input array `x`.
-   Because each index is only validated at the time of replacing a particular element, mutation may occur even when one or more indices are out-of-bounds, including when the index [mode][@stdlib/ndarray/base/ind] indicates to raise an exception.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledBy = require( '@stdlib/array/base/filled-by' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var linspace = require( '@stdlib/array/base/linspace' );
var put = require( '@stdlib/array/base/put' );

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
var out = put( x, indices, values, 'throw' );
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
