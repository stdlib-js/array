/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import ArrayBuffer = require( './../../buffer' );
import Complex64Array = require( './../../complex64' );
import Complex128Array = require( './../../complex128' );
import convertArray = require( './../../convert' );
import convertArraySame = require( './../../convert-same' );
import arrayCtors = require( './../../ctors' );
import DataView = require( './../../dataview' );
import datespace = require( './../../datespace' );
import arrayDataType = require( './../../dtype' );
import arrayDataTypes = require( './../../dtypes' );
import filledarray = require( './../../filled' );
import Float32Array = require( './../../float32' );
import Float64Array = require( './../../float64' );
import iterator2array = require( './../../from-iterator' );
import incrspace = require( './../../incrspace' );
import Int8Array = require( './../../int8' );
import Int16Array = require( './../../int16' );
import Int32Array = require( './../../int32' );
import linspace = require( './../../linspace' );
import logspace = require( './../../logspace' );
import arrayMinDataType = require( './../../min-dtype' );
import arrayNextDataType = require( './../../next-dtype' );
import typedarraypool = require( './../../pool' );
import arrayPromotionRules = require( './../../promotion-rules' );
import reviveTypedArray = require( './../../reviver' );
import arraySafeCasts = require( './../../safe-casts' );
import arraySameKindCasts = require( './../../same-kind-casts' );
import arrayShape = require( './../../shape' );
import SharedArrayBuffer = require( './../../shared-buffer' );
import circarray2iterator = require( './../../to-circular-iterator' );
import array2iterator = require( './../../to-iterator' );
import array2iteratorRight = require( './../../to-iterator-right' );
import typedarray2json = require( './../../to-json' );
import sparsearray2iterator = require( './../../to-sparse-iterator' );
import sparsearray2iteratorRight = require( './../../to-sparse-iterator-right' );
import stridedarray2iterator = require( './../../to-strided-iterator' );
import arrayview2iterator = require( './../../to-view-iterator' );
import arrayview2iteratorRight = require( './../../to-view-iterator-right' );
import typedarray = require( './../../typed' );
import typedarrayComplexCtors = require( './../../typed-complex-ctors' );
import typedarrayComplexDataTypes = require( './../../typed-complex-dtypes' );
import typedarrayCtors = require( './../../typed-ctors' );
import typedarrayDataTypes = require( './../../typed-dtypes' );
import Uint8Array = require( './../../uint8' );
import Uint8ClampedArray = require( './../../uint8c' );
import Uint16Array = require( './../../uint16' );
import Uint32Array = require( './../../uint32' );
import constants = require( '@stdlib/constants/array' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Constructor which returns an object used to represent a generic, fixed-length raw binary data buffer.
	*/
	ArrayBuffer: typeof ArrayBuffer;

	/**
	* 64-bit complex number array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws ArrayBuffer byte length must be a multiple of `8`
	* @throws array-like object and typed array input arguments must have a length which is a multiple of two
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws byte offset must be a multiple of `8`
	* @throws view length must be a positive multiple of `8`
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @throws an iterator must return either a two element array containing real and imaginary components or a complex number
	* @returns complex number array
	*
	* @example
	* var arr = new ns.Complex64Array();
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new ns.Complex64Array( 2 );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new ns.Complex64Array( [ 1.0, -1.0 ] );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex64Array( buf );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex64Array( buf, 8 );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new ns.Complex64Array( buf, 8, 2 );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	Complex64Array: typeof Complex64Array;

	/**
	* 128-bit complex number array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws ArrayBuffer byte length must be a multiple of `8`
	* @throws array-like object and typed array input arguments must have a length which is a multiple of two
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws byte offset must be a multiple of `8`
	* @throws view length must be a positive multiple of `8`
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @throws an iterator must return either a two element array containing real and imaginary components or a complex number
	* @returns complex number array
	*
	* @example
	* var arr = new ns.Complex128Array();
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new ns.Complex128Array( 2 );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new ns.Complex128Array( [ 1.0, -1.0 ] );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex128Array( buf );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex128Array( buf, 8 );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new ns.Complex128Array( buf, 8, 2 );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	Complex128Array: typeof Complex128Array;

	/**
	* Converts an array to an array of a different data type.
	*
	* @param x - array to convert
	* @param dtype - output data type
	* @returns output array
	*
	* @example
	* var arr = [ 1.0, 2.0, 3.0, 4.0 ];
	* var out = ns.convertArray( arr, 'float64' );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*/
	convertArray: typeof convertArray;

	/**
	* Converts an array to the same data type as a second input array.
	*
	* @param x - array to convert
	* @param y - array having the desired output data type
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var y = new Float64Array( 0 );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
	* var out = ns.convertArraySame( x, y );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*/
	convertArraySame: typeof convertArraySame;

	/**
	* Returns an array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.arrayCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.arrayCtors( 'float' );
	* // returns null
	*/
	arrayCtors: typeof arrayCtors;

	/**
	* Constructor which returns a data view representing a provided array buffer.
	*/
	DataView: typeof DataView;

	/**
	* Generates an array of linearly spaced dates.
	*
	* @param start - start time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
	* @param stop - stop time as either a `Date` object, Unix timestamp, JavaScript timestamp, or date string
	* @param length - output array length (default: 100)
	* @param options - function options
	* @param options.round - specifies how sub-millisecond times should be rounded: [ 'floor', 'ceil', 'round' ] (default: 'floor' )
	* @throws length argument must a positive integer
	* @throws must provide valid options
	* @returns array of dates
	*
	* @example
	* var stop = '2014-12-02T07:00:54.973Z';
	* var start = new Date( stop ) - 60000;
	*
	* var arr = ns.datespace( start, stop, 6 );
	* // returns [...]
	*
	* @example
	* // Equivalent of Math.ceil():
	* var arr = ns.datespace( 1417503655000, 1417503655001, 3, { 'round': 'ceil' } );
	* // returns [...]
	*
	* // Equivalent of Math.round():
	* var arr = ns.datespace( 1417503655000, 1417503655001, 3, { 'round': 'round' } );
	* // returns [...]
	*/
	datespace: typeof datespace;

	/**
	* Returns the data type of an array.
	*
	* ## Notes
	*
	* -   If provided an argument having an unknown or unsupported type, the function returns `null`.
	*
	* @param value - input value
	* @returns data type
	*
	* @example
	* var dt = ns.arrayDataType( [ 1, 2, 3 ] );
	* // returns 'generic'
	*
	* var dt = ns.arrayDataType( 'beep' );
	* // returns null
	*/
	arrayDataType: typeof arrayDataType;

	/**
	* Returns a list of array data types.
	*
	* @returns list of array data types
	*
	* @example
	* var list = ns.arrayDataTypes();
	* // returns [ 'float32', 'float64', 'generic', 'int16', 'int32', 'int8', 'uint16', 'uint32', 'uint8', 'uint8c' ]
	*/
	arrayDataTypes: typeof arrayDataTypes;

	/**
	* Returns a filled typed array view of an `ArrayBuffer`.
	*
	* ## Notes
	*
	* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
	*
	* @param value - fill value
	* @param buffer - `ArrayBuffer`
	* @param dtype - data type (default: 'float64')
	* @throws must provide a recognized data type
	* @returns filled array
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.filledarray( 1.0, buf );
	* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.filledarray( 1.0, buf, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*
	*/
	filledarray: typeof filledarray;

	/**
	* Typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in the platform byte order.
	*/
	Float32Array: typeof Float32Array;

	/**
	* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
	*/
	Float64Array: typeof Float64Array;

	/**
	* Creates (or fills) an array from an iterator.
	*
	* @param iterator - source iterator
	* @param out - output array
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	* var randu = require( `@stdlib/random/iter/randu` );
	*
	* var iter = randu({
	*     'iter': 10
	* });
	*
	* var out = new Float64Array( 10 );
	* var arr = ns.iterator2array( iter, out );
	* // returns <Array>
	*/
	iterator2array: typeof iterator2array;

	/**
	* Generates a linearly spaced numeric array using a provided increment.
	*
	* @param x1 - first array value
	* @param x2 - array element bound
	* @param increment - increment (default: 1)
	* @throws length of created array must be less than `4294967295` (`2**32 - 1`)
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.incrspace( 0, 11, 2 );
	* // returns [ 0, 2, 4, 6, 8, 10 ]
	*/
	incrspace: typeof incrspace;

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 8-bit signed integers in the platform byte order.
	*/
	Int8Array: typeof Int8Array;

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 16-bit signed integers in the platform byte order.
	*/
	Int16Array: typeof Int16Array;

	/**
	* Typed array constructor which returns a typed array representing an array of twos-complement 32-bit signed integers in the platform byte order.
	*/
	Int32Array: typeof Int32Array;

	/**
	* Generates a linearly spaced numeric array.
	*
	* @param x1 - first array value
	* @param x2 - last array value
	* @param len - length of output array (default: 100)
	* @throws third argument must be a nonnegative integer
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.linspace( 0, 100, 6 );
	* // returns [ 0, 20, 40, 60, 80, 100 ]
	*/
	linspace: typeof linspace;

	/**
	* Generates a logarithmically spaced numeric array.
	*
	* @param a - exponent of start value
	* @param b - exponent of end value
	* @param len - length of output array (default: 10)
	* @throws third argument must be a nonnegative integer
	* @returns logarithmically spaced numeric array
	*
	* @example
	* var arr = ns.logspace( 0, 2, 6 );
	* // returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
	*/
	logspace: typeof logspace;

	/**
	* Returns the minimum array data type of the closest "kind" necessary for storing a provided scalar value.
	*
	* ## Notes
	*
	* -   The function does *not* provide precision guarantees for non-integer-valued real numbers. In other words, the function returns the smallest possible floating-point (i.e., inexact) data type for storing numbers having decimals.
	*
	* @param value - scalar value
	* @returns array data type
	*
	* @example
	* var dt = ns.arrayMinDataType( 3.141592653589793 );
	* // returns 'float32'
	*
	* @example
	* var dt = ns.arrayMinDataType( 3 );
	* // returns 'uint8'
	*/
	arrayMinDataType: typeof arrayMinDataType;

	/**
	* Returns the next larger array data type of the same kind.
	*
	* ## Notes
	*
	* -   If not provided a data type, the function returns a table.
	* -   If a data type does not have a next larger data type or the next larger type is not supported, the function returns `-1`.
	* -   If provided an unrecognized data type, the function returns `null`.
	*
	* @param dtype - array data type
	* @returns next larger data type(s) or null
	*
	* @example
	* var dt = ns.arrayNextDataType( 'float32' );
	* // returns 'float64'
	*/
	arrayNextDataType: typeof arrayNextDataType;

	/**
	* Returns an uninitialized typed array.
	*
	* ## Notes
	*
	* -   Memory is **not** initialized.
	* -   Memory is lazily allocated.
	* -   If the function returns `null`, the function was unable to allocate a new typed array from the typed array pool (most likely due to insufficient memory).
	*
	* @param arg - an array length or an array-like object
	* @param dtype - data type (default: 'float64')
	* @returns typed array or null
	*
	* @example
	* // Allocate an array of doubles:
	* var arr = ns.typedarraypool( 5, 'float64' );
	* // e.g., returns <Float64Array>[ 0.0, 0.0, 0.0, 0.0, 0.0 ]
	*
	* arr[ 0 ] = 3.14;
	* arr[ 1 ] = 3.14;
	*
	* // ...
	*
	* // Free the allocated memory to be used in a future allocation:
	* ns.typedarraypool.free( arr );
	*/
	typedarraypool: typeof typedarraypool;

	/**
	* Returns a type promotion table displaying array data types with the smallest size and closest "kind" to which array data types can be safely cast.
	*
	* @returns promotion rule table
	*
	* @example
	* var table = ns.arrayPromotionRules();
	* // returns {...}
	*/
	arrayPromotionRules: typeof arrayPromotionRules;

	/**
	* Revives a JSON-serialized typed array.
	*
	* @param key - key
	* @param value - value
	* @returns value or typed array
	*
	* @example
	* var parseJSON = require( `@stdlib/utils/parse-json` );
	*
	* var str = '{"type":"Float64Array","data":[5,3]}';
	*
	* var arr = parseJSON( str, ns.reviveTypedArray );
	* // returns <Float64Array>[ 5.0, 3.0 ]
	*/
	reviveTypedArray: typeof reviveTypedArray;

	/**
	* Returns a list of array data types to which a provided array data type can be safely cast.
	*
	* ## Notes
	*
	* -   If not provided an array data type, the function returns a casting table.
	* -   If provided an unrecognized array data type, the function returns `null`.
	*
	* @param dtype - array data type
	* @returns list of array data types or null
	*
	* @example
	* var list = ns.arraySafeCasts( 'float32' );
	* // returns [...]
	*/
	arraySafeCasts: typeof arraySafeCasts;

	/**
	* Returns a list of array data types to which a provided array data type can be safely cast or cast within the same "kind".
	*
	* ## Notes
	*
	* -   If not provided an array data type, the function returns a casting table.
	* -   If provided an unrecognized array data type, the function returns `null`.
	*
	* @param dtype - array data type
	* @returns list of array data types or null
	*
	* @example
	* var list = ns.arraySameKindCasts( 'float32' );
	* // returns [...]
	*/
	arraySameKindCasts: typeof arraySameKindCasts;

	/**
	* Determines (nested) array dimensions.
	*
	* @param arr - array
	* @returns array shape
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
	*
	* var shape = ns.arrayShape( arr );
	* // returns [ 3, 3 ]
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];
	*
	* var shape = ns.arrayShape( arr );
	* // returns [ 3 ]
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], null ];
	*
	* var shape = ns.arrayShape( arr );
	* // returns [ 3 ]
	*/
	arrayShape: typeof arrayShape;

	/**
	* Constructor returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.
	*/
	SharedArrayBuffer: typeof SharedArrayBuffer;

	/**
	* Returns an iterator which repeatedly iterates over each element in an array-like object.
	*
	* @param src - input value
	* @param options - function options
	* @param options.iter - number of iterations
	* @param options.dir - iteration direction
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var opts = {
	*     'dir': -1
	* };
	* var it = ns.circarray2iterator( [ 1, 2, 3, 4 ], opts );
	* // returns <Object>
	*
	* var v = it.next().value;
	* // returns 4
	*
	* v = it.next().value;
	* // returns 3
	*
	* v = it.next().value;
	* // returns 2
	*/
	circarray2iterator: typeof circarray2iterator;

	/**
	* Returns an iterator which iterates over each element in an array-like object.
	*
	* @param src - input value
	* @param mapFc - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.array2iterator( [ 1, 2, 3, 4 ] );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	array2iterator: typeof array2iterator;

	/**
	* Returns an iterator which iterates from right to left over each element in an array-like object.
	*
	* ## Notes
	*
	* -   For dynamic array resizing, the only behavior made intentionally consistent with iterating from left to right is when elements are pushed onto the beginning (end) of an array. In other words, iterating from left to right combined with `[].push()` is consistent with iterating from right to left combined with `[].unshift()`.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.array2iteratorRight( [ 1, 2, 3, 4 ] );
	*
	* var v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 2
	*
	* // ...
	*/
	array2iteratorRight: typeof array2iteratorRight;

	/**
	* Returns a JSON representation of a typed array.
	*
	* ## Notes
	*
	* -   We build a JSON object representing a typed array similar to how Node.js `Buffer` objects are represented. See [Buffer][1].
	*
	* [1]: https://nodejs.org/api/buffer.html#buffer_buf_tojson
	*
	* @param arr - typed array to serialize
	* @returns JSON representation
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var arr = new Float64Array( [ 5.0, 3.0 ] );
	* var json = ns.typedarray2json( arr );
	* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
	*/
	typedarray2json: typeof typedarray2json;

	/**
	* Returns an iterator which iterates over each element in a sparse array-like object.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.sparsearray2iterator( [ 1, , 3, 4 ] );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 4
	*/
	sparsearray2iterator: typeof sparsearray2iterator;

	/**
	* Returns an iterator which iterates from right to left over each element in a sparse array-like object.
	*
	* ## Notes
	*
	* -   For dynamic array resizing, the only behavior made intentionally consistent with iterating from left to right is when elements are pushed onto the beginning (end) of an array. In other words, iterating from left to right combined with `[].push()` is consistent with iterating from right to left combined with `[].unshift()`.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.sparsearray2iteratorRight( [ 1, , 3, 4 ] );
	*
	* var v = iter.next().value;
	* // returns 4
	*
	* v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 1
	*/
	sparsearray2iteratorRight: typeof sparsearray2iteratorRight;

	/**
	* Returns an iterator which iterates over elements in an array-like object according to specified stride parameters.
	*
	* @param N - number of values to iterate
	* @param src - input value
	* @param stride - stride length
	* @param offset - starting index
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @throws first argument must be a nonnegative integer
	* @throws third argument must be an integer
	* @throws fourth argument must be a nonnegative integer
	* @returns iterator
	*
	* @example
	* var values = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
	*
	* var N = 4;
	* var stride = -2;
	* var offset = 6;
	*
	* var iter = ns.stridedarray2iterator( N, values, stride, offset );
	*
	* var v = iter.next().value;
	* // returns 7
	*
	* v = iter.next().value;
	* // returns 5
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	stridedarray2iterator: typeof stridedarray2iterator;

	/**
	* Returns an iterator which iterates over each element in an array-like object view.
	*
	* @param src - input value
	* @param begin - starting index (inclusive) (default: 0)
	* @param end - ending index (non-inclusive) (default: src.length)
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.arrayview2iterator( [ 1, 2, 3, 4 ], 1, 3 );
	*
	* var v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	arrayview2iterator: typeof arrayview2iterator;

	/**
	* Returns an iterator which iterates from right to left over each element in an array-like object view.
	*
	* @param src - input value
	* @param begin - starting **view** index (inclusive) (default: 0)
	* @param end - ending **view** index (non-inclusive) (default: src.length)
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns iterator
	*
	* @example
	* var iter = ns.arrayview2iteratorRight( [ 1, 2, 3, 4 ], 1, 3 );
	*
	* var v = iter.next().value;
	* // returns 3
	*
	* v = iter.next().value;
	* // returns 2
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	arrayview2iteratorRight: typeof arrayview2iteratorRight;

	/**
	* Creates a typed array.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first typed array element (default: 0)
	* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
	* @param dtype - data type (default: 'float64')
	* @returns typed array
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.typedarray( buf, 8, 2 );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.typedarray( buf, 8, 2, 'int32' );
	* // returns <Int32Array>[ 0, 0 ]
	*/
	typedarray: typeof typedarray;

	/**
	* Returns a complex typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.typedarrayComplexCtors( 'complex128' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.typedarrayComplexCtors( 'float64' );
	* // returns null
	*/
	typedarrayComplexCtors: typeof typedarrayComplexCtors;

	/**
	* Returns a list of complex typed array data types.
	*
	* @returns list of complex typed array data types
	*
	* @example
	* var list = ns.typedarrayComplexDataTypes();
	* // returns [ 'complex64', 'complex128' ]
	*/
	typedarrayComplexDataTypes: typeof typedarrayComplexDataTypes;

	/**
	* Returns a typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.typedarrayCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.typedarrayCtors( 'float' );
	* // returns null
	*/
	typedarrayCtors: typeof typedarrayCtors;

	/**
	* Returns a list of typed array data types.
	*
	* @returns list of typed array data types
	*
	* @example
	* var list = ns.typedarrayDataTypes();
	* // returns [ 'float32', 'float64', 'int16', 'int32', 'int8', 'uint16', 'uint32', 'uint8', 'uint8c' ]
	*/
	typedarrayDataTypes: typeof typedarrayDataTypes;

	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
	*/
	Uint8Array: typeof Uint8Array;

	/**
	* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order clamped to 0-255.
	*/
	Uint8ClampedArray: typeof Uint8ClampedArray;

	/**
	* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
	*/
	Uint16Array: typeof Uint16Array;

	/**
	* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
	*/
	Uint32Array: typeof Uint32Array;

	/**
	* Array constants.
	*/
	constants: typeof constants;
}

/**
* Arrays.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
