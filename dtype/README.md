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

# Data Type

> Return the data type of an array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var dtype = require( '@stdlib/array/dtype' );
```

#### dtype( array )

Returns the [data type][@stdlib/array/dtypes] of an `array`.

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var arr = new Float64Array( 10 );

var dt = dtype( arr );
// returns 'float64'
```

If provided an argument having an unknown or unsupported [data type][@stdlib/array/dtypes], the function returns `null`.

```javascript
var dt = dtype( 'beep' );
// returns null
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

<!-- eslint-disable stdlib/new-cap-error -->

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/array/dtypes' );
var ctors = require( '@stdlib/array/ctors' );
var dtype = require( '@stdlib/array/dtype' );

var DTYPES;
var ctor;
var arr;
var len;
var dt;
var i;

// Get a list of supported array data types:
DTYPES = dtypes();

// Array length:
len = 10;

// For each supported data type, create an array and confirm its data type...
for ( i = 0; i < DTYPES.length; i++ ) {
    ctor = ctors( DTYPES[ i ] );
    arr = new ctor( len );
    dt = dtype( arr );
    console.log( '%s == %s => %s', DTYPES[ i ], dt, DTYPES[ i ] === dt );
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

<!-- <related-links> -->

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

<!-- </related-links> -->

</section>

<!-- /.links -->
