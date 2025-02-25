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

# hasEqualValuesIndexed

> Test if two indexed arrays have equal values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var hasEqualValuesIndexed = require( '@stdlib/array/base/assert/has-equal-values-indexed' );
```

#### hasEqualValuesIndexed( x, y )

Tests if two indexed arrays have equal values.

```javascript
var x = [ 0, 0, 1, 0 ];
var y = [ 0, 0, 1, 0 ];

var bool = hasEqualValuesIndexed( x, y );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided arrays of unequal length, the function returns `false`.
-   The function performs **strict** equality comparison.
-   The function does **not** skip `undefined` elements and is thus not optimized for sparse arrays.
-   An _indexed_ array-like object is a data structure in which one retrieves elements via integer indices using bracket `[]` notation (e.g., `Float64Array`, `Int32Array`, `Array`, etc). This is in contrast to an _accessor_ array-like object in which one retrieves elements using `get` and `set` methods (e.g., [`Complex64Array`][@stdlib/array/complex64] and [`Complex128Array`][@stdlib/array/complex128]).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random/array/discrete-uniform' );
var Float64Array = require( '@stdlib/array/float64' );
var hasEqualValuesIndexed = require( '@stdlib/array/base/assert/has-equal-values-indexed' );

var buf = discreteUniform( 10, 0, 10 );
// returns <Float64Array>

var x = new Float64Array( buf );
// returns <Float64Array>

var y = new Float64Array( buf );
// returns <Float64Array>

var out = hasEqualValuesIndexed( x, y );
// returns true
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

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

[@stdlib/array/complex128]: https://github.com/stdlib-js/array/tree/main/complex128

</section>

<!-- /.links -->
