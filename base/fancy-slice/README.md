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

# slice

> Return a shallow copy of a portion of an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var slice = require( '@stdlib/array/base/fancy-slice' );
```

#### slice( x, s, strict )

Returns a shallow copy of a portion of an array.

```javascript
var Slice = require( '@stdlib/slice/ctor' );

var x = [ 1, 2, 3, 4, 5, 6 ];

var s = new Slice( 1, 4 );
var out = slice( x, s, false );
// returns [ 2, 3, 4 ]

var bool = ( out === x );
// returns false
```

The function supports the following parameters:

-   **x**: input array.
-   **s**: [slice][@stdlib/slice/ctor] object.
-   **strict**: boolean indicating whether to enforce strict bounds checking.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an array-like object having an unknown [data type][@stdlib/array/dtype], the function copies input array elements to a new generic array.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var zeroTo = require( '@stdlib/array/zero-to' );
var Slice = require( '@stdlib/slice/ctor' );
var slice = require( '@stdlib/array/base/fancy-slice' );

var x = zeroTo( 10, 'generic' );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

var s = new Slice();
var y = slice( x, s, false );
// returns [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

s = new Slice( null, null, -2 );
y = slice( x, s, false );
// returns [ 9, 7, 5, 3, 1 ]

s = new Slice( -2, null, -2 );
y = slice( x, s, false );
// returns [ 8, 6, 4, 2, 0 ]

s = new Slice( 2, -2 );
y = slice( x, s, false );
// returns [ 2, 3, 4, 5, 6, 7 ]

s = new Slice( 2, 5 );
y = slice( x, s, false );
// returns [ 2, 3, 4 ]

s = new Slice( 4, 1, -1 );
y = slice( x, s, false );
// returns [ 4, 3, 2 ]

s = new Slice( 5 );
y = slice( x, s, false );
// returns [ 0, 1, 2, 3, 4 ]

s = new Slice( 5, null );
y = slice( x, s, false );
// returns [ 5, 6, 7, 8, 9 ]
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

[@stdlib/slice/ctor]: https://github.com/stdlib-js/slice-ctor

[@stdlib/array/dtype]: https://github.com/stdlib-js/array/tree/main/dtype

</section>

<!-- /.links -->
