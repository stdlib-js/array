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

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { ArrayLike, RealOrComplexTypedArray, Complex64Array as Complex64ArrayInterface } from '@stdlib/types/array';
import { ComplexLike, Complex64 } from '@stdlib/types/object';
import ArrayBuffer = require( './../../../buffer' );

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Class for creating a 64-bit complex number array.
*/
declare class Complex64Array implements Complex64ArrayInterface {
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
	* var arr = new Complex64Array();
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex64Array( 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex64Array( [ 1.0, -1.0 ] );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf, 8 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex64Array( buf, 8, 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	constructor( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number ); // tslint:disable-line:max-line-length

	/**
	* Length (in bytes) of the array.
	*
	* @example
	* var arr = new Complex64Array( 10 );
	*
	* var byteLength = arr.byteLength;
	* // returns 80
	*/
	readonly byteLength: number;

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @example
	* var arr = new Complex64Array( 10 );
	*
	* var byteOffset = arr.byteOffset;
	* // returns 0
	*/
	readonly byteOffset: number;

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var arr = new Complex64Array( 10 );
	*
	* var nbytes = arr.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	readonly BYTES_PER_ELEMENT: 8;

	/**
	* Number of array elements.
	*
	* @example
	* var arr = new Complex64Array( 10 );
	*
	* var len = arr.length;
	* // returns 10
	*/
	readonly length: number;

	/**
	* Copies a sequence of elements within the array to the position starting at `target`.
	*
	* @param target - index at which to start copying elements
	* @param start - source index at which to copy elements from
	* @param end - source index at which to stop copying elements from
	* @returns modified array
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	* var realf = require( `@stdlib/complex/realf` );
	* var imagf = require( `@stdlib/complex/imagf` );
	*
	* var arr = new Complex64Array( 4 );
	*
	* // Set the array elements:
	* arr.set( new Complex64( 1.0, 1.0 ), 0 );
	* arr.set( new Complex64( 2.0, 2.0 ), 1 );
	* arr.set( new Complex64( 3.0, 3.0 ), 2 );
	* arr.set( new Complex64( 4.0, 4.0 ), 3 );
	*
	* // Copy the first two elements to the last two elements:
	* arr.copyWithin( 2, 0, 2 );
	*
	* // Get the last array element:
	* var z = arr.get( 3 );
	*
	* var re = realf( z );
	* // returns 2.0
	*
	* var im = imagf( z );
	* // returns 2.0
	*/
	copyWithin( target: number, start: number, end?: number ): Complex64Array;

	/**
	* Returns an iterator for iterating over array key-value pairs.
	*
	* @returns iterator
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var arr = [
	*     new Complex64( 1.0, 1.0 ),
	*     new Complex64( 2.0, 2.0 ),
	*     new Complex64( 3.0, 3.0 )
	* ];
	* arr = new Complex64Array( arr );
	*
	* // Create an iterator:
	* var it = arr.entries();
	*
	* // Iterate over the key-value pairs...
	* var v = it.next().value;
	* // returns [ 0, <Complex64> ]
	*
	* v = it.next().value;
	* // returns [ 1, <Complex64> ]
	*
	* v = it.next().value;
	* // returns [ 2, <Complex64> ]
	*
	* var bool = it.next().done;
	* // returns true
	*/
	entries(): Iterator;

	/**
	* Returns an array element.
	*
	* @param i - element index
	* @throws index argument must be a nonnegative integer
	* @returns array element
	*
	* @example
	* var arr = new Complex64Array( 10 );
	*
	* var z = arr.get( 0 );
	* // returns <Complex64>
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	*
	* z = arr.get( 100 );
	* // returns undefined
	*/
	get( i: number ): Complex64 | void;

	/**
	* Sets an array element.
	*
	* ## Notes
	*
	* -   When provided a typed array, real or complex, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
	*
	*     ```text
	*     buf:                ---------------------
	*     src: ---------------------
	*     ```
	*
	*     In the above, as we copy values from `src`, we will overwrite values in the `src` view, resulting in duplicated values copied into the end of `buf`, which is not intended. Hence, to avoid overwriting source values, we must **copy** source values to a temporary array.
	*
	*     In the other overlapping scenario,
	*
	*     ```text
	*     buf: ---------------------
	*     src:                ---------------------
	*     ```
	*
	*     by the time we begin copying into the overlapping region, we are copying from the end of `src`, a non-overlapping region, which means we don't run the risk of copying copied values, rather than the original `src` values as intended.
	*
	*
	* @param value - value(s)
	* @param i - element index at which to start writing values (default: 0)
	* @throws index argument must be a nonnegative integer
	* @throws array-like objects must have a length which is a multiple of two
	* @throws index argument is out-of-bounds
	* @throws target array lacks sufficient storage to accommodate source values
	*
	* @example
	* var realf = require( `@stdlib/complex/realf` );
	* var imagf = require( `@stdlib/complex/imagf` );
	*
	* var arr = new Complex64Array( 10 );
	*
	* var z = arr.get( 0 );
	* // returns <Complex64>
	*
	* var re = realf( z );
	* // returns 0.0
	*
	* var im = imagf( z );
	* // returns 0.0
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	*
	* z = arr.get( 0 );
	* // returns <Complex64>
	*
	* re = realf( z );
	* // returns 1.0
	*
	* im = imagf( z );
	* // returns -1.0
	*/
	set( value: ArrayLike<number | ComplexLike> | RealOrComplexTypedArray | ComplexLike, i?: number ): void; // tslint:disable-line:max-line-length
}

/**
* Interface defining a 64-bit complex number array constructor which is both "newable" and "callable".
*/
interface Complex64ArrayConstructor {
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
	* var arr = new Complex64Array();
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex64Array( 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex64Array( [ 1.0, -1.0 ] );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf, 8 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex64Array( buf, 8, 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	new( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number ): Complex64Array; // tslint-disable-line max-line-length

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
	* var arr = new Complex64Array();
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex64Array( 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex64Array( [ 1.0, -1.0 ] );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex64Array( buf, 8 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( `@stdlib/array/buffer` );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex64Array( buf, 8, 2 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number ): Complex64Array; // tslint-disable-line max-line-length

	/**
	* Constructor name.
	*
	* @example
	* var str = Complex64Array.name;
	* // returns 'Complex64Array'
	*/
	readonly name: 'Complex64Array';

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var nbytes = Complex64Array.BYTES_PER_ELEMENT;
	* // returns 8
	*/
	readonly BYTES_PER_ELEMENT: 8;

	/**
	* Creates a new 64-bit complex number array from an array-like object or an iterable.
	*
	* @param src - array-like object or iterable
	* @param clbk - callback to invoke for each source element
	* @param thisArg - context
	* @throws array-like objects must have a length which is a multiple of two
	* @throws an iterator must return either a two element array containing real and imaginary components or a complex number
	* @throws when provided an iterator, a callback must return either a two element array containing real and imaginary components or a complex number
	* @returns 64-bit complex number array
	*
	* @example
	* var arr = Complex64Array.from( [ 1.0, -1.0 ] );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	*
	* var arr = Complex64Array.from( [ new Complex64( 1.0, 1.0 ) ] );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var Complex64 = require( `@stdlib/complex/float32` );
	* var realf = require( `@stdlib/complex/realf` );
	* var imagf = require( `@stdlib/complex/imagf` );
	*
	* function clbk( v ) {
	*     return new Complex64( realf(v)*2.0, imagf(v)*2.0 );
	* }
	*
	* var arr = Complex64Array.from( [ new Complex64( 1.0, 1.0 ) ], clbk );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 1
	*/
	from( src: ArrayLike<number | ComplexLike> | RealOrComplexTypedArray | Iterable<number | ComplexLike>, clbk?: Function, thisArg?: any ): Complex64Array; // tslint:disable-line:max-line-length

	/**
	* Creates a new 64-bit complex number array from a variable number of arguments.
	*
	* @param  element - array elements
	* @returns 64-bit complex number array
	*
	* @example
	* var arr = Complex64Array.of( 1.0, 1.0, 1.0, 1.0 );
	* // returns <Complex64Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	of( ...elements: Array<number> ): Complex64Array;
}

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
* var arr = new Complex64Array();
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new Complex64Array( 2 );
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new Complex64Array( [ 1.0, -1.0 ] );
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex64Array( buf );
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex64Array( buf, 8 );
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( `@stdlib/array/buffer` );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex64Array( buf, 8, 2 );
* // returns <Complex64Array>
*
* var len = arr.length;
* // returns 2
*/
declare var ctor: Complex64ArrayConstructor;


// EXPORTS //

export = ctor;
