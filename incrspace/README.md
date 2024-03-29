<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Incrspace

> Generate a linearly spaced numeric array using a provided increment.

<section class="usage">

## Usage

```javascript
var incrspace = require( '@stdlib/array/incrspace' );
```

#### incrspace( start, stop\[, increment] )

Generates a linearly spaced numeric `array`. If an `increment` is not provided, the default `increment` is `1`.

```javascript
var arr = incrspace( 0, 11, 2 );
// returns [ 0, 2, 4, 6, 8, 10 ]
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   The output `array` is guaranteed to include the `start` value but does **not** include the `stop` value. Beware that values subsequent to the `start` value are subject to floating-point errors. Hence,

    ```javascript
    var arr = incrspace( 0.1, 0.5, 0.2 );
    // returns [ 0.1, ~0.3 ]
    ```

    where `arr[1]` is only guaranteed to be approximately equal to `0.3`.

    If you desire more control over element precision, consider using [roundn][@stdlib/math/base/special/roundn]:

    ```javascript
    var roundn = require( '@stdlib/math/base/special/roundn' );
    var arr;
    var out;
    var i;

    // Create an array subject to floating-point errors:
    arr = incrspace( 0, 1.01, 0.02 );

    // Round each value to the nearest hundredth:
    out = [];
    for ( i = 0; i < arr.length; i++ ) {
        out.push( roundn( arr[ i ], -2 ) );
    }

    console.log( out.join( '\n' ) );
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var incrspace = require( '@stdlib/array/incrspace' );
var out;

// Default behavior:
console.log( '\nDefault:' );
out = incrspace( 0, 10 );
console.log( out.join( '\n' ) );

// Specify increment:
console.log( '\nIncrement 2:' );
out = incrspace( 0, 10, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 2:' );
out = incrspace( 0, 11, 2 );
console.log( out.join( '\n' ) );

console.log( '\nIncrement 0.02:' );
out = incrspace( 0, 1.01, 0.02 );
console.log( out.join( '\n' ) );

// Create an array using a negative increment:
console.log( '\nDecremented values:' );
out = incrspace( 10, 0, -2 );
console.log( out.join( '\n' ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/linspace`][@stdlib/array/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced array over a specified interval.</span>
-   <span class="package-name">[`@stdlib/array/logspace`][@stdlib/array/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/math/base/special/roundn]: https://github.com/stdlib-js/math-base-special-roundn

<!-- <related-links> -->

[@stdlib/array/linspace]: https://github.com/stdlib-js/array/tree/main/linspace

[@stdlib/array/logspace]: https://github.com/stdlib-js/array/tree/main/logspace

<!-- </related-links> -->

</section>

<!-- /.links -->
