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

# forEach

> Invoke a callback funcion once for each array element.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var forEach = require( '@stdlib/array/base/for-each' );
```

#### forEach( x, fcn\[, thisArg] )

Invokes a callback function once for each array element.

```javascript
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );

var x = [ 1, 2, 3, 4 ];

forEach( x, naryFunction( log, 1 ) );
```

The function accepts the following arguments:

-   **x**: input array.
-   **fcn**: callback to apply.
-   **thisArg**: callback execution context _(optional)_.

To set the callback function execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function accumulate( z ) {
    this.sum += z;
}

var x = [ 1, 2, 3, 4 ];

var ctx = {
    'sum': 0
};

forEach( x, accumulate, ctx );
var sum = ctx.sum;
// returns 10
```

The callback function is provided the following arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the input array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having a `forEach` method, the function defers execution to that method and assumes that the method API has the following signature:

    ```text
    x.forEach( fcn, thisArg )
    ```

-   The function support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array/base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var log = require( '@stdlib/console/log' );
var forEach = require( '@stdlib/array/base/for-each' );

var x = discreteUniform( 10, 0, 10, {
    'dtype': 'float64'
});

forEach( x, naryFunction( log, 1 ) );
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
