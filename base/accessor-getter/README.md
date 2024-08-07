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

# accessorGetter

> Return an accessor function for retrieving an element from an array-like object supporting the get/set protocol.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var accessorGetter = require( '@stdlib/array/base/accessor-getter' );
```

#### accessorGetter( dtype )

Returns an accessor function for retrieving an element from an array-like object supporting the get/set protocol.

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );
var realf = require( '@stdlib/complex/float32/real' );
var imagf = require( '@stdlib/complex/float32/imag' );

var arr = new Complex64Array( [ 1, 2, 3, 4 ] );

var get = accessorGetter( 'complex64' );
var v = get( arr, 1 );
// returns <Complex64>

var re = realf( v );
// returns 3.0

var im = imagf( v );
// returns 4.0
```

The returned accessor function accepts the following arguments:

-   **arr**: input array.
-   **idx**: element index.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an unsupported [`dtype`][@stdlib/array/dtypes], the function returns a default accessor function for accessing elements from any indexed array-like object supporting the get/set protocol; otherwise, the function returns an accessor function which should **only** be provided an array instance corresponding to `dtype` (e.g., if `dtype` is `'complex64'`, the returned accessor function should only be provided instances of `Complex64Array`).
-   Accessor functions do **not** verify that provided input arrays are array instances corresponding to `dtype`, as doing so would introduce performance overhead. If array instances corresponding to other data types are provided to an accessor function, JavaScript runtimes will consider the function polymorphic, potentially triggering de-optimization. In order to ensure maximum performance, **always** ensure that an accessor function is monomorphic.
-   Accessor functions do **not** perform bounds checking.
-   Accessor functions do **not** verify that provided input arrays actually implement the get/set protocol.
-   An array-like object supporting the get/set protocol is a data structure in which one accesses elements using explicit `get` and `set` methods (e.g., `Complex64Array` and `Complex128Array`).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var zeroTo = require( '@stdlib/array/base/zero-to' );
var dtype = require( '@stdlib/array/dtype' );
var accessorGetter = require( '@stdlib/array/base/accessor-getter' );

var arr = new Complex128Array( zeroTo( 10 ) );
var v = accessorGetter( dtype( arr ) )( arr, 2 );
// returns <Complex128>

console.log( v.toString() );
// => '4 + 5i'

arr = new Complex64Array( zeroTo( 10 ) );
v = accessorGetter( dtype( arr ) )( arr, 4 );
// returns <Complex64>

console.log( v.toString() );
// => '8 + 9i'
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
