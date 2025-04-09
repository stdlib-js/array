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

# linspace2d

> Generate a linearly spaced two-dimensional nested numeric array.

<section class="usage">

## Usage

```javascript
var linspace2d = require( '@stdlib/array/base/linspace2d' );
```

#### linspace2d( start, stop, shape, colexicographic )

Generates a linearly spaced two-dimensional nested numeric array.

```javascript
var x = linspace2d( 0, 100, [ 2, 3 ], false );
// returns [ [ 0, 20, 40 ], [ 60, 80, 100 ] ]

x = linspace2d( 0, 100, [ 2, 3 ], true );
// returns [ [ 0, 40, 80 ], [ 20, 60, 100 ] ]
```

The function accepts the following arguments:

-   **start**: first array value.
-   **stop**: last array value.
-   **shape**: array shape.
-   **colexicographic**: specifies whether generated array values should be stored in colexicographic order.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The output array is guaranteed to include the `start` and `stop` values. Beware, however, that values between `start` and `stop` are subject to floating-point rounding errors. Hence,

    ```javascript
    var arr = linspace2d( 0, 1, [ 1, 3 ], false );
    // returns [ [ 0, ~0.5, 1 ] ]
    ```

    where `arr[0][1]` is only guaranteed to be approximately equal to `0.5`. If you desire more control over element precision, consider using [`roundn`][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math/base/special/roundn' );
    var map2d = require( '@stdlib/array/base/map2d' );

    var arr = linspace2d( 0, 1, [ 1, 3 ], false );
    // returns [ [ 0, ~0.5, 1 ] ]

    // Round each value to the nearest tenth:
    var out = map2d( arr, [ 1, 3 ], clbk );
    // returns [ [ 0, 0.5, 1 ] ]

    function clbk( v ) {
        return roundn( v, -1 );
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace2d = require( '@stdlib/array/base/linspace2d' );

var out = linspace2d( 0, 10, [ 2, 5 ], false );
console.log( out );

out = linspace2d( 0, 10, [ 2, 3 ], true );
console.log( out );

out = linspace2d( 0, 10, [ 4, 2 ], true );
console.log( out );

// Create an array of arrays with decremented values:
out = linspace2d( 10, 0, [ 2, 5 ], false );
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
