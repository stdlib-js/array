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

# map

> Apply a callback function to elements in an input array and assign results to elements in a new output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var map = require( '@stdlib/array/base/map' );
```

#### map( x, fcn\[, thisArg] )

Applies a callback function to elements in an input array and assigns results to elements in a new output array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ -1.0, -2.0, -3.0, -4.0 ];

var y = map( x, naryFunction( abs, 1 ) );
// returns [ 1.0, 2.0, 3.0, 4.0 ]
```

The function accepts the following arguments:

-   **x**: input array.
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

To set the callback function's execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function count( x ) {
    this.count += 1;
    return x;
}

var x = [ 1.0, 2.0, 3.0, 4.0 ];

var ctx = {
    'count': 0
};

var y = map( x, count, ctx );
// returns [ 1.0, 2.0, 3.0, 4.0 ]

var v = ctx.count;
// returns 4
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **index**: current element index.
-   **arr**: input array.

#### map.assign( x, y, stride, offset, fcn\[, thisArg] )

Applies a callback function to elements in an input array and assigns results to elements in an output array.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var zeros = require( '@stdlib/array/base/zeros' );
var abs = require( '@stdlib/math/base/special/abs' );

var x = [ -1.0, -2.0, -3.0, -4.0 ];

var y = zeros( x.length );

var out = map.assign( x, y, 1, 0, naryFunction( abs, 1 ) );
// returns [ 1.0, 2.0, 3.0, 4.0 ]

var bool = ( out === y );
// returns true
```

The function accepts the following arguments:

-   **x**: input array.
-   **y**: output array.
-   **stride**: stride length for output array.
-   **offset**: starting index for output array.
-   **fcn**: callback function.
-   **thisArg**: callback execution context (_optional_).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `map` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.map( fcn, thisArg )
    ```

-   The function supports array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var abs = require( '@stdlib/math/base/special/abs' );
var map = require( '@stdlib/array/base/map' );

var x = discreteUniform( 10, -10, 10, {
    'dtype': 'float64'
});

var y = map( x, naryFunction( abs, 1 ) );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array/tree/main/base/accessor

</section>

<!-- /.links -->
