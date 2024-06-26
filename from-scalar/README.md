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

# scalar2array

> Create a single-element array containing a provided scalar value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var scalar2array = require( '@stdlib/array/from-scalar' );
```

#### scalar2array( value\[, dtype] )

Returns a single-element array containing a provided scalar value.

```javascript
var x = scalar2array( 3.0 );
// returns <Float64Array>[ 3.0 ]
```

If not provided a `dtype` argument and `value`

-   is a number, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] real-valued floating-point data type.
-   is a boolean, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] boolean data type.
-   is a complex number object of a known data type, the data type is the same as the provided value.
-   is a complex number object of an unknown data type, the default [data type][@stdlib/array/dtypes] is the [default][@stdlib/array/defaults] complex-valued floating-point data type.
-   is any other value type, the default [data type][@stdlib/array/dtypes] is `'generic'`.

To explicitly specify the [data type][@stdlib/array/dtypes] of the returned array, provide a `dtype` argument.

```javascript
var x = scalar2array( 3.0, 'float32' );
// returns <Float32Array>[ 3.0 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If `value` is a number and the `dtype` argument is a complex [data type][@stdlib/array/dtypes], the function returns a complex number array containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.
-   The function does **not** guard against precision loss when `value` is a number and the `dtype` argument is an integer [data type][@stdlib/array/dtypes].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128 = require( '@stdlib/complex/float64/ctor' );
var array2scalar = require( '@stdlib/array/from-scalar' );

var x = array2scalar( 3.0 );
// returns <Float64Array>[ 3.0 ]

x = array2scalar( 3, 'int32' );
// returns <Int32Array>[ 3 ]

x = array2scalar( new Complex128( 3.0, 4.0 ) );
// returns <Complex128Array>

x = array2scalar( {} );
// returns [ {} ]
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/from-iterator`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/defaults]: https://github.com/stdlib-js/array/tree/main/defaults

<!-- <related-links> -->

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array/tree/main/from-iterator

<!-- </related-links> -->

</section>

<!-- /.links -->
