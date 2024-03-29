<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

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

# getter

> Return an accessor function for retrieving an element from an indexed array-like object.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var getter = require( '@stdlib/array/base/getter' );
```

#### getter( dtype )

Returns an accessor function for retrieving an element from an indexed array-like object.

```javascript
var arr = [ 1, 2, 3, 4 ];

var get = getter( 'generic' );
var v = get( arr, 2 );
// returns 3
```

The returned accessor function accepts the following arguments:

-   **arr**: input array.
-   **idx**: element index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an unsupported [`dtype`][@stdlib/array/dtypes], the function returns a default accessor function for accessing elements from any indexed array-like object; otherwise, the function returns an accessor function which should **only** be provided an array instance corresponding to `dtype` (e.g., if `dtype` is `'float64'`, the returned accessor function should only be provided instances of `Float64Array`).
-   Accessor functions do **not** verify that provided input arrays are array instances corresponding to `dtype`, as doing so would introduce performance overhead. If array instances corresponding to other data types are provided to an accessor function, JavaScript runtimes will consider the function polymorphic, potentially triggering de-optimization. In order to ensure maximum performance, **always** ensure that an accessor function is monomorphic.
-   Accessor functions do **not** perform bounds checking.
-   An _indexed_ array-like object is a data structure in which one retrieves elements via integer indices using bracket `[]` notation (e.g., `Float64Array`, `Int32Array`, `Array`, etc). This is in contrast to an _accessor_ array-like object in which one retrieves elements using `get` and `set` methods (e.g., `Complex64Array` and `Complex128Array`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filled = require( '@stdlib/array/filled' );
var dtype = require( '@stdlib/array/dtype' );
var getter = require( '@stdlib/array/base/getter' );

var arr = filled( 1.0, 10, 'float64' );
var v = getter( dtype( arr ) )( arr, 2 );
// returns 1.0

arr = filled( 2.0, 10, 'float32' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 2.0

arr = filled( 3, 10, 'int32' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 3

arr = filled( 4, 10, 'int16' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 4

arr = filled( 5, 10, 'int8' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 5

arr = filled( 6, 10, 'uint32' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 6

arr = filled( 7, 10, 'uint16' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 7

arr = filled( 8, 10, 'uint8' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 8

arr = filled( 9, 10, 'uint8c' );
v = getter( dtype( arr ) )( arr, 2 );
// returns 9
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
