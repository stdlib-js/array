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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import base = require( './../../base' );
import BooleanArray = require( './../../bool' );
import ArrayBuffer = require( './../../buffer' );
import byteOrders = require( './../../byte-orders' );
import cartesianPower = require( './../../cartesian-power' );
import cartesianProduct = require( './../../cartesian-product' );
import cartesianSquare = require( './../../cartesian-square' );
import Complex64Array = require( './../../complex64' );
import Complex128Array = require( './../../complex128' );
import convert = require( './../../convert' );
import convertSame = require( './../../convert-same' );
import ctors = require( './../../ctors' );
import DataView = require( './../../dataview' );
import datespace = require( './../../datespace' );
import defaults = require( './../../defaults' );
import dtype = require( './../../dtype' );
import dtypes = require( './../../dtypes' );
import empty = require( './../../empty' );
import emptyLike = require( './../../empty-like' );
import filled = require( './../../filled' );
import filledBy = require( './../../filled-by' );
import Float32Array = require( './../../float32' );
import Float64Array = require( './../../float64' );
import iterator2array = require( './../../from-iterator' );
import scalar2array = require( './../../from-scalar' );
import full = require( './../../full' );
import fullLike = require( './../../full-like' );
import incrspace = require( './../../incrspace' );
import ArrayIndex = require( './../../index' );
import Int8Array = require( './../../int8' );
import Int16Array = require( './../../int16' );
import Int32Array = require( './../../int32' );
import linspace = require( './../../linspace' );
import logspace = require( './../../logspace' );
import minDataType = require( './../../min-dtype' );
import mostlySafeCasts = require( './../../mostly-safe-casts' );
import mskfilter = require( './../../mskfilter' );
import mskput = require( './../../mskput' );
import mskreject = require( './../../mskreject' );
import nans = require( './../../nans' );
import nansLike = require( './../../nans-like' );
import nextDataType = require( './../../next-dtype' );
import oneTo = require( './../../one-to' );
import oneToLike = require( './../../one-to-like' );
import ones = require( './../../ones' );
import onesLike = require( './../../ones-like' );
import place = require( './../../place' );
import typedarraypool = require( './../../pool' );
import promotionRules = require( './../../promotion-rules' );
import put = require( './../../put' );
import typedarrayReviver = require( './../../reviver' );
import safeCasts = require( './../../safe-casts' );
import sameKindCasts = require( './../../same-kind-casts' );
import shape = require( './../../shape' );
import SharedArrayBuffer = require( './../../shared-buffer' );
import slice = require( './../../slice' );
import take = require( './../../take' );
import circarray2iterator = require( './../../to-circular-iterator' );
import array2fancy = require( './../../to-fancy' );
import array2iterator = require( './../../to-iterator' );
import array2iteratorRight = require( './../../to-iterator-right' );
import typedarray2json = require( './../../to-json' );
import sparsearray2iterator = require( './../../to-sparse-iterator' );
import sparsearray2iteratorRight = require( './../../to-sparse-iterator-right' );
import stridedarray2iterator = require( './../../to-strided-iterator' );
import arrayview2iterator = require( './../../to-view-iterator' );
import arrayview2iteratorRight = require( './../../to-view-iterator-right' );
import typedarray = require( './../../typed' );
import complexarray = require( './../../typed-complex' );
import complexarrayCtors = require( './../../typed-complex-ctors' );
import complexarrayDataTypes = require( './../../typed-complex-dtypes' );
import typedarrayCtors = require( './../../typed-ctors' );
import typedarrayDataTypes = require( './../../typed-dtypes' );
import floatarrayCtors = require( './../../typed-float-ctors' );
import floatarrayDataTypes = require( './../../typed-float-dtypes' );
import intarrayCtors = require( './../../typed-integer-ctors' );
import intarrayDataTypes = require( './../../typed-integer-dtypes' );
import realarray = require( './../../typed-real' );
import realarrayCtors = require( './../../typed-real-ctors' );
import realarrayDataTypes = require( './../../typed-real-dtypes' );
import realarrayFloatCtors = require( './../../typed-real-float-ctors' );
import realarrayFloatDataTypes = require( './../../typed-real-float-dtypes' );
import intarraySignedCtors = require( './../../typed-signed-integer-ctors' );
import intarraySignedDataTypes = require( './../../typed-signed-integer-dtypes' );
import intarrayUnsignedCtors = require( './../../typed-unsigned-integer-ctors' );
import intarrayUnsignedDataTypes = require( './../../typed-unsigned-integer-dtypes' );
import Uint8Array = require( './../../uint8' );
import Uint8ClampedArray = require( './../../uint8c' );
import Uint16Array = require( './../../uint16' );
import Uint32Array = require( './../../uint32' );
import zeroTo = require( './../../zero-to' );
import zeroToLike = require( './../../zero-to-like' );
import zeros = require( './../../zeros' );
import zerosLike = require( './../../zeros-like' );
import constants = require( '@stdlib/constants/array' );

/**
* Interface describing the `array` namespace.
*/
interface Namespace {
	/**
	* Base (i.e., lower-level) array utilities.
	*/
	base: typeof base;

	/**
	* Boolean array constructor.
	*
	* @param arg - length, typed array, array-like object, or buffer
	* @param byteOffset - byte offset (default: 0)
	* @param length - view length
	* @throws if provided only a single argument, must provide a valid argument
	* @throws byte offset must be a nonnegative integer
	* @throws must provide sufficient memory to accommodate byte offset and view length requirements
	* @returns boolean array
	*
	* @example
	* var arr = new ns.BooleanArray();
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new ns.BooleanArray( 2 );
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new ns.BooleanArray( [ true, false ] );
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.BooleanArray( buf );
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.BooleanArray( buf, 8 );
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new ns.BooleanArray( buf, 8, 2 );
	* // returns <ns.BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	BooleanArray: typeof BooleanArray;

	/**
	* Constructor which returns an object used to represent a generic, fixed-length raw binary data buffer.
	*/
	ArrayBuffer: typeof ArrayBuffer;

	/**
	* Returns a list of byte orders.
	*
	* ## Notes
	*
	* -   The output array contains the following orders:
	*
	*     -   little-endian: bytes are ordered from least-to-most significant byte.
	*     -   big-endian: bytes are ordered from most-to-least significant byte.
	*
	* @returns list of byte orders
	*
	* @example
	* var list = ns.byteOrders();
	* // e.g., returns [ 'little-endian', 'big-endian' ]
	*/
	byteOrders: typeof byteOrders;

	/**
	* Returns the Cartesian power.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	* -   If `n` is less than or equal to zero, the function returns an empty array.
	*
	* @param x - input array
	* @param n - power
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianPower( x, 2 );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianPower: typeof cartesianPower;

	/**
	* Returns the Cartesian product.
	*
	* ## Notes
	*
	* -   If provided one or more empty arrays, the function returns an empty array.
	*
	* @param x1 - first input array
	* @param x2 - second input array
	* @returns Cartesian product
	*
	* @example
	* var x1 = [ 1, 2, 3 ];
	* var x2 = [ 4, 5 ];
	*
	* var out = ns.cartesianProduct( x1, x2 );
	* // returns [ [ 1, 4 ], [ 1, 5 ], [ 2, 4 ], [ 2, 5 ], [ 3, 4 ], [ 3, 5 ] ]
	*/
	cartesianProduct: typeof cartesianProduct;

	/**
	* Returns the Cartesian square.
	*
	* ## Notes
	*
	* -   If provided an empty array, the function returns an empty array.
	*
	* @param x - input array
	* @returns Cartesian product
	*
	* @example
	* var x = [ 1, 2 ];
	*
	* var out = ns.cartesianSquare( x );
	* // returns [ [ 1, 1 ], [ 1, 2 ], [ 2, 1 ], [ 2, 2 ] ]
	*/
	cartesianSquare: typeof cartesianSquare;

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
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex64Array( buf );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex64Array( buf, 8 );
	* // returns <ns.Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
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
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex128Array( buf );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new ns.Complex128Array( buf, 8 );
	* // returns <ns.Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
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
	* var out = ns.convert( arr, 'float64' );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*/
	convert: typeof convert;

	/**
	* Converts an array to the same data type as a second input array.
	*
	* @param x - array to convert
	* @param y - array having the desired output data type
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../float64' );
	*
	* var x = [ 1.0, 2.0, 3.0, 4.0 ];
	* var y = new Float64Array( 0 );
	*
	* var out = ns.convertSame( x, y );
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*/
	convertSame: typeof convertSame;

	/**
	* Returns an array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.ctors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.ctors( 'float' );
	* // returns null
	*/
	ctors: typeof ctors;

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
	* Returns default ndarray settings.
	*
	* @returns default settings
	*
	* @example
	* var o = ns.defaults();
	* // returns {...}
	*/
	defaults: typeof defaults;

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
	* var dt = ns.dtype( [ 1, 2, 3 ] );
	* // returns 'generic'
	*
	* var dt = ns.dtype( 'beep' );
	* // returns null
	*/
	dtype: typeof dtype;

	/**
	* Returns a list of array data types.
	*
	* @param kind - data type kind
	* @returns list of array data types
	*
	* @example
	* var list = ns.dtypes();
	* // e.g., returns [ 'float32', 'float64', ... ]
	*
	* @example
	* var list = ns.dtypes( 'floating_point' );
	* // returns [...]
	*/
	dtypes: typeof dtypes;

	/**
	* Creates an uninitialized array having a specified length.
	*
	* ## Notes
	*
	* -   In browser environments, the function always returns zero-filled arrays.
	* -   If `dtype` is `'generic'`, the function always returns a zero-filled array.
	* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
	*
	* @param length - array length
	* @param dtype - data type (default: 'float64')
	* @returns empty array
	*
	* @example
	* var arr = ns.empty( 2 );
	* // returns <Float64Array>
	*
	* @example
	* var arr = ns.empty( 2, 'float32' );
	* // returns <Float32Array>
	*/
	empty: typeof empty;

	/**
	* Creates an uninitialized array having the same length as a provided input array.
	*
	* ## Notes
	*
	* -   In browser environments, the function always returns zero-filled arrays.
	* -   If `dtype` is `'generic'`, the function always returns a zero-filled array.
	* -   In Node.js versions `>=3.0.0`, the underlying memory of returned typed arrays is **not** initialized. Memory contents are unknown and may contain **sensitive** data.
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns empty array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float32Array>[ 0.0, 0.0 ]
	*
	* var arr = ns.emptyLike( x, 'float32' );
	* // returns <Float32Array>
	*/
	emptyLike: typeof emptyLike;

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
	* @returns filled array
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.filled( 1.0, buf );
	* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.filled( 1.0, buf, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ]
	*/
	filled: typeof filled;

	/**
	* Returns a filled typed array view of an `ArrayBuffer` according to a provided callback function.
	*
	* ## Notes
	*
	* -   Creating a generic array from an `ArrayBuffer` is **not** supported.
	*
	* @param buffer - `ArrayBuffer`
	* @param dtype - data type
	* @param clbk - callback function
	* @param thisArg - callback function execution context
	* @returns filled array
	*
	* @example
	* var constantFunction = require( '@stdlib/utils/constant-function' );
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.filledBy( buf, 'float64', constantFunction( 1.0 ) );
	* // returns <Float64Array>[ 1.0, 1.0, 1.0, 1.0 ]
	*/
	filledBy: typeof filledBy;

	/**
	* Typed array constructor which returns a typed array representing an array of single-precision floating-point numbers in the platform byte order.
	*/
	Float32Array: typeof Float32Array;

	/**
	* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
	*/
	Float64Array: typeof Float64Array;

	/**
	* Fills an array from an iterator.
	*
	* @param iterator - source iterator
	* @param out - output array
	* @param mapFcn - function to invoke for each iterated value
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../float64' );
	* var randu = require( '@stdlib/random/iter/randu' );
	*
	* function scale( v ) {
	*     return v * 2.0;
	* }
	*
	* var iter = randu({
	*     'iter': 10
	* });
	*
	* var out = new Float64Array( 10 );
	* var arr = ns.iterator2array( iter, out, scale );
	* // returns <Array>
	*/
	iterator2array: typeof iterator2array;

	/**
	* Returns a single-element array containing a provided scalar value.
	*
	* ## Notes
	*
	* -   If a `dtype` argument is not provided and `value`
	*
	*     -   is a number, the default data type is the default real-valued floating-point data type.
	*     -   is a boolean, the default data type is the default boolean data type.
	*     -   is a complex number object of a known complex data type, the data type is the same as the provided value.
	*     -   is a complex number object of an unknown complex data type, the default data type is the default complex-valued floating-point data type.
	*     -   is any other value type, the default data type is `'generic'`.
	*
	* @param value - scalar value
	* @param dtype - output array data type
	* @returns output array
	*
	* @example
	* var x = ns.scalar2array( 1.0, generic' );
	* // returns [ 1.0 ]
	*/
	scalar2array: typeof scalar2array;

	/**
	* Creates a filled array having a specified length.
	*
	* @param length - array length
	* @param value - fill value
	* @param dtype - data type (default: 'float64')
	* @returns filled array
	*
	* @example
	* var arr = ns.full( 2, 1.0 );
	* // returns <Float64Array>[ 1.0, 1.0 ]
	*
	* @example
	* var arr = ns.full( 2, 1.0, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0 ]
	*/
	full: typeof full;

	/**
	* Creates a filled array having the same length and data type as a provided input array.
	*
	* @param x - input array from which to derive the output array length
	* @param value - fill value
	* @param dtype - data type
	* @returns filled array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.fullLike( x, 1.0 );
	* // returns <Float64Array>[ 1.0, 1.0 ]
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.fullLike( x, 1.0, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0 ]
	*/
	fullLike: typeof fullLike;

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
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var Uint8Array = require( './../../uint8' );
	*
	* var x = new Uint8Array( [ 1, 0, 1, 0 ] );
	*
	* var idx = new ns.ArrayIndex( x );
	* // returns <ns.ArrayIndex>
	*/
	ArrayIndex: typeof ArrayIndex;

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
	* Generates a linearly spaced array over a specified interval.
	*
	* @param start - start of interval
	* @param stop - end of interval
	* @param len - length of output array
	* @param options - function options
	* @param options.dtype - output array data type
	* @param options.endpoint - `boolean` indicating whether to include the `stop` value in the output array
	* @returns linearly spaced array
	*
	* @example
	* var arr = ns.linspace( 0.0, 100.0, 6 );
	* // returns <Float64Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*
	* @example
	* var Float32Array = require( './../../float32' );
	*
	* var arr = new Float32Array( 6 );
	* var out = ns.linspace.assign( 0.0, 100.0, arr );
	* // returns <Float32Array>[ 0.0, 20.0, 40.0, 60.0, 80.0, 100.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
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
	* -   The function does *not* provide precision guarantees for non-integer-valued numbers. In other words, the function returns the smallest possible floating-point (i.e., inexact) data type for storing numbers having decimals.
	*
	* @param value - scalar value
	* @returns array data type
	*
	* @example
	* var dt = ns.minDataType( 'beep' );
	* // returns 'generic'
	*/
	minDataType: typeof minDataType;

	/**
	* Returns a list of array data types to which a provided array data type can be safely cast and, for floating-point data types, can be downcast.
	*
	* ## Notes
	*
	* -   If not provided an array data type, the function returns a casting table.
	* -   If provided an unrecognized array data type, the function returns `null`.
	*
	* @param dtype - array data type value
	* @returns list of array data types or null
	*
	* @example
	* var list = ns.mostlySafeCasts( 'float32' );
	* // returns [...]
	*/
	mostlySafeCasts: typeof mostlySafeCasts;

	/**
	* Returns a new array by applying a mask to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.mskfilter( x, [ 0, 1, 0, 1 ] );
	* // returns [ 2, 4 ]
	*/
	mskfilter: typeof mskfilter;

	/**
	* Replaces elements of an array with provided values according to a provided mask array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param values - values to set
	* @param options - function options
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var mask = [ 1, 0, 0, 1 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.mskput( x, mask, values );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.mskput( x, [ 1, 0, 0, 1 ], [ 30 ] );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	mskput: typeof mskput;

	/**
	* Returns a new array by applying a mask to a provided input array.
	*
	* @param x - input array
	* @param mask - mask array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.mskreject( x, [ 0, 1, 0, 1 ] );
	* // returns [ 1, 3 ]
	*/
	mskreject: typeof mskreject;

	/**
	* Creates an array filled with NaNs and having a specified length.
	*
	* The function recognizes the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `generic`: generic JavaScript values
	*
	* @param length - array length
	* @param dtype - data type (default: 'float64')
	* @returns filled array
	*
	* @example
	* var arr = ns.nans( 2 );
	* // returns <Float64Array>[ NaN, NaN ]
	*
	* @example
	* var arr = ns.nans( 2, 'float32' );
	* // returns <Float32Array>[ NaN, NaN ]
	*/
	nans: typeof nans;

	/**
	* Creates an array filled with NaNs and having the same length and data type as a provided input array.
	*
	* The function supports the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `generic`: generic JavaScript values
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns filled array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.nansLike( x );
	* // returns <Float64Array>[ NaN, NaN ]
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.nansLike( x, 'float32' );
	* // returns <Float32Array>[ NaN, NaN ]
	*/
	nansLike: typeof nansLike;

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
	* var table = ns.nextDataType();
	* // returns {...}
	*
	* @example
	* var dt = ns.nextDataType( 'float32' );
	* // returns 'float64'
	*/
	nextDataType: typeof nextDataType;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one.
	*
	* @param n - number of elements
	* @param dtype - data type (default: 'float64')
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.oneTo( 2 );
	* // returns <Float64Array>[ 1.0, 2.0 ]
	*
	* @example
	* var arr = ns.oneTo( 2, 'float32' );
	* // returns <Float32Array>[ 1.0, 2.0 ]
	*/
	oneTo: typeof oneTo;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns linearly spaced numeric array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float32' );
	* // returns <Float32Array>[ 0.0, 0.0 ]
	*
	* var y = ns.oneToLike( x );
	* // returns <Float32Array>[ 1.0, 2.0 ]
	*/
	oneToLike: typeof oneToLike;

	/**
	* Creates an array filled with ones and having a specified length.
	*
	* The function recognizes the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `int32`: 32-bit two's complement signed integers
	* -   `uint32`: 32-bit unsigned integers
	* -   `int16`: 16-bit two's complement signed integers
	* -   `uint16`: 16-bit unsigned integers
	* -   `int8`: 8-bit two's complement signed integers
	* -   `uint8`: 8-bit unsigned integers
	* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
	* -   `generic`: generic JavaScript values
	*
	* @param length - array length
	* @param dtype - data type (default: 'float64')
	* @returns filled array
	*
	* @example
	* var arr = ns.ones( 2 );
	* // returns <Float64Array>[ 1.0, 1.0 ]
	*
	* @example
	* var arr = ns.ones( 2, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0 ]
	*/
	ones: typeof ones;

	/**
	* Creates an array filled with ones and having the same length as a provided input array.
	*
	* The function supports the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `int32`: 32-bit two's complement signed integers
	* -   `uint32`: 32-bit unsigned integers
	* -   `int16`: 16-bit two's complement signed integers
	* -   `uint16`: 16-bit unsigned integers
	* -   `int8`: 8-bit two's complement signed integers
	* -   `uint8`: 8-bit unsigned integers
	* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
	* -   `generic`: generic JavaScript values
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns filled array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.onesLike( x, 'float32' );
	* // returns <Float32Array>[ 1.0, 1.0 ]
	*/
	onesLike: typeof onesLike;

	/**
	* Replaces elements of an array with provided values according to a provided mask array.
	*
	* @param x - input array
	* @param mask - mask array
	* @param values - values to set
	* @param options - function options
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var mask = [ 0, 1, 1, 0 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.place( x, mask, values );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.place( x, [ 0, 1, 1, 0 ], [ 30 ] );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	place: typeof place;

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
	* var table = ns.promotionRules();
	* // returns {...}
	*/
	promotionRules: typeof promotionRules;

	/**
	* Replaces specified elements of an array with provided values.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param values - values to set
	* @param options - function options
	* @returns input array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var indices = [ 1, 2 ];
	* var values = [ 20, 30 ];
	*
	* var out = ns.put( x, indices, values );
	* // returns [ 1, 20, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = ns.put( x, [ 1, 2 ], [ 30 ] );
	* // returns [ 1, 30, 30, 4 ]
	*
	* var bool = ( out === x );
	* // returns true
	*/
	put: typeof put;

	/**
	* Revives a JSON-serialized typed array.
	*
	* @param key - key
	* @param value - value
	* @returns value or typed array
	*
	* @example
	* var parseJSON = require( '@stdlib/utils/parse-json' );
	*
	* var str = '{"type":"Float64Array","data":[5,3]}';
	*
	* var arr = parseJSON( str, ns.typedarrayReviver );
	* // returns <Float64Array>[ 5.0, 3.0 ]
	*/
	typedarrayReviver: typeof typedarrayReviver;

	/**
	* Returns a list of array data types to which a provided array data type can be safely cast.
	*
	* ## Notes
	*
	* -   If not provided an array data type, the function returns a casting table.
	* -   If provided an unrecognized array data type, the function returns `null`.
	*
	* @param dtype - array data type
	* @returns a casting table, a list of array data types, or null
	*
	* @example
	* var table = ns.safeCasts();
	* // returns {...}
	*
	* @example
	* var list = ns.safeCasts( 'float32' );
	* // returns [...]
	*
	* @example
	* var list = ns.safeCasts( 'float' );
	* // returns null
	*/
	safeCasts: typeof safeCasts;

	/**
	* Returns a list of array data types to which a provided array data type can be safely cast or cast within the same "kind".
	*
	* ## Notes
	*
	* -   If not provided an array data type, the function returns a casting table.
	* -   If provided an unrecognized array data type, the function returns `null`.
	*
	* @param dtype - array data type
	* @returns a table, a list of array data types, or null
	*
	* @example
	* var table = ns.sameKindCasts();
	* // returns {...}
	*
	* @example
	* var list = ns.sameKindCasts( 'float32' );
	* // returns [...]
	*
	* @example
	* var list = ns.sameKindCasts( 'float' );
	* // returns null
	*/
	sameKindCasts: typeof sameKindCasts;

	/**
	* Determines (nested) array dimensions.
	*
	* @param arr - array
	* @returns array shape
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ];
	*
	* var ns.shape = ns.shape( arr );
	* // returns [ 3, 3 ]
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ];
	*
	* var ns.shape = ns.shape( arr );
	* // returns [ 3 ]
	*
	* @example
	* var arr = [ [ 1, 2, 3 ], [ 4, 5, 6 ], null ];
	*
	* var ns.shape = ns.shape( arr );
	* // returns [ 3 ]
	*/
	shape: typeof shape;

	/**
	* Constructor returning an object used to represent a generic, fixed-length raw binary data buffer which can be used to create views of shared memory.
	*/
	SharedArrayBuffer: typeof SharedArrayBuffer;

	/**
	* Returns a shallow copy of a portion of an array.
	*
	* @param x - input array
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.slice( x );
	* // returns [ 1, 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = ns.slice( x, 0, 2 );
	* // returns [ 1, 2 ]
	*/
	slice: typeof slice;

	/**
	* Takes elements from an array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param options - function options
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.take( x, [ 1, 3 ] );
	* // returns [ 2, 4 ]
	*/
	take: typeof take;

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
	* Converts an array to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = ns.array2fancy( x );
	* // returns <Array>
	*
	* var v = y[ ':' ];
	* // returns [ 1, 2, 3, 4 ]
	*/
	array2fancy: typeof array2fancy;

	/**
	* Returns an iterator which iterates over each element in an array-like object.
	*
	* @param src - input value
	* @param mapFcn - function to invoke for each iterated value
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
	* var Float64Array = require( './../../float64' );
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
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.typedarray( buf, 8, 2 );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.typedarray( buf, 8, 2, 'int32' );
	* // returns <Int32Array>[ 0, 0 ]
	*/
	typedarray: typeof typedarray;

	/**
	* Creates a complex number typed array.
	*
	* @param buffer - underlying ArrayBuffer
	* @param byteOffset - integer byte offset specifying the location of the first array element (default: 0)
	* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
	* @param dtype - data type (default: 'complex128')
	* @returns complex number typed array
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 64 );
	* var arr = ns.complexarray( buf, 16, 2 );
	* // returns <Complex128Array>
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 64 );
	* var arr = ns.complexarray( buf, 16, 2, 'complex64' );
	* // returns <Complex64Array>
	*/
	complexarray: typeof complexarray;

	/**
	* Returns a complex typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.complexarrayCtors( 'complex128' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.complexarrayCtors( 'float64' );
	* // returns null
	*/
	complexarrayCtors: typeof complexarrayCtors;

	/**
	* Returns a list of complex typed array data types.
	*
	* @returns list of complex typed array data types
	*
	* @example
	* var list = ns.complexarrayDataTypes();
	* // e.g., returns [ 'complex64', ... ]
	*/
	complexarrayDataTypes: typeof complexarrayDataTypes;

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
	* // e.g., returns [ 'float32', ... ]
	*/
	typedarrayDataTypes: typeof typedarrayDataTypes;

	/**
	* Returns a floating-point typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.floatarrayCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.floatarrayCtors( 'float' );
	* // returns null
	*/
	floatarrayCtors: typeof floatarrayCtors;

	/**
	* Returns a list of typed array floating-point data types.
	*
	* @returns list of typed array floating-point data types
	*
	* @example
	* var list = ns.floatarrayDataTypes();
	* // e.g., returns [ 'float32', ... ]
	*/
	floatarrayDataTypes: typeof floatarrayDataTypes;

	/**
	* Returns an integer-valued typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.intarrayCtors( 'int32' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.intarrayCtors( 'int' );
	* // returns null
	*/
	intarrayCtors: typeof intarrayCtors;

	/**
	* Returns a list of typed array integer data types.
	*
	* @returns list of typed array integer data types
	*
	* @example
	* var list = ns.intarrayDataTypes();
	* // e.g., returns [ 'int16', ... ]
	*/
	intarrayDataTypes: typeof intarrayDataTypes;

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
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.realarray( buf, 8, 2 );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* @example
	* var ArrayBuffer = require( './../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = ns.realarray( buf, 8, 2, 'int32' );
	* // returns <Int32Array>[ 0, 0 ]
	*/
	realarray: typeof realarray;

	/**
	* Returns a typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.realarrayCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.realarrayCtors( 'float' );
	* // returns null
	*/
	realarrayCtors: typeof realarrayCtors;

	/**
	* Returns a list of typed array real-valued data types.
	*
	* @returns list of typed array data types
	*
	* @example
	* var list = ns.realarrayDataTypes();
	* // e.g., returns [ 'float32', ... ]
	*/
	realarrayDataTypes: typeof realarrayDataTypes;

	/**
	* Returns a real-valued floating-point typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.realarrayFloatCtors( 'float64' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.realarrayFloatCtors( 'float' );
	* // returns null
	*/
	realarrayFloatCtors: typeof realarrayFloatCtors;

	/**
	* Returns a list of typed array real-valued floating-point data types.
	*
	* @returns list of typed array real-valued floating-point data types
	*
	* @example
	* var list = ns.realarrayFloatDataTypes();
	* // e.g., returns [ 'float32', ... ]
	*/
	realarrayFloatDataTypes: typeof realarrayFloatDataTypes;

	/**
	* Returns a signed integer typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.intarraySignedCtors( 'int32' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.intarraySignedCtors( 'int' );
	* // returns null
	*/
	intarraySignedCtors: typeof intarraySignedCtors;

	/**
	* Returns a list of typed array signed integer data types.
	*
	* @returns list of typed array signed integer data types
	*
	* @example
	* var list = ns.intarraySignedDataTypes();
	* // e.g., returns [ 'int16', ... ]
	*/
	intarraySignedDataTypes: typeof intarraySignedDataTypes;

	/**
	* Returns an unsigned integer typed array constructor.
	*
	* @param dtype - data type
	* @returns constructor or null
	*
	* @example
	* var ctor = ns.intarrayUnsignedCtors( 'uint32' );
	* // returns <Function>
	*
	* @example
	* var ctor = ns.intarrayUnsignedCtors( 'uint' );
	* // returns null
	*/
	intarrayUnsignedCtors: typeof intarrayUnsignedCtors;

	/**
	* Returns a list of typed array unsigned integer data types.
	*
	* @returns list of typed array unsigned integer data types
	*
	* @example
	* var list = ns.intarrayUnsignedDataTypes();
	* // e.g., returns [ 'uint16', ... ]
	*/
	intarrayUnsignedDataTypes: typeof intarrayUnsignedDataTypes;

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
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero.
	*
	* @param n - number of elements
	* @param dtype - data type (default: 'float64')
	* @returns linearly spaced numeric array
	*
	* @example
	* var arr = ns.zeroTo( 2 );
	* // returns <Float64Array>[ 0.0, 1.0 ]
	*
	* @example
	* var arr = ns.zeroTo( 2, 'float32' );
	* // returns <Float32Array>[ 0.0, 1.0 ]
	*/
	zeroTo: typeof zeroTo;

	/**
	* Generates a linearly spaced numeric array whose elements increment by 1 starting from zero and having the same length and data type as a provided input array.
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns linearly spaced numeric array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float32' );
	* // returns <Float32Array>[ 0.0, 0.0 ]
	*
	* var y = ns.zeroToLike( x );
	* // returns <Float32Array>[ 0.0, 1.0 ]
	*/
	zeroToLike: typeof zeroToLike;

	/**
	* Creates a zero-filled array having a specified length.
	*
	* The function recognizes the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `int32`: 32-bit two's complement signed integers
	* -   `uint32`: 32-bit unsigned integers
	* -   `int16`: 16-bit two's complement signed integers
	* -   `uint16`: 16-bit unsigned integers
	* -   `int8`: 8-bit two's complement signed integers
	* -   `uint8`: 8-bit unsigned integers
	* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
	* -   `generic`: generic JavaScript values
	*
	* @param length - array length
	* @param dtype - data type (default: 'float64')
	* @returns zero-filled array
	*
	* @example
	* var arr = ns.zeros( 2 );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* @example
	* var arr = ns.zeros( 2, 'float32' );
	* // returns <Float32Array>[ 0.0, 0.0 ]
	*/
	zeros: typeof zeros;

	/**
	* Creates a zero-filled array having the same length as a provided input array.
	*
	* The function supports the following data types:
	*
	* -   `float64`: double-precision floating-point numbers (IEEE 754)
	* -   `float32`: single-precision floating-point numbers (IEEE 754)
	* -   `complex128`: double-precision complex floating-point numbers
	* -   `complex64`: single-precision complex floating-point numbers
	* -   `int32`: 32-bit two's complement signed integers
	* -   `uint32`: 32-bit unsigned integers
	* -   `int16`: 16-bit two's complement signed integers
	* -   `uint16`: 16-bit unsigned integers
	* -   `int8`: 8-bit two's complement signed integers
	* -   `uint8`: 8-bit unsigned integers
	* -   `uint8c`: 8-bit unsigned integers clamped to `0-255`
	* -   `generic`: generic JavaScript values
	*
	* @param x - input array from which to derive the output array length
	* @param dtype - data type
	* @returns zero-filled array
	*
	* @example
	* var zeros = require( './../../zeros' );
	*
	* var x = zeros( 2, 'float64' );
	* // returns <Float64Array>[ 0.0, 0.0 ]
	*
	* var y = ns.zerosLike( x, 'float32' );
	* // returns <Float32Array>[ 0.0, 0.0 ]
	*/
	zerosLike: typeof zerosLike;

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
