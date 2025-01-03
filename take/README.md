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

# take

> Take elements from an array.

<section class="usage">

## Usage

```javascript
var take = require( '@stdlib/array/take' );
```

#### take( x, indices\[, options] )

Takes elements from an array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ 1, 3 ] );
// returns [ 2, 4 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **options**: function options.

The function supports the following options:

-   **mode**: index [mode][@stdlib/ndarray/base/ind]. Default: `'normalize'`.

By default, the function normalizes negative integer indices to positive integer index equivalents.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ -3, -1 ] );
// returns [ 2, 4 ]
```

To specify an alternative index [mode][@stdlib/ndarray/base/ind], provide a `mode` option.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ -10, 10 ], {
    'mode': 'clamp'
});
// returns [ 1, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `indices` is an empty array, the function returns an empty array.

    ```javascript
    var x = [ 1, 2, 3, 4 ];

    var y = take( x, [] );
    // returns []
    ```

-   If provided an input array having a recognized [data type][@stdlib/array/dtypes], the function returns an array having the same [data type][@stdlib/array/dtypes] as the input array. Otherwise, the function **always** returns a "generic" array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var linspace = require( '@stdlib/array/linspace' );
var take = require( '@stdlib/array/take' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate an array of random indices:
var indices = discreteUniform( 10, 0, x.length-1 );
console.log( indices );

// Take a random sample of elements from `x`:
var y = take( x, indices );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/put`][@stdlib/array/put]</span><span class="delimiter">: </span><span class="description">replace specified elements of an array with provided values.</span>
-   <span class="package-name">[`@stdlib/array/slice`][@stdlib/array/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/put]: https://github.com/stdlib-js/array/tree/main/put

[@stdlib/array/slice]: https://github.com/stdlib-js/array/tree/main/slice

<!-- </related-links> -->

</section>

<!-- /.links -->
