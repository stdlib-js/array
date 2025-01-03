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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Arrays

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Arrays.

<section class="installation">

## Installation

```bash
npm install @stdlib/array
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

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
-   <span class="signature">[`linspace( start, stop, length[, options] )`][@stdlib/array/linspace]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced array over a specified interval.</span>
-   <span class="signature">[`logspace( a, b[, length] )`][@stdlib/array/logspace]</span><span class="delimiter">: </span><span class="description">generate a logarithmically spaced numeric array.</span>

</div>

<!-- </toc> -->

You can use the following functions to retrieve a list of available data types:

<!-- <toc pattern="*dtypes"> -->

<div class="namespace-toc">

-   <span class="signature">[`dtypes( [kind] )`][@stdlib/array/dtypes]</span><span class="delimiter">: </span><span class="description">list of array data types.</span>
-   <span class="signature">[`complexarrayDataTypes()`][@stdlib/array/typed-complex-dtypes]</span><span class="delimiter">: </span><span class="description">list of complex typed array data types.</span>
-   <span class="signature">[`typedarrayDataTypes()`][@stdlib/array/typed-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array data types.</span>
-   <span class="signature">[`floatarrayDataTypes()`][@stdlib/array/typed-float-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array floating-point data types.</span>
-   <span class="signature">[`intarrayDataTypes()`][@stdlib/array/typed-integer-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array integer data types.</span>
-   <span class="signature">[`realarrayDataTypes()`][@stdlib/array/typed-real-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array real-valued data types.</span>
-   <span class="signature">[`realarrayFloatDataTypes()`][@stdlib/array/typed-real-float-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array real-valued floating-point data types.</span>
-   <span class="signature">[`intarraySignedDataTypes()`][@stdlib/array/typed-signed-integer-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array signed integer data types.</span>
-   <span class="signature">[`intarrayUnsignedDataTypes()`][@stdlib/array/typed-unsigned-integer-dtypes]</span><span class="delimiter">: </span><span class="description">list of typed array unsigned integer data types.</span>

</div>

<!-- </toc> -->

Furthermore, the namespace contains utility functions to retrieve a given constructor:

<!-- <toc keywords="+constructors,+constructor"> -->

<div class="namespace-toc">

-   <span class="signature">[`ctors( dtype )`][@stdlib/array/ctors]</span><span class="delimiter">: </span><span class="description">array constructors.</span>
-   <span class="signature">[`ArrayIndex( x[, options] )`][@stdlib/array/index]</span><span class="delimiter">: </span><span class="description">array index constructor.</span>
-   <span class="signature">[`complexarrayCtors( dtype )`][@stdlib/array/typed-complex-ctors]</span><span class="delimiter">: </span><span class="description">complex typed array constructors.</span>
-   <span class="signature">[`typedarrayCtors( dtype )`][@stdlib/array/typed-ctors]</span><span class="delimiter">: </span><span class="description">typed array constructors.</span>
-   <span class="signature">[`floatarrayCtors( dtype )`][@stdlib/array/typed-float-ctors]</span><span class="delimiter">: </span><span class="description">floating-point typed array constructors.</span>
-   <span class="signature">[`intarrayCtors( dtype )`][@stdlib/array/typed-integer-ctors]</span><span class="delimiter">: </span><span class="description">integer-valued typed array constructors.</span>
-   <span class="signature">[`realarrayCtors( dtype )`][@stdlib/array/typed-real-ctors]</span><span class="delimiter">: </span><span class="description">typed array constructors.</span>
-   <span class="signature">[`realarrayFloatCtors( dtype )`][@stdlib/array/typed-real-float-ctors]</span><span class="delimiter">: </span><span class="description">real-valued floating-point typed array constructors.</span>
-   <span class="signature">[`intarraySignedCtors( dtype )`][@stdlib/array/typed-signed-integer-ctors]</span><span class="delimiter">: </span><span class="description">signed integer typed array constructors.</span>
-   <span class="signature">[`intarrayUnsignedCtors( dtype )`][@stdlib/array/typed-unsigned-integer-ctors]</span><span class="delimiter">: </span><span class="description">unsigned integer typed array constructors.</span>

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

-   <span class="signature">[`base`][@stdlib/array/base]</span><span class="delimiter">: </span><span class="description">base (i.e., lower-level) array utilities.</span>
-   <span class="signature">[`BooleanArray()`][@stdlib/array/bool]</span><span class="delimiter">: </span><span class="description">boolean array.</span>
-   <span class="signature">[`byteOrders()`][@stdlib/array/byte-orders]</span><span class="delimiter">: </span><span class="description">list of byte orders.</span>
-   <span class="signature">[`cartesianPower( x, n )`][@stdlib/array/cartesian-power]</span><span class="delimiter">: </span><span class="description">return the Cartesian power.</span>
-   <span class="signature">[`cartesianProduct( x1, x2 )`][@stdlib/array/cartesian-product]</span><span class="delimiter">: </span><span class="description">return the Cartesian product.</span>
-   <span class="signature">[`cartesianSquare( x )`][@stdlib/array/cartesian-square]</span><span class="delimiter">: </span><span class="description">return the Cartesian square.</span>
-   <span class="signature">[`Complex128Array()`][@stdlib/array/complex128]</span><span class="delimiter">: </span><span class="description">128-bit complex number array.</span>
-   <span class="signature">[`Complex64Array()`][@stdlib/array/complex64]</span><span class="delimiter">: </span><span class="description">64-bit complex number array.</span>
-   <span class="signature">[`convertSame( x, y )`][@stdlib/array/convert-same]</span><span class="delimiter">: </span><span class="description">convert an array to the same data type as a second input array.</span>
-   <span class="signature">[`convert( arr, dtype )`][@stdlib/array/convert]</span><span class="delimiter">: </span><span class="description">convert an array to an array of a different data type.</span>
-   <span class="signature">[`DataView( buffer[, byteOffset[, byteLength]] )`][@stdlib/array/dataview]</span><span class="delimiter">: </span><span class="description">constructor which returns a data view representing a provided array buffer.</span>
-   <span class="signature">[`defaults()`][@stdlib/array/defaults]</span><span class="delimiter">: </span><span class="description">default array settings.</span>
-   <span class="signature">[`dtype( array )`][@stdlib/array/dtype]</span><span class="delimiter">: </span><span class="description">return the data type of an array.</span>
-   <span class="signature">[`emptyLike( x[, dtype] )`][@stdlib/array/empty-like]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having the same length and data type as a provided array.</span>
-   <span class="signature">[`empty( length[, dtype] )`][@stdlib/array/empty]</span><span class="delimiter">: </span><span class="description">create an uninitialized array having a specified length.</span>
-   <span class="signature">[`filledBy()`][@stdlib/array/filled-by]</span><span class="delimiter">: </span><span class="description">create a filled array according to a provided callback function.</span>
-   <span class="signature">[`filled()`][@stdlib/array/filled]</span><span class="delimiter">: </span><span class="description">create a filled array.</span>
-   <span class="signature">[`fixedEndianFactory( dtype )`][@stdlib/array/fixed-endian-factory]</span><span class="delimiter">: </span><span class="description">return a typed array constructor for creating typed arrays having a specified byte order.</span>
-   <span class="signature">[`Float32ArrayFE()`][@stdlib/array/fixed-endian-float32]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in a specified byte order.</span>
-   <span class="signature">[`Float64ArrayFE()`][@stdlib/array/fixed-endian-float64]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in a specified byte order.</span>
-   <span class="signature">[`iterator2array( iterator[, out][, mapFcn[, thisArg]] )`][@stdlib/array/from-iterator]</span><span class="delimiter">: </span><span class="description">create (or fill) an array from an iterator.</span>
-   <span class="signature">[`scalar2array( value[, dtype] )`][@stdlib/array/from-scalar]</span><span class="delimiter">: </span><span class="description">create a single-element array containing a provided scalar value.</span>
-   <span class="signature">[`fullLike( x, value[, dtype] )`][@stdlib/array/full-like]</span><span class="delimiter">: </span><span class="description">create a filled array having the same length and data type as a provided array.</span>
-   <span class="signature">[`full( length, value[, dtype] )`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="signature">[`littleEndianFactory( dtype )`][@stdlib/array/little-endian-factory]</span><span class="delimiter">: </span><span class="description">return a typed array constructor for creating typed arrays stored in little-endian byte order.</span>
-   <span class="signature">[`Float32ArrayLE()`][@stdlib/array/little-endian-float32]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in little-endian byte order.</span>
-   <span class="signature">[`Float64ArrayLE()`][@stdlib/array/little-endian-float64]</span><span class="delimiter">: </span><span class="description">typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in little-endian byte order.</span>
-   <span class="signature">[`minDataType( value )`][@stdlib/array/min-dtype]</span><span class="delimiter">: </span><span class="description">determine the minimum array data type of the closest "kind" necessary for storing a provided scalar value.</span>
-   <span class="signature">[`mostlySafeCasts( [dtype] )`][@stdlib/array/mostly-safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast and, for floating-point data types, can be downcast.</span>
-   <span class="signature">[`mskfilter( x, mask )`][@stdlib/array/mskfilter]</span><span class="delimiter">: </span><span class="description">apply a mask to a provided input array.</span>
-   <span class="signature">[`mskput( x, mask, values[, options] )`][@stdlib/array/mskput]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="signature">[`mskreject( x, mask )`][@stdlib/array/mskreject]</span><span class="delimiter">: </span><span class="description">apply a mask to a provided input array.</span>
-   <span class="signature">[`nansLike( x[, dtype] )`][@stdlib/array/nans-like]</span><span class="delimiter">: </span><span class="description">create an array filled with NaNs and having the same length and data type as a provided array.</span>
-   <span class="signature">[`nans( length[, dtype] )`][@stdlib/array/nans]</span><span class="delimiter">: </span><span class="description">create an array filled with NaNs and having a specified length.</span>
-   <span class="signature">[`nextDataType( [dtype] )`][@stdlib/array/next-dtype]</span><span class="delimiter">: </span><span class="description">return the next larger array data type of the same kind.</span>
-   <span class="signature">[`oneToLike( x[, dtype] )`][@stdlib/array/one-to-like]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by `1` starting from one and having the same length and data type as a provided input array.</span>
-   <span class="signature">[`oneTo( n[, dtype] )`][@stdlib/array/one-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by `1` starting from one.</span>
-   <span class="signature">[`onesLike( x[, dtype] )`][@stdlib/array/ones-like]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having the same length and data type as a provided array.</span>
-   <span class="signature">[`ones( length[, dtype] )`][@stdlib/array/ones]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having a specified length.</span>
-   <span class="signature">[`place( x, mask, values[, options] )`][@stdlib/array/place]</span><span class="delimiter">: </span><span class="description">replace elements of an array with provided values according to a provided mask array.</span>
-   <span class="signature">[`typedarraypool()`][@stdlib/array/pool]</span><span class="delimiter">: </span><span class="description">allocate typed arrays from a typed array memory pool.</span>
-   <span class="signature">[`promotionRules( [dtype1, dtype2] )`][@stdlib/array/promotion-rules]</span><span class="delimiter">: </span><span class="description">return the array data type with the smallest size and closest "kind" to which array data types can be **safely** cast.</span>
-   <span class="signature">[`put( x, indices, values[, options] )`][@stdlib/array/put]</span><span class="delimiter">: </span><span class="description">replace specified elements of an array with provided values.</span>
-   <span class="signature">[`typedarrayReviver( key, value )`][@stdlib/array/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized typed array.</span>
-   <span class="signature">[`safeCasts( [dtype] )`][@stdlib/array/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast.</span>
-   <span class="signature">[`sameKindCasts( [dtype] )`][@stdlib/array/same-kind-casts]</span><span class="delimiter">: </span><span class="description">return a list of array data types to which a provided array data type can be safely cast or cast within the same "kind".</span>
-   <span class="signature">[`shape( arr )`][@stdlib/array/shape]</span><span class="delimiter">: </span><span class="description">determine (nested) array dimensions.</span>
-   <span class="signature">[`slice( x[, start[, end]] )`][@stdlib/array/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>
-   <span class="signature">[`take( x, indices[, options] )`][@stdlib/array/take]</span><span class="delimiter">: </span><span class="description">take elements from an array.</span>
-   <span class="signature">[`circarray2iterator( src[, options][, mapFcn[, thisArg]] )`][@stdlib/array/to-circular-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator which repeatedly iterates over the elements of an array-like object.</span>
-   <span class="signature">[`array2fancy( x[, options] )`][@stdlib/array/to-fancy]</span><span class="delimiter">: </span><span class="description">convert an array to an object supporting fancy indexing.</span>
-   <span class="signature">[`array2iteratorRight( src[, mapFcn[, thisArg]] )`][@stdlib/array/to-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object, iterating from right to left.</span>
-   <span class="signature">[`array2iterator( src[, mapFcn[, thisArg]] )`][@stdlib/array/to-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object.</span>
-   <span class="signature">[`typedarray2json( typedarray )`][@stdlib/array/to-json]</span><span class="delimiter">: </span><span class="description">return a JSON representation of a typed array.</span>
-   <span class="signature">[`sparsearray2iteratorRight( src[, mapFcn[, thisArg]] )`][@stdlib/array/to-sparse-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from a sparse array-like object, iterating from right to left.</span>
-   <span class="signature">[`sparsearray2iterator( src[, mapFcn[, thisArg]] )`][@stdlib/array/to-sparse-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from a sparse array-like object.</span>
-   <span class="signature">[`stridedarray2iterator( N, src, stride, offset[, mapFcn[, thisArg]] )`][@stdlib/array/to-strided-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from a strided array-like object.</span>
-   <span class="signature">[`arrayview2iteratorRight( src[, begin[, end]][, mapFcn[, thisArg]] )`][@stdlib/array/to-view-iterator-right]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object view, iterating from right to left.</span>
-   <span class="signature">[`arrayview2iterator( src[, begin[, end]][, mapFcn[, thisArg]] )`][@stdlib/array/to-view-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object view.</span>
-   <span class="signature">[`complexarray()`][@stdlib/array/typed-complex]</span><span class="delimiter">: </span><span class="description">create a complex number typed array.</span>
-   <span class="signature">[`realarray()`][@stdlib/array/typed-real]</span><span class="delimiter">: </span><span class="description">create a typed array.</span>
-   <span class="signature">[`zeroToLike( x[, dtype] )`][@stdlib/array/zero-to-like]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by `1` starting from zero and having the same length and data type as a provided input array.</span>
-   <span class="signature">[`zeroTo( n[, dtype] )`][@stdlib/array/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by `1` starting from zero.</span>
-   <span class="signature">[`zerosLike( x[, dtype] )`][@stdlib/array/zeros-like]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having the same length and data type as a provided array.</span>
-   <span class="signature">[`zeros( length[, dtype] )`][@stdlib/array/zeros]</span><span class="delimiter">: </span><span class="description">create a zero-filled array having a specified length.</span>

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

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array.svg
[npm-url]: https://npmjs.org/package/@stdlib/array

[test-image]: https://github.com/stdlib-js/array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array/tree/deno
[deno-readme]: https://github.com/stdlib-js/array/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array/tree/umd
[umd-readme]: https://github.com/stdlib-js/array/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array/tree/esm
[esm-readme]: https://github.com/stdlib-js/array/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array/main/LICENSE

<!-- <toc-links> -->

[@stdlib/array/base]: https://github.com/stdlib-js/array/tree/main/base

[@stdlib/array/bool]: https://github.com/stdlib-js/array/tree/main/bool

[@stdlib/array/byte-orders]: https://github.com/stdlib-js/array/tree/main/byte-orders

[@stdlib/array/cartesian-power]: https://github.com/stdlib-js/array/tree/main/cartesian-power

[@stdlib/array/cartesian-product]: https://github.com/stdlib-js/array/tree/main/cartesian-product

[@stdlib/array/cartesian-square]: https://github.com/stdlib-js/array/tree/main/cartesian-square

[@stdlib/array/complex128]: https://github.com/stdlib-js/array/tree/main/complex128

[@stdlib/array/complex64]: https://github.com/stdlib-js/array/tree/main/complex64

[@stdlib/array/convert-same]: https://github.com/stdlib-js/array/tree/main/convert-same

[@stdlib/array/convert]: https://github.com/stdlib-js/array/tree/main/convert

[@stdlib/array/dataview]: https://github.com/stdlib-js/array/tree/main/dataview

[@stdlib/array/defaults]: https://github.com/stdlib-js/array/tree/main/defaults

[@stdlib/array/dtype]: https://github.com/stdlib-js/array/tree/main/dtype

[@stdlib/array/empty-like]: https://github.com/stdlib-js/array/tree/main/empty-like

[@stdlib/array/empty]: https://github.com/stdlib-js/array/tree/main/empty

[@stdlib/array/filled-by]: https://github.com/stdlib-js/array/tree/main/filled-by

[@stdlib/array/filled]: https://github.com/stdlib-js/array/tree/main/filled

[@stdlib/array/fixed-endian-factory]: https://github.com/stdlib-js/array/tree/main/fixed-endian-factory

[@stdlib/array/fixed-endian-float32]: https://github.com/stdlib-js/array/tree/main/fixed-endian-float32

[@stdlib/array/fixed-endian-float64]: https://github.com/stdlib-js/array/tree/main/fixed-endian-float64

[@stdlib/array/from-iterator]: https://github.com/stdlib-js/array/tree/main/from-iterator

[@stdlib/array/from-scalar]: https://github.com/stdlib-js/array/tree/main/from-scalar

[@stdlib/array/full-like]: https://github.com/stdlib-js/array/tree/main/full-like

[@stdlib/array/full]: https://github.com/stdlib-js/array/tree/main/full

[@stdlib/array/little-endian-factory]: https://github.com/stdlib-js/array/tree/main/little-endian-factory

[@stdlib/array/little-endian-float32]: https://github.com/stdlib-js/array/tree/main/little-endian-float32

[@stdlib/array/little-endian-float64]: https://github.com/stdlib-js/array/tree/main/little-endian-float64

[@stdlib/array/min-dtype]: https://github.com/stdlib-js/array/tree/main/min-dtype

[@stdlib/array/mostly-safe-casts]: https://github.com/stdlib-js/array/tree/main/mostly-safe-casts

[@stdlib/array/mskfilter]: https://github.com/stdlib-js/array/tree/main/mskfilter

[@stdlib/array/mskput]: https://github.com/stdlib-js/array/tree/main/mskput

[@stdlib/array/mskreject]: https://github.com/stdlib-js/array/tree/main/mskreject

[@stdlib/array/nans-like]: https://github.com/stdlib-js/array/tree/main/nans-like

[@stdlib/array/nans]: https://github.com/stdlib-js/array/tree/main/nans

[@stdlib/array/next-dtype]: https://github.com/stdlib-js/array/tree/main/next-dtype

[@stdlib/array/one-to-like]: https://github.com/stdlib-js/array/tree/main/one-to-like

[@stdlib/array/one-to]: https://github.com/stdlib-js/array/tree/main/one-to

[@stdlib/array/ones-like]: https://github.com/stdlib-js/array/tree/main/ones-like

[@stdlib/array/ones]: https://github.com/stdlib-js/array/tree/main/ones

[@stdlib/array/place]: https://github.com/stdlib-js/array/tree/main/place

[@stdlib/array/pool]: https://github.com/stdlib-js/array/tree/main/pool

[@stdlib/array/promotion-rules]: https://github.com/stdlib-js/array/tree/main/promotion-rules

[@stdlib/array/put]: https://github.com/stdlib-js/array/tree/main/put

[@stdlib/array/reviver]: https://github.com/stdlib-js/array/tree/main/reviver

[@stdlib/array/safe-casts]: https://github.com/stdlib-js/array/tree/main/safe-casts

[@stdlib/array/same-kind-casts]: https://github.com/stdlib-js/array/tree/main/same-kind-casts

[@stdlib/array/shape]: https://github.com/stdlib-js/array/tree/main/shape

[@stdlib/array/slice]: https://github.com/stdlib-js/array/tree/main/slice

[@stdlib/array/take]: https://github.com/stdlib-js/array/tree/main/take

[@stdlib/array/to-circular-iterator]: https://github.com/stdlib-js/array/tree/main/to-circular-iterator

[@stdlib/array/to-fancy]: https://github.com/stdlib-js/array/tree/main/to-fancy

[@stdlib/array/to-iterator-right]: https://github.com/stdlib-js/array/tree/main/to-iterator-right

[@stdlib/array/to-iterator]: https://github.com/stdlib-js/array/tree/main/to-iterator

[@stdlib/array/to-json]: https://github.com/stdlib-js/array/tree/main/to-json

[@stdlib/array/to-sparse-iterator-right]: https://github.com/stdlib-js/array/tree/main/to-sparse-iterator-right

[@stdlib/array/to-sparse-iterator]: https://github.com/stdlib-js/array/tree/main/to-sparse-iterator

[@stdlib/array/to-strided-iterator]: https://github.com/stdlib-js/array/tree/main/to-strided-iterator

[@stdlib/array/to-view-iterator-right]: https://github.com/stdlib-js/array/tree/main/to-view-iterator-right

[@stdlib/array/to-view-iterator]: https://github.com/stdlib-js/array/tree/main/to-view-iterator

[@stdlib/array/typed-complex]: https://github.com/stdlib-js/array/tree/main/typed-complex

[@stdlib/array/typed-real]: https://github.com/stdlib-js/array/tree/main/typed-real

[@stdlib/array/zero-to-like]: https://github.com/stdlib-js/array/tree/main/zero-to-like

[@stdlib/array/zero-to]: https://github.com/stdlib-js/array/tree/main/zero-to

[@stdlib/array/zeros-like]: https://github.com/stdlib-js/array/tree/main/zeros-like

[@stdlib/array/zeros]: https://github.com/stdlib-js/array/tree/main/zeros

[@stdlib/array/ctors]: https://github.com/stdlib-js/array/tree/main/ctors

[@stdlib/array/index]: https://github.com/stdlib-js/array/tree/main/index

[@stdlib/array/typed-complex-ctors]: https://github.com/stdlib-js/array/tree/main/typed-complex-ctors

[@stdlib/array/typed-ctors]: https://github.com/stdlib-js/array/tree/main/typed-ctors

[@stdlib/array/typed-float-ctors]: https://github.com/stdlib-js/array/tree/main/typed-float-ctors

[@stdlib/array/typed-integer-ctors]: https://github.com/stdlib-js/array/tree/main/typed-integer-ctors

[@stdlib/array/typed-real-ctors]: https://github.com/stdlib-js/array/tree/main/typed-real-ctors

[@stdlib/array/typed-real-float-ctors]: https://github.com/stdlib-js/array/tree/main/typed-real-float-ctors

[@stdlib/array/typed-signed-integer-ctors]: https://github.com/stdlib-js/array/tree/main/typed-signed-integer-ctors

[@stdlib/array/typed-unsigned-integer-ctors]: https://github.com/stdlib-js/array/tree/main/typed-unsigned-integer-ctors

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array/tree/main/dtypes

[@stdlib/array/typed-complex-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-complex-dtypes

[@stdlib/array/typed-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-dtypes

[@stdlib/array/typed-float-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-float-dtypes

[@stdlib/array/typed-integer-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-integer-dtypes

[@stdlib/array/typed-real-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-real-dtypes

[@stdlib/array/typed-real-float-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-real-float-dtypes

[@stdlib/array/typed-signed-integer-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-signed-integer-dtypes

[@stdlib/array/typed-unsigned-integer-dtypes]: https://github.com/stdlib-js/array/tree/main/typed-unsigned-integer-dtypes

[@stdlib/array/datespace]: https://github.com/stdlib-js/array/tree/main/datespace

[@stdlib/array/incrspace]: https://github.com/stdlib-js/array/tree/main/incrspace

[@stdlib/array/linspace]: https://github.com/stdlib-js/array/tree/main/linspace

[@stdlib/array/logspace]: https://github.com/stdlib-js/array/tree/main/logspace

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

<!-- </toc-links> -->

</section>

<!-- /.links -->
