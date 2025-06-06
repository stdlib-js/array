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

# lastIndexOfSameValue

> Return the index of the last element which equals a provided search element according to the [SameValue Algorithm][@stdlib/assert/is-same-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var lastIndexOfSameValue = require( '@stdlib/array/base/last-index-of-same-value' );
```

#### lastIndexOfSameValue( x, searchElement, fromIndex )

Returns the index of the last element which equals a provided search element according to the [SameValue Algorithm][@stdlib/assert/is-same-value].

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = lastIndexOfSameValue( x, 3, 5 );
// returns 2
```

If the function is unable to find an element which equals a provided search element, the function returns `-1`.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = lastIndexOfSameValue( x, 7, 5 );
// returns -1
```

To begin searching from a specific index, provide a corresponding `fromIndex` argument.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = lastIndexOfSameValue( x, 2, 3 );
// returns 2
```

If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = lastIndexOfSameValue( x, 2, -4 );
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
-   When searching for a search element, the function checks for equality using the [SameValue Algorithm][@stdlib/assert/is-same-value] as specified in ECMAScript 5. As a consequence, `NaN` values are considered equal, and `-0` and `+0` are considered distinct.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lastIndexOfSameValue = require( '@stdlib/array/base/last-index-of-same-value' );

var x = [ 'foo', 'bar', 'beep', 'boop', 'foo', 'bar' ];

var idx = lastIndexOfSameValue( x, 'beep', 5 );
// returns 2

idx = lastIndexOfSameValue( x, 'bop', 5 );
// returns -1

idx = lastIndexOfSameValue( x, 'foo', 5 );
// returns 4

idx = lastIndexOfSameValue( x, 'foo', -3 );
// returns 0

idx = lastIndexOfSameValue( x, 'foo', -50 );
// returns -1
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

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value

</section>

<!-- /.links -->
