<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Minimum Data Type

> Determine the minimum array [data type][@stdlib/array/dtypes] of the closest "kind" necessary for storing a provided scalar value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var minDataType = require( '@stdlib/array/min-dtype' );
```

#### minDataType( value )

Returns the minimum array [data type][@stdlib/array/dtypes] of the closest "kind" necessary for storing a provided scalar value.

```javascript
var dt = minDataType( 3.141592653589793 );
// returns 'float32'

dt = minDataType( -3 );
// returns 'int8'

dt = minDataType( 3 );
// returns 'uint8'

dt = minDataType( '3' );
// returns 'generic'
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function does **not** provide precision guarantees for non-integer-valued numbers. In other words, the function returns the smallest possible floating-point (i.e., inexact) [data type][@stdlib/array/dtypes] for storing numbers having decimals.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var roundn = require( '@stdlib/math/base/special/roundn' );
var randu = require( '@stdlib/random/base/randu' );
var pow = require( '@stdlib/math/base/special/pow' );
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' );
var minDataType = require( '@stdlib/array/min-dtype' );

var dt;
var v;
var i;

// Generate numbers of varying magnitudes and determine the minimum data type for each value...
for ( i = 0; i < 100; i++ ) {
    v = randu() * pow( 2.0, discreteUniform( 0, 40 ) );
    if ( randu() < 0.5 ) {
        v *= -1;
    }
    v = roundn( v, discreteUniform( -1, 0 ) );
    dt = minDataType( v );
    console.log( 'min(%d) => %s', v, dt );
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

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/dtypes`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="package-name">[`@stdlib/array/promotion-rules`][@stdlib/array/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the array data type with the smallest size and closest kind to which array data types can be safely cast.</span>
-   <span class="package-name">[`@stdlib/array/safe-casts`][@stdlib/array/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/promotion-rules]: https://github.com/stdlib-js/array/tree/main/promotion-rules

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
