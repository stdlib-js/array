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

# Arrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Arrays.

<section class="installation">

## Installation

```bash
npm install @stdlib/array
```

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/array' );
```

#### ns

Arrays.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following array constructors:

<!-- <toc pattern="+(int*|float*|uint*|*buffer)"> -->

<div class="namespace-toc">

-   <span class="signature">[`ArrayBuffer( size )`][@stdlib/array/buffer]</span><span class="delimiter">: </span><span class="description">constructor which returns an object used to represent a generic, fixed-length raw binary data buffer.</span>
-   <span class="signature">[`Float32Array()`][@stdlib/array/float32]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in the platform byte order.</span>
-   <span class="signature">[`Float64Array()`][@stdlib/array/float64]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.</span>
-   <span class="signature">[`Int16Array()`][@stdlib/array/int16]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of twos-complement 16-bit signed integers in the platform byte order.</span>
-   <span class="signature">[`Int32Array()`][@stdlib/array/int32]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of twos-complement 32-bit signed integers in the platform byte order.</span>
-   <span class="signature">[`Int8Array()`][@stdlib/array/int8]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of twos-complement 8-bit signed integers in the platform byte order.</span>
-   <span class="signature">[`SharedArrayBuffer( size )`][@stdlib/array/shared-buffer]</span><span class="delimiter">: </span><span class="description">constructor returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.</span>
-   <span class="signature">[`Uint16Array()`][@stdlib/array/uint16]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.</span>
-   <span class="signature">[`Uint32Array()`][@stdlib/array/uint32]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.</span>
-   <span class="signature">[`Uint8Array()`][@stdlib/array/uint8]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.</span>
-   <span class="signature">[`Uint8ClampedArray()`][@stdlib/array/uint8c]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.</span>

</div>

<!-- </toc> -->

```javascript
var arr = new ns.Int32Array( 5 );
// returns <Int32Array>[ 0, 0, 0, 0, 0 ]
```

Alternatively, use the `typedarray` function to create a typed array of a given data type:

<!-- <toc pattern="typed"> -->

<div class="namespace-toc">

-   <span class="signature">[`typedarray()`][@stdlib/array/typed]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>

</div>

<!-- </toc> -->

```javascript
var arr1 = ns.typedarray( 5 );
// returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]

var arr2 = ns.typedarray( 5, 'uint8' );
// returns <Uint8Array>[ 0, 0, 0, 0, 0 ]
```

The namespace contains functions to create arrays pre-filled with spaced values:

<!-- <toc pattern="*space"> -->

<div class="namespace-toc">

-   <span class="signature">[`datespace( start, stop[, length][, opts] )`][@stdlib/array/datespace]</span><span class="delimiter">: </span><span class="description">generate an array of linearly spaced dates.</span>
-   <span class="signature">[`incrspace( start, stop[, increment] )`][@stdlib/array/incrspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array using a provided increment.</span>
-   <span class="signature">[`linspace( start, stop[, length] )`][@stdlib/array/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array.</span>
-   <span class="signature">[`logspace( a, b[, length] )`][@stdlib/array/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>

</div>

<!-- </toc> -->

You can use the following functions to retrieve a list of available data types:

<!-- <toc pattern="*dtypes"> -->

<div class="namespace-toc">

-   <span class="signature">[`arrayDataTypes()`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="signature">[`typedarrayComplexDataTypes()`][@stdlib/array/typed-complex-dtypes]</span><span class="delimiter">: </span><span class="description">list of complex typed array data types.</span>
-   <span class="signature">[`typedarrayDataTypes()`][@stdlib/array/typed-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array data types.</span>

</div>

<!-- </toc> -->

```javascript
var DTYPES = ns.arrayDataTypes();
// returns [ 'float32', 'float64', 'generic', 'int16', 'int32', 'int8', 'uint16', 'uint32', 'uint8', 'uint8c' ]
```

Furthermore, the namespace contains utility functions to retrieve a given constructor:

<!-- <toc keywords="+constructors,+constructor"> -->

<div class="namespace-toc">

-   <span class="signature">[`arrayCtors( dtype )`][@stdlib/array/ctors]</span><span class="delimiter">: </span><span class="description">array constructors.</span>
-   <span class="signature">[`typedarrayComplexCtors( dtype )`][@stdlib/array/typed-complex-ctors]</span><span class="delimiter">: </span><span class="description">complex typed array constructors.</span>
-   <span class="signature">[`typedarrayCtors( dtype )`][@stdlib/array/typed-ctors]</span><span class="delimiter">: </span><span class="description">typed array constructors.</span>

</div>

<!-- </toc> -->

```javascript
var ctor = ns.typedarrayCtors( 'float64' );
// returns <Function>

ctor = ns.typedarrayCtors( 'int' );
// returns null
```

Lastly, the namespace contains various other functions for dealing with arrays, including functions to convert arrays from one data type to another or to serialize them as JSON and vice versa.

<!-- <toc ignore="+(int*|float*|uint*|*buffer)" ignore="typed" ignore="*dtypes" keywords="-constructors,-constructor"> -->

<div class="namespace-toc">

-   <span class="signature">[`convertArray( arr, dtype )`][@stdlib/array/convert]</span><span class="delimiter">: </span><span class="description">convert an array to an array of a different data type.</span>
-   <span class="signature">[`convertArraySame( x, y )`][@stdlib/array/convert-same]</span><span class="delimiter">: </span><span class="description">convert an array to the same data type as a second input array.</span>
-   <span class="signature">[`arrayDataType( array )`][@stdlib/array/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an array.</span>
-   <span class="signature">[`reviveTypedArray( key, value )`][@stdlib/array/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized typed array.</span>
-   <span class="signature">[`typedarray2json( typedarray )`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils/keys' );
var ns = require( '@stdlib/array' );

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array.svg
[npm-url]: https://npmjs.org/package/@stdlib/array

[test-image]: https://github.com/stdlib-js/array/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/array/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array/main/LICENSE

<!-- <toc-links> -->

[@stdlib/array/ctors]: https://github.com/stdlib-js/array/tree/main/ctors

[@stdlib/array/typed-complex-ctors]: https://github.com/stdlib-js/array/tree/main/typed-complex-ctors

[@stdlib/array/typed-ctors]: https://github.com/stdlib-js/array/tree/main/typed-ctors

[@stdlib/array/datespace]: https://github.com/stdlib-js/array/tree/main/datespace

[@stdlib/array/linspace]: https://github.com/stdlib-js/array/tree/main/linspace

[@stdlib/array/incrspace]: https://github.com/stdlib-js/array/tree/main/incrspace

[@stdlib/array/logspace]: https://github.com/stdlib-js/array/tree/main/logspace

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/typed-complex-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-complex-dtypes

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-dtypes

[@stdlib/array/typed]: https://github.com/stdlib-js/array/tree/main/typed

[@stdlib/array/buffer]: https://github.com/stdlib-js/array/tree/main/buffer

[@stdlib/array/float32]: https://github.com/stdlib-js/array/tree/main/float32

[@stdlib/array/float64]: https://github.com/stdlib-js/array/tree/main/float64

[@stdlib/array/int16]: https://github.com/stdlib-js/array/tree/main/int16

[@stdlib/array/int32]: https://github.com/stdlib-js/array/tree/main/int32

[@stdlib/array/int8]: https://github.com/stdlib-js/array/tree/main/int8

[@stdlib/array/shared-buffer]: https://github.com/stdlib-js/array/tree/main/shared-buffer

[@stdlib/array/uint16]: https://github.com/stdlib-js/array/tree/main/uint16

[@stdlib/array/uint32]: https://github.com/stdlib-js/array/tree/main/uint32

[@stdlib/array/uint8]: https://github.com/stdlib-js/array/tree/main/uint8

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array/tree/main/uint8c

[@stdlib/array/convert]: https://github.com/stdlib-js/array/tree/main/convert

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array/tree/main/convert-same

[@stdlib/array/reviver]: https://github.com/stdlib-js/array/tree/main/reviver

[@stdlib/array/to-json]: https://github.com/stdlib-js/array/tree/main/to-json

[@stdlib/array/dtype]: https://github.com/stdlib-js/array/tree/main/dtype

<!-- </toc-links> -->

</section>

<!-- /.links -->
