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

# convert

> Convert an array to an array of a different [data type][@stdlib/array/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var convert = require( '@stdlib/array/convert' );
```

#### convert( arr, dtype )

Converts an array to an array of a different [data type][@stdlib/array/dtypes].

```javascript
var arr = [ 1.0, 2.0, 3.0 ];
var out = convert( arr, 'float32' );
// returns <Float32Array>[ 1.0, 2.0, 3.0 ]
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
var discreteUniform = require( '@stdlib/random/base/discrete-uniform' ).factory;
var filledarrayBy = require( '@stdlib/array/filled-by' );
var dtypes = require( '@stdlib/array/dtypes' );
var convert = require( '@stdlib/array/convert' );

// Create a generic array:
var arr = filledarrayBy( 5, 'generic', discreteUniform( -100, 100 ) );

// Get a list of array data types:
var DTYPES = dtypes();

// Convert the generic array to each array data type:
var out;
var i;
for ( i = 0; i < DTYPES.length; i++ ) {
    out = convert( arr, DTYPES[ i ] );
    console.log( out );
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

-   <span class="package-name">[`@stdlib/array/convert-same`][@stdlib/array/convert-same]</span><span class="delimiter">: </span><span class="description">convert an array to the same data type as a second input array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- <related-links> -->

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array/tree/main/convert-same

<!-- </related-links> -->

</section>

<!-- /.links -->
