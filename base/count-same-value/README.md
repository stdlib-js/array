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

# countSameValue

> Count the number of elements in an array that are equal to a specified value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var countSameValue = require( '@stdlib/array/base/count-same-value' );
```

#### countSameValue( x, value )

Counts the number of elements in an array that are equal to a specified value.

```javascript
var x = [ 0, 1, 0, 1, 2 ];

var out = countSameValue( x, 1 );
// returns 2
```

In contrast to an implementation using the strict equality operator `===`, the function distinguishes between `+0` and `-0` and treats `NaNs` as the same value.

```javascript
var x = [ NaN, NaN, NaN ];

var out = countSameValue( x, NaN );
// returns 3
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function uses the [SameValue Algorithm][@stdlib/assert/is-same-value] as specified in ECMAScript 5.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var bernoulli = require( '@stdlib/random/array/bernoulli' );
var countSameValue = require( '@stdlib/array/base/count-same-value' );

var x = bernoulli( 10, 0.5, {
    'dtype': 'generic'
});
console.log( x );

var n = countSameValue( x, 1 );
console.log( n );
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
