<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

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

# linspace

> Generate a linearly spaced numeric array.

<section class="usage">

## Usage

```javascript
var linspace = require( '@stdlib/array/base/linspace' );
```

#### linspace( start, stop, length )

Generates a linearly spaced numeric `array`.

```javascript
var arr = linspace( 0, 100, 6 );
// returns [ 0, 20, 40, 60, 80, 100 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that `length` is greater than or equal to `2`.

-   The output `array` is guaranteed to include the `start` and `stop` values. Beware, however, that values between `start` and `stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var arr = linspace( 0, 1, 3 );
    // returns [ 0, ~0.5, 1 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.5`. If you desire more control over element precision, consider using [`roundn`][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math/base/special/roundn' );

    // Create an array subject to floating-point rounding errors:
    var arr = linspace( 0, 1, 21 );

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
var linspace = require( '@stdlib/array/base/linspace' );

// Create arrays of varying lengths:
var out = linspace( 0, 10, 10 );
console.log( out );

out = linspace( 0, 10, 11 );
console.log( out );

out = linspace( 0, 10, 21 );
console.log( out );

// Create an array with decremented values:
out = linspace( 10, 0, 11 );
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

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

</section>

<!-- /.links -->
