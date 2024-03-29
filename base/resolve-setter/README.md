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

# resolveSetter

> Return an accessor function for setting an element in an array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var resolveSetter = require( '@stdlib/array/base/resolve-setter' );
```

#### resolveSetter( x )

Returns an accessor function for setting an element in an array-like object.

```javascript
var x = [ 1, 2, 3, 4 ];

var set = resolveSetter( x );
// returns <Function>

set( x, 2, 10 );

var v = x[ 2 ];
// returns 10
```

The returned accessor function accepts the following arguments:

-   **arr**: input array.
-   **idx**: element index.
-   **value**: value to set.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having an unsupported [data type][@stdlib/array/dtypes], the function returns a default accessor function for accessing elements in any array-like object; otherwise, the function returns an accessor function which should **only** be provided an array instance having the same data type (e.g., if provided a `Float64Array`, the returned accessor function should only be provided instances of `Float64Array`).
-   Accessor functions do **not** verify that provided input arrays are array instances having a specific data type, as doing so would introduce performance overhead. If array instances corresponding to other data types are provided to an accessor function, JavaScript runtimes will consider the function polymorphic, potentially triggering de-optimization. In order to ensure maximum performance, **always** ensure that an accessor function is monomorphic.
-   Accessor functions do **not** perform bounds checking.
-   Accessor functions do **not** verify that provided input arrays implement the get/set protocol.
-   An _indexed_ array-like object is a data structure in which one retrieves elements via integer indices using bracket `[]` notation (e.g., `Float64Array`, `Int32Array`, `Array`, etc). This is in contrast to an _accessor_ array-like object in which one retrieves elements using `get` and `set` methods (e.g., `Complex64Array` and `Complex128Array`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filled = require( '@stdlib/array/filled' );
var resolveSetter = require( '@stdlib/array/base/resolve-setter' );

var arr = filled( 1.0, 10, 'float64' );
resolveSetter( arr )( arr, 2, 100.0 );
console.log( arr );

arr = filled( 2.0, 10, 'float32' );
resolveSetter( arr )( arr, 2, 100.0 );
console.log( arr );

arr = filled( 3, 10, 'int32' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 4, 10, 'int16' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 5, 10, 'int8' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 6, 10, 'uint32' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 7, 10, 'uint16' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 8, 10, 'uint8' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );

arr = filled( 9, 10, 'uint8c' );
resolveSetter( arr )( arr, 2, 100 );
console.log( arr );
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

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

</section>

<!-- /.links -->
