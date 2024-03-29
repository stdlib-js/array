<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# unitspace

> Generate a linearly spaced numeric array whose elements increment by 1.

<section class="usage">

## Usage

```javascript
var unitspace = require( '@stdlib/array/base/unitspace' );
```

#### unitspace( start, stop )

Generates a linearly spaced numeric `array` whose elements increment by `1`.

```javascript
var arr = unitspace( 0, 6 );
// returns [ 0, 1, 2, 3, 4, 5 ]
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The output `array` is guaranteed to include the `start` value but does **not** include the `stop` value. Beware that values subsequent to the `start` value are subject to floating-point errors. Hence,

    ```javascript
    var arr = unitspace( -0.7, 1 );
    // returns [ -0.7, ~0.3 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.3`.

    If you desire more control over element precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math/base/special/roundn' );

    // Create an array subject to floating-point errors:
    var arr = unitspace( -10.7, 11.7 );

    // Round each value to the nearest hundredth:
    var i;
    for ( i = 0; i < arr.length; i++ ) {
        arr[ i ] = roundn( arr[ i ], -2 );
    }

    console.log( arr.join( '\n' ) );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas/ext/base/gsort2hp' );
var filledBy = require( '@stdlib/array/base/filled-by' );
var randu = require( '@stdlib/random/base/randu' );
var unitspace = require( '@stdlib/array/base/unitspace' );

// Generate an array of random numbers:
var x = filledBy( 10, randu );

// Generate an array of indices:
var idx = unitspace( 0, x.length );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort the index array according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, idx, 1 );

console.log( x );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

</section>

<!-- /.links -->
