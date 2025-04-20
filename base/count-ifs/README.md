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

# countIfs

> Perform element-wise evaluation of one or more input arrays according to provided predicate functions and count the number of elements for which all predicates respectively return `true`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var countIfs = require( '@stdlib/array/base/count-ifs' );
```

#### countIfs( x0, predicate0\[, x1, predicate1\[, x2, predicate2\[, ...args]] )

Performs element-wise evaluation of one or more input arrays according to provided predicate functions and counts the number of elements for which all predicates respectively return `true`.

```javascript
function predicate0( value ) {
    return ( value > 0 );
}

function predicate1( value ) {
    return ( value < 3 );
}

var x0 = [ 0, 1, 0, 1, 2 ];
var x1 = [ 2, 3, 1, 2, 5 ];

var out = countIfs( x0, predicate0, x1, predicate1 );
// returns 1
```

The function has the following parameters:

-   **x0**: first input array.
-   **predicate0**: first predicate function.
-   **x1**: second input array (_optional_).
-   **predicate1**: second predicate function (_optional_).
-   **x2**: third input array (_optional_).
-   **predicate2**: third predicate function (_optional_).
-   **args**: additional input arrays and corresponding predicate functions (_optional_).

Each predicate function is provided three arguments:

-   **value**: current array element.
-   **index**: current array element index.
-   **arr**: the corresponding input array.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function assumes that all input arrays have the same length.
-   The function supports array-like objects supporting the accessor protocol (e.g., [`Complex128Array`][@stdlib/array/complex128], [`Complex64Array`][@stdlib/array/complex64], etc).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable max-len -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var isPositiveInteger = require( '@stdlib/assert/is-positive-integer' ).isPrimitive;
var isNegativeInteger = require( '@stdlib/assert/is-negative-integer' ).isPrimitive;
var naryFunction = require( '@stdlib/utils/nary-function' );
var countIfs = require( '@stdlib/array/base/count-ifs' );

var x = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
console.log( x );

var y = discreteUniform( 10, -5, 5, {
    'dtype': 'int32'
});
console.log( y );

var out = countIfs( x, naryFunction( isPositiveInteger, 1 ), y, naryFunction( isNegativeInteger, 1 ) );
console.log( out );
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

[@stdlib/array/complex128]: https://github.com/stdlib-js/array/tree/main/complex128

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

</section>

<!-- /.links -->
