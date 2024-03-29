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

# isSameKindCast

> Determine whether an array [data type][@stdlib/array/dtypes] can be safely cast to, or is of the same "kind" as, another array [data type][@stdlib/array/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var isSameKindCast = require( '@stdlib/array/base/assert/is-same-kind-data-type-cast' );
```

#### isSameKindCast( from, to )

Returns a `boolean` indicating whether an array [data type][@stdlib/array/dtypes] can be safely cast to, or is of the same "kind" as, another array [data type][@stdlib/array/dtypes] (e.g., casting between signed integers or between floats).

```javascript
var bool = isSameKindCast( 'float32', 'float64' );
// returns true

bool = isSameKindCast( 'uint16', 'int16' );
// returns false
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var cartesianSquare = require( '@stdlib/array/cartesian-square' );
var dtypes = require( '@stdlib/array/dtypes' );
var isSameKindCast = require( '@stdlib/array/base/assert/is-same-kind-data-type-cast' );

// Generate a list of dtype pairs:
var dt = cartesianSquare( dtypes() );

// For each data type pair, determine whether one can cast from one data type to another...
var i;
for ( i = 0; i < dt.length; i++ ) {
    console.log( '%s. Allowed cast? %s.', dt[i].join( ' => ' ), isSameKindCast.apply( null, dt[i] ) );
}
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
