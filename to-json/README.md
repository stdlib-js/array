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

# typedarray2json

> Return a [JSON][json] representation of a typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="usage">

## Usage

```javascript
var typedarray2json = require( '@stdlib/array/to-json' );
```

#### typedarray2json( typedarray )

Returns a [JSON][json] representation of a typed array.

```javascript
var Float64Array = require( '@stdlib/array/float64' );

var arr = new Float64Array( [ 5.0, 3.0 ] );

var json = typedarray2json( arr );
/* returns
    {
        'type': 'Float64Array',
        'data': [ 5.0, 3.0 ]
    }
*/
```

For guidance on reviving a JSON-serialized typed array, see [`reviver()`][@stdlib/array/reviver].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Supported typed array types:

    -   [`Float64Array`][@stdlib/array/float64]
    -   [`Float32Array`][@stdlib/array/float32]
    -   [`Complex128Array`][@stdlib/array/complex128]
    -   [`Complex64Array`][@stdlib/array/complex64]
    -   [`BooleanArray`][@stdlib/array/bool]
    -   [`Int32Array`][@stdlib/array/int32]
    -   [`Uint32Array`][@stdlib/array/uint32]
    -   [`Int16Array`][@stdlib/array/int16]
    -   [`Uint16Array`][@stdlib/array/uint16]
    -   [`Int8Array`][@stdlib/array/int8]
    -   [`Uint8Array`][@stdlib/array/uint8]
    -   [`Uint8ClampedArray`][@stdlib/array/uint8c]

-   The implementation provides basic support for custom typed arrays and sets the `type` field to the closest known typed array type.

    <!-- eslint-disable no-restricted-syntax, no-useless-constructor, new-cap, stdlib/require-globals, node/no-unsupported-features/es-syntax -->

    ```javascript
    class CustomArray extends Float64Array() {
        constructor( data ) {
            super( data );
        }
    }

    var arr = new CustomArray( [ 5.0, 3.0 ] );

    var json = typedarray2json( arr );
    /* returns
        {
            'type': 'Float64Array',
            'data': [ 5.0, 3.0 ]
        }
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array/float64' );
var Float32Array = require( '@stdlib/array/float32' );
var Int32Array = require( '@stdlib/array/int32' );
var Uint32Array = require( '@stdlib/array/uint32' );
var Int16Array = require( '@stdlib/array/int16' );
var Uint16Array = require( '@stdlib/array/uint16' );
var Int8Array = require( '@stdlib/array/int8' );
var Uint8Array = require( '@stdlib/array/uint8' );
var Uint8ClampedArray = require( '@stdlib/array/uint8c' );
var Complex64Array = require( '@stdlib/array/complex64' );
var Complex128Array = require( '@stdlib/array/complex128' );
var BooleanArray = require( '@stdlib/array/bool' );
var typedarray2json = require( '@stdlib/array/to-json' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
var json = typedarray2json( arr );
/* returns
    {
        'type': 'Float64Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new Float32Array( [ 5.0, -3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Float32Array',
        'data': [ 5.0, -3.0 ]
    }
*/

arr = new Complex128Array( [ 5.0, 3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Complex128Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new Complex64Array( [ 5.0, 3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Complex64Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new BooleanArray( [ true, false ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'BooleanArray',
        'data': [ 1, 0 ]
    }
*/

arr = new Int32Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int32Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint32Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint32Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Int16Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int16Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint16Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint16Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Int8Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int8Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint8Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint8Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Uint8ClampedArray( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint8ClampedArray',
        'data': [ 5, 3 ]
    }
*/
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

-   <span class="package-name">[`@stdlib/array/reviver`][@stdlib/array/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[json]: http://www.json.org/

[@stdlib/array/float64]: https://github.com/stdlib-js/array/tree/main/float64

[@stdlib/array/float32]: https://github.com/stdlib-js/array/tree/main/float32

[@stdlib/array/complex128]: https://github.com/stdlib-js/array/tree/main/complex128

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

[@stdlib/array/bool]: https://github.com/stdlib-js/array/tree/main/bool

[@stdlib/array/int32]: https://github.com/stdlib-js/array/tree/main/int32

[@stdlib/array/uint32]: https://github.com/stdlib-js/array/tree/main/uint32

[@stdlib/array/int16]: https://github.com/stdlib-js/array/tree/main/int16

[@stdlib/array/uint16]: https://github.com/stdlib-js/array/tree/main/uint16

[@stdlib/array/int8]: https://github.com/stdlib-js/array/tree/main/int8

[@stdlib/array/uint8]: https://github.com/stdlib-js/array/tree/main/uint8

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array/tree/main/uint8c

<!-- <related-links> -->

[@stdlib/array/reviver]: https://github.com/stdlib-js/array/tree/main/reviver

<!-- </related-links> -->

</section>

<!-- /.links -->
