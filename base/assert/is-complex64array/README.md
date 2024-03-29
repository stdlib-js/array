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

# isComplex64Array

> Test if a value is a [`Complex64Array`][@stdlib/array/complex64].

<section class="intro">

</section>

<!-- ./intro -->

<section class="usage">

## Usage

```javascript
var isComplex64Array = require( '@stdlib/array/base/assert/is-complex64array' );
```

#### isComplex64Array( value )

Tests if a value is a [`Complex64Array`][@stdlib/array/complex64].

```javascript
var Complex64Array = require( '@stdlib/array/complex64' );

var arr = new Complex64Array( 10 );
var bool = isComplex64Array( arr );
// returns true
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   This function is not robust and that is intentional. This function provides a lower cost way to reasonably determine whether an input value is a [`Complex64Array`][@stdlib/array/complex64] in order to avoid walking the prototype chain and resolving constructors, which is necessary for robust identification of cross-realm instances. For more robust validation, see [`@stdlib/assert/is-complex64array`][@stdlib/assert/is-complex64array].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline -->

<!-- eslint no-undef: "error" -->

```javascript
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Float32Array = require( '@stdlib/array/float32' );
var Float64Array = require( '@stdlib/array/float64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var Complex64Array = require( '@stdlib/array/complex64' );
var isComplex64Array = require( '@stdlib/array/base/assert/is-complex64array' );

var bool = isComplex64Array( new Complex64Array( 10 ) );
// returns true

bool = isComplex64Array( new Complex128Array( 10 ) );
// returns false

bool = isComplex64Array( [] );
// returns false

bool = isComplex64Array( new Float64Array( 10 ) );
// returns false

bool = isComplex64Array( new Float32Array( 10 ) );
// returns false

bool = isComplex64Array( new Int32Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint32Array( 10 ) );
// returns false

bool = isComplex64Array( new Int16Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint16Array( 10 ) );
// returns false

bool = isComplex64Array( new Int8Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint8Array( 10 ) );
// returns false

bool = isComplex64Array( new Uint8ClampedArray( 10 ) );
// returns false

bool = isComplex64Array( { 'length': 0 } );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

[@stdlib/assert/is-complex64array]: https://github.com/stdlib-js/assert-is-complex64array

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
