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

# takeMap

> Take elements from an array and return a new array after applying a mapping function.

<section class="usage">

## Usage

```javascript
var takeMap = require( '@stdlib/array/base/take-map' );
```

### takeMap( x, indices, mode, clbk )

Takes elements from an array and returns a new array after applying a mapping function.

```javascript
var x = [ 1, 2, 3, 4 ];

function customMapping( value ) {
    return value * 2;
}

var y = takeMap( x, [ 1, 3 ], 'throw', customMapping );
// returns [ 4, 8 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **mode**: index [mode][@stdlib/ndarray/base/ind].
-   **clbk**: function to apply.

### takeMap.assign( x, indices, mode, out, stride, offset, clbk )

> Takes elements from an array and assigns the values to elements in a provided output array.

```javascript
var x = [ 1, 2, 3, 4 ];

var out = [ 0, 0, 0, 0, 0, 0 ];
var indices = [ 0, 0, 1, 1, 3, 3 ];

function clbk( val ) {
    return val * 2;
}

var arr = takeMap.assign( x, indices, 'throw', out, -1, out.length-1, clbk );
// returns [ 8, 8, 4, 4, 2, 2 ]

var bool = ( arr === out );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **mode**: index [mode][@stdlib/ndarray/base/ind].
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.
-   **clbk**: callback function.

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
var linspace = require( '@stdlib/array/base/linspace' );
var takeMap = require( '@stdlib/array/base/take-map' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate an array of random indices:
var N = discreteUniform( 5, 15 );
var indices = filledBy( N, discreteUniform.factory( 0, x.length-1 ) );
console.log( indices );

// Define a mapping function (e.g., square the value):
function square( val ) {
    return val * val;
}

// Take a random sample of elements from `x` and apply the mapping function:
var y = takeMap( x, indices, 'throw', square );
console.log( y );
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

</section>

<!-- /.links -->
