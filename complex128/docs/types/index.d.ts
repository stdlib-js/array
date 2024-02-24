/* eslint-disable max-lines */

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

/// <reference types="@stdlib/types"/>

import { Iterator as Iter, IterableIterator } from '@stdlib/types/iter';
import { ArrayLike, RealOrComplexTypedArray, Complex128Array as Complex128ArrayInterface } from '@stdlib/types/array';
import { ComplexLike, Complex128 } from '@stdlib/types/complex';
import ArrayBuffer = require( './../../../buffer' );

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Callback invoked for each element in a source object.
*
* @returns transformed value
*/
type FromNullary<U> = ( this: U ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @returns transformed value
*/
type FromUnary<U> = ( this: U, value: ComplexLike | ArrayLike<number> | number ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @param index - source element index
* @returns transformed value
*/
type FromBinary<U> = ( this: U, value: ComplexLike | ArrayLike<number> | number, index: number ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @param index - source element index
* @returns transformed value
*/
type FromCallback<U> = FromNullary<U> | FromUnary<U> | FromBinary<U>;

/**
* Checks whether an element in an array passes a test.
*
* @returns boolean indicating whether an element in an array passes a test
*/
type NullaryPredicate<U> = ( this: U ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element in an array passes a test
*/
type UnaryPredicate<U> = ( this: U, value: Complex128 ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element in an array passes a test
*/
type BinaryPredicate<U> = ( this: U, value: Complex128, index: number ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns boolean indicating whether an element in an array passes a test
*/
type TernaryPredicate<U> = ( this: U, value: Complex128, index: number, arr: Complex128Array ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns boolean indicating whether an element in an array passes a test
*/
type Predicate<U> = NullaryPredicate<U> | UnaryPredicate<U> | BinaryPredicate<U> | TernaryPredicate<U>;

/**
* Callback invoked for each element in an array.
*
* @returns undefined
*/
type NullaryCallback<U> = ( this: U ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @returns undefined
*/
type UnaryCallback<U> = ( this: U, value: Complex128 ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @returns undefined
*/
type BinaryCallback<U> = ( this: U, value: Complex128, index: number ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns undefined
*/
type TernaryCallback<U> = ( this: U, value: Complex128, index: number, arr: Complex128Array ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns undefined
*/
type Callback<U> = NullaryCallback<U> | UnaryCallback<U> | BinaryCallback<U> | TernaryCallback<U>;

/**
* Callback invoked for each element in an array.
*
* @returns transformed value
*/
type NullaryMapFcn<U> = ( this: U ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @returns transformed value
*/
type UnaryMapFcn<U> = ( this: U, value: Complex128 ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @returns transformed value
*/
type BinaryMapFcn<U> = ( this: U, value: Complex128, index: number ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns transformed value
*/
type TernaryMapFcn<U> = ( this: U, value: Complex128, index: number, arr: Complex128Array ) => ComplexLike | ArrayLike<number>;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns transformed value
*/
type MapFcn<U> = NullaryMapFcn<U> | UnaryMapFcn<U> | BinaryMapFcn<U> | TernaryMapFcn<U>;

/**
* Reducer function invoked for each element in an array.
*
* @returns accumulated result
*/
type NullaryReducer<U> = () => U;

/**
* Reducer function invoked for each element in an array.
*
* @param acc - accumulated result
* @returns accumulated result
*/
type UnaryReducer<U> = ( acc: U ) => U;

/**
* Reducer function invoked for each element in an array.
*
* @param acc - accumulated result
* @param value - current array element
* @returns accumulated result
*/
type BinaryReducer<U> = ( acc: U, value: Complex128 ) => U;

/**
* Reducer function invoked for each element in an array.
*
* @param acc - accumulated result
* @param value - current array element
* @param index - current array element index
* @returns accumulated result
*/
type TernaryReducer<U> = ( acc: U, value: Complex128, index: number ) => U;

/**
* @param acc - accumulated result
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns accumulated result
*/
type QuaternaryReducer<U> = ( acc: U, value: Complex128, index: number, arr: Complex128Array ) => U;

/**
* Reducer function invoked for each element in an array.
*
* @param acc - accumulated result
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns accumulated result
*/
type Reducer<U> = NullaryReducer<U> | UnaryReducer<U> | BinaryReducer<U> | TernaryReducer<U> | QuaternaryReducer<U>;

/**
* Class for creating a 128-bit complex number array.
*/
declare class Complex128Array implements Complex128ArrayInterface {
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
	* var arr = new Complex128Array();
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex128Array( 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex128Array( [ 1.0, -1.0 ] );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf, 8 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Array( buf, 8, 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	constructor( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number );

	/**
	* Returns an array element with support for both nonnegative and negative integer indices.
	*
	* @param i - element index
	* @throws index argument must be an integer
	* @returns array element
	*
	* @example
	* var arr = new Complex128Array( 10 );
	*
	* var z = arr.at( 0 );
	* // returns <Complex128>
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 9.0, -9.0 ], 9 );
	*
	* z = arr.get( -1 )
	* // return <Complex128>
	*
	* z = arr.at( 100 );
	* // returns undefined
	*
	* z = arr.at( -100 );
	* // returns undefined
	*/
	at( i: number ): Complex128 | void;

	/**
	* Length (in bytes) of the array.
	*
	* @example
	* var arr = new Complex128Array( 10 );
	*
	* var byteLength = arr.byteLength;
	* // returns 160
	*/
	readonly byteLength: number;

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @example
	* var arr = new Complex128Array( 10 );
	*
	* var byteOffset = arr.byteOffset;
	* // returns 0
	*/
	readonly byteOffset: number;

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var arr = new Complex128Array( 10 );
	*
	* var nbytes = arr.BYTES_PER_ELEMENT;
	* // returns 16
	*/
	readonly BYTES_PER_ELEMENT: 16;

	/**
	* Number of array elements.
	*
	* @example
	* var arr = new Complex128Array( 10 );
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
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 4 );
	*
	* // Set the array elements:
	* arr.set( new Complex128( 1.0, 1.0 ), 0 );
	* arr.set( new Complex128( 2.0, 2.0 ), 1 );
	* arr.set( new Complex128( 3.0, 3.0 ), 2 );
	* arr.set( new Complex128( 4.0, 4.0 ), 3 );
	*
	* // Copy the first two elements to the last two elements:
	* arr.copyWithin( 2, 0, 2 );
	*
	* // Get the last array element:
	* var z = arr.get( 3 );
	*
	* var re = real( z );
	* // returns 2.0
	*
	* var im = imag( z );
	* // returns 2.0
	*/
	copyWithin( target: number, start: number, end?: number ): Complex128Array;

	/**
	* Returns an iterator for iterating over array key-value pairs.
	*
	* @returns iterator
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* var arr = [
	*     new Complex128( 1.0, 1.0 ),
	*     new Complex128( 2.0, 2.0 ),
	*     new Complex128( 3.0, 3.0 )
	* ];
	* arr = new Complex128Array( arr );
	*
	* // Create an iterator:
	* var it = arr.entries();
	*
	* // Iterate over the key-value pairs...
	* var v = it.next().value;
	* // returns [ 0, <Complex128> ]
	*
	* v = it.next().value;
	* // returns [ 1, <Complex128> ]
	*
	* v = it.next().value;
	* // returns [ 2, <Complex128> ]
	*
	* var bool = it.next().done;
	* // returns true
	*/
	entries(): Iterator;

	/**
	* Tests whether all elements in an array pass a test implemented by a predicate function.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0 , 1.0 ], 0 );
	* arr.set( [ 2.0 , 2.0 ], 1 );
	* arr.set( [ 3.0 , 3.0 ], 2 );
	*
	* var bool = arr.every( predicate );
	* // returns true
	*/
	every<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean;

	/**
	* Returns a modified typed array filled with a fill value.
	*
	* @param value - fill value
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @returns modified typed array
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.fill( new Complex128( 1.0, 1.0 ), 1 );
	*
	* var z = arr.get( 1 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 1.0
	*
	* z = arr.get( 2 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 1.0
	*
	* im = imag( z );
	* // returns 1.0
	*/
	fill( value: ComplexLike, start?: number, end?: number ): Complex128Array;

	/**
	* Returns a new array containing the elements of an array which pass a test implemented by a predicate function.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns new array containing elements which pass a test implemented by a predicate function
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	*
	* var out = arr.filter( predicate );
	* // returns <Complex128Array>
	*
	* var len = out.length;
	* // returns 1
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 2.0
	*
	* var im = imag( z );
	* // returns 2.0
	*/
	filter<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): Complex128Array;

	/**
	* Returns the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns array element or undefined
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var z = arr.find( predicate );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns 1.0
	*/
	find<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): Complex128 | void;

	/**
	* Returns the index of the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns index or -1
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var idx = arr.findIndex( predicate );
	* // returns 2
	*/
	findIndex<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): number;

	/**
	* Returns the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns array element or undefined
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var z = arr.findLast( predicate );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 3.0
	*
	* var im = imag( z );
	* // returns 3.0
	*/
	findLast<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): Complex128 | void;

	/**
	* Returns the index of the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns index or -1
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	*
	* var idx = arr.findLastIndex( predicate );
	* // returns 1
	*/
	findLastIndex<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): number;

	/**
	* Invokes a function once for each array element.
	*
	* @param fcn - function to invoke
	* @param thisArg - execution context
	* @returns undefined
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* function log( v, i ) {
	*     console.log( '%s: %s', i, v.toString() );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* arr.forEach( log );
	* // => 0: 1 + 1i
	* // => 1: 2 + 2i
	* // => 2: 3 + 3i
	*/
	forEach<U = unknown>( fcn: Callback<U>, thisArg?: ThisParameterType<Callback<U>> ): void;

	/**
	* Returns an array element.
	*
	* @param i - element index
	* @throws index argument must be a nonnegative integer
	* @returns array element
	*
	* @example
	* var arr = new Complex128Array( 10 );
	*
	* var z = arr.get( 0 );
	* // returns <Complex128>
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	*
	* z = arr.get( 100 );
	* // returns undefined
	*/
	get( i: number ): Complex128 | void;

	/**
	* Returns a boolean indicating whether an array contains a provided value.
	*
	* @param searchElement - search element
	* @param fromIndex - starting index (inclusive)
	* @returns boolean indicating whether an array contains a provided value
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* var arr = new Complex128Array( 5 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	* arr.set( [ 4.0, -4.0 ], 3 );
	* arr.set( [ 5.0, -5.0 ], 4 );
	*
	* var bool = arr.includes( new Complex128( 3.0, -3.0 ) );
	* // returns true
	*
	* bool = arr.includes( new Complex128( 3.0, -3.0 ), 3 );
	* // returns false
	*
	* bool = arr.includes( new Complex128( 4.0, -4.0 ), -3 );
	* // returns true
	*/
	includes( searchElement: ComplexLike, fromIndex?: number ): boolean;

	/**
	* Returns the first index at which a given element can be found.
	*
	* @param searchElement - element to find
	* @param fromIndex - starting index (inclusive)
	* @returns index or -1
	*
	* @example
	* var arr = new Complex128Array( 5 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	* arr.set( [ 2.0, 2.0 ], 3 );
	* arr.set( [ 5.0, 5.0 ], 4 );
	*
	* var idx = arr.indexOf( new Complex128( [ 2.0, 2.0 ] ) );
	* // returns 1
	*
	* idx = arr.indexOf( new Complex128( [ 2.0, 2.0 ] ), 2 );
	* // returns 3
	*
	* idx = arr.indexOf( new Complex128( [ 2.0, 2.0 ] ), -3 );
	* // returns 3
	*/
	indexOf( searchElement: ComplexLike, fromIndex?: number ): number;

	/**
	* Returns a new string by concatenating all array elements.
	*
	* @param separator - value separator (default: ',')
	* @returns string
	*
	* @example
	* var arr = new Complex128Array( 2 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	*
	* var str = arr.join();
	* // returns '1 + 1i,2 + 2i'
	*
	* str = arr.join( '/' );
	* // returns '1 + 1i/2 + 2i'
	*/
	join( separator?: string ): string;

	/**
	* Returns the last index at which a given element can be found.
	*
	* @param searchElement - element to find
	* @param fromIndex - index at which to start searching backward (inclusive)
	* @returns index or -1
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* var arr = new Complex128Array( 5 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	* arr.set( [ 4.0, -4.0 ], 3 );
	* arr.set( [ 3.0, -3.0 ], 4 );
	*
	* var idx = arr.lastIndexOf( new Complex128( 3.0, -3.0 ) );
	* // returns 4
	*
	* idx = arr.lastIndexOf( new Complex128( 3.0, -3.0 ), 3 );
	* // returns 2
	*
	* idx = arr.lastIndexOf( new Complex128( 2.0, -2.0 ), -3 );
	* // returns 1
	*/
	lastIndexOf( searchElement: ComplexLike, fromIndex?: number ): number;

	/**
	* Returns a new array with each element being the result of a provided callback function.
	*
	* @param fcn - callback function
	* @param thisArg - execution context
	* @returns new array containing transformed elements
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function scale( v, i ) {
	*     return new Complex128( 2.0*real( v ), 2.0*imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	*
	* var out = arr.map( scale );
	* // returns <Complex128Array>
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 2.0
	*
	* var im = imag( z );
	* // returns -2.0
	*/
	map<U = unknown>( fcn: MapFcn<U>, thisArg?: ThisParameterType<MapFcn<U>> ): Complex128Array;

	/**
	* Applies a provided callback function to each element of the array, in order, passing in the return value from the calculation on the preceding element and returning the accumulated result upon completion.
	*
	* @param reducer - callback function
	* @param initialValue - initial value
	* @returns accumulated result
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	* var cadd = require( '@stdlib/math/base/ops/cadd' );
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var z = arr.reduce( cadd );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 6.0
	*
	* var im = imag( z );
	* // returns 6.0
	*/
	reduce<U = unknown>( reducer: Reducer<U>, initialValue?: U ): U;

	/**
	* Reverses an array in-place.
	*
	* @returns reversed array
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var out = arr.reverse();
	* // returns <Complex128Array>
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 3.0
	*
	* var im = imag( z );
	* // returns 3.0
	*
	* z = out.get( 1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 2.0
	*
	* im = imag( z );
	* // returns 2.0
	*
	* z = out.get( 2 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 1.0
	*
	* im = imag( z );
	* // returns 1.0
	*/
	reverse(): Complex128Array;

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
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 10 );
	*
	* var z = arr.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 0.0
	*
	* var im = imag( z );
	* // returns 0.0
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	*
	* z = arr.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 1.0
	*
	* im = imag( z );
	* // returns -1.0
	*/
	set( value: ArrayLike<number | ComplexLike> | RealOrComplexTypedArray | ComplexLike, i?: number ): void;

	/**
	* Copies a portion of a typed array to a new typed array.
	*
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @throws indices must be integers
	* @returns output array
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 5 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	* arr.set( [ 4.0, -4.0 ], 3 );
	* arr.set( [ 5.0, -5.0 ], 4 );
	*
	* var out = arr.slice();
	* // returns <Complex128Array>
	*
	* var len = out.length;
	* // returns 5
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns -1.0
	*
	* z = out.get( len-1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 5.0
	*
	* im = imag( z );
	* // returns -5.0
	*
	* out = arr.slice( 1, -2 );
	* // returns <Complex128Array>
	*
	* len = out.length;
	* // returns 2
	*
	* z = out.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 2.0
	*
	* im = imag( z );
	* // returns -2.0
	*
	* z = out.get( len-1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 3.0
	*
	* im = imag( z );
	* // returns -3.0
	*/
	slice( start?: number, end?: number ): Complex128Array;

	/**
	* Tests whether at least one element in an array passes a test implemented by a predicate function.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns boolean indicating whether at least one element passes a test
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function predicate( v ) {
	*     return ( real( v ) === imag( v ) );
	* }
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0 , -1.0 ], 0 );
	* arr.set( [ 2.0 , 2.0 ], 1 );
	* arr.set( [ 3.0 , -3.0 ], 2 );
	*
	* var bool = arr.some( predicate );
	* // returns true
	*/
	some<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean;

	/**
	* Creates a new typed array view over the same underlying `ArrayBuffer` and with the same underlying data type as the host array.
	*
	* @param begin - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @throws indices must be integers
	* @returns subarray
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 5 );
	*
	* arr.set( [ 1.0, -1.0 ], 0 );
	* arr.set( [ 2.0, -2.0 ], 1 );
	* arr.set( [ 3.0, -3.0 ], 2 );
	* arr.set( [ 4.0, -4.0 ], 3 );
	* arr.set( [ 5.0, -5.0 ], 4 );
	*
	* var subarr = arr.subarray();
	* // returns <Complex128Array>
	*
	* var len = subarr.length;
	* // returns 5
	*
	* var z = subarr.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 1.0
	*
	* var im = imag( z );
	* // returns -1.0
	*
	* z = subarr.get( len-1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 5.0
	*
	* im = imag( z );
	* // returns -5.0
	*
	* subarr = arr.subarray( 1, -2 );
	* // returns <Complex128Array>
	*
	* len = subarr.length;
	* // returns 2
	*
	* z = subarr.get( 0 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 2.0
	*
	* im = imag( z );
	* // returns -2.0
	*
	* z = subarr.get( len-1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 3.0
	*
	* im = imag( z );
	* // returns -3.0
	*/
	subarray( begin?: number, end?: number ): Complex64Array;

	/**
	* Returns a new typed array containing the elements in reversed order.
	*
	* @returns reversed array
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var out = arr.toReversed();
	* // returns <Complex128Array>
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 3.0
	*
	* var im = imag( z );
	* // returns 3.0
	*
	* z = out.get( 1 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 2.0
	*
	* im = imag( z );
	* // returns 2.0
	*
	* z = out.get( 2 );
	* // returns <Complex128>
	*
	* re = real( z );
	* // returns 1.0
	*
	* im = imag( z );
	* // returns 1.0
	*/
	toReversed(): Complex128Array;

	/**
	* Serializes an array as a string.
	*
	* @returns string
	*
	* @example
	* var arr = new Complex128Array( 2 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	*
	* var str = arr.toString();
	* // returns '1 + 1i,2 + 2i'
	*/
	toString(): string;

	/**
	* Returns a new typed array with the element at a provided index replaced with a provided value.
	*
	* @param index - element index
	* @param value - new value
	* @throws first argument must be an integer
	* @throws second argument must be a complex number
	* @throws index argument is out-of-bounds
	* @returns modified typed array
	*
	* @example
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* var arr = new Complex128Array( 3 );
	*
	* arr.set( [ 1.0, 1.0 ], 0 );
	* arr.set( [ 2.0, 2.0 ], 1 );
	* arr.set( [ 3.0, 3.0 ], 2 );
	*
	* var out = arr.with( 0, new Complex128( 4.0, 4.0 ) );
	* // returns <Complex128Array>
	*
	* var z = out.get( 0 );
	* // returns <Complex128>
	*
	* var re = real( z );
	* // returns 4.0
	*
	* var im = imag( z );
	* // returns 4.0
	*/
	with( index: number, value: ComplexLike ): Complex128Array;
}

/**
* Interface defining a 128-bit complex number array constructor which is both "newable" and "callable".
*/
interface Complex128ArrayConstructor {
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
	* var arr = new Complex128Array();
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex128Array( 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex128Array( [ 1.0, -1.0 ] );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf, 8 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Array( buf, 8, 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	new( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number ): Complex128Array;

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
	* var arr = new Complex128Array();
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new Complex128Array( 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new Complex128Array( [ 1.0, -1.0 ] );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new Complex128Array( buf, 8 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new Complex128Array( buf, 8, 2 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	( arg?: number | RealOrComplexTypedArray | ArrayLike<number | ComplexLike> | ArrayBuffer | Iterable<number | ComplexLike>, byteOffset?: number, length?: number ): Complex128Array;

	/**
	* Constructor name.
	*
	* @example
	* var str = Complex128Array.name;
	* // returns 'Complex128Array'
	*/
	readonly name: 'Complex128Array';

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var nbytes = Complex128Array.BYTES_PER_ELEMENT;
	* // returns 16
	*/
	readonly BYTES_PER_ELEMENT: 16;

	/**
	* Creates a new 128-bit complex number array from an array-like object or an iterable.
	*
	* @param src - array-like object or iterable
	* @param clbk - callback to invoke for each source element
	* @param thisArg - context
	* @throws array-like objects must have a length which is a multiple of two
	* @throws an iterator must return either a two element array containing real and imaginary components or a complex number
	* @throws when provided an iterator, a callback must return either a two element array containing real and imaginary components or a complex number
	* @returns 128-bit complex number array
	*
	* @example
	* var arr = Complex128Array.from( [ 1.0, -1.0 ] );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	*
	* var arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ] );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*
	* @example
	* var Complex128 = require( '@stdlib/complex/float64' );
	* var real = require( '@stdlib/complex/real' );
	* var imag = require( '@stdlib/complex/imag' );
	*
	* function clbk( v ) {
	*     return new Complex128( real(v)*2.0, imag(v)*2.0 );
	* }
	*
	* var arr = Complex128Array.from( [ new Complex128( 1.0, 1.0 ) ], clbk );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 1
	*/
	from( src: ArrayLike<number | ComplexLike> | RealOrComplexTypedArray | Iterable<number | ComplexLike>, clbk?: FromCallback<U>, thisArg?: ThisParameterType<FromCallback<U>> ): Complex128Array;

	/**
	* Creates a new 128-bit complex number array from a variable number of arguments.
	*
	* @param  element - array elements
	* @returns 128-bit complex number array
	*
	* @example
	* var arr = Complex128Array.of( 1.0, 1.0, 1.0, 1.0 );
	* // returns <Complex128Array>
	*
	* var len = arr.length;
	* // returns 2
	*/
	of( ...elements: Array<number> ): Complex128Array;
}

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
* var arr = new Complex128Array();
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new Complex128Array( 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new Complex128Array( [ 1.0, -1.0 ] );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex128Array( buf );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new Complex128Array( buf, 8 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 1
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new Complex128Array( buf, 8, 2 );
* // returns <Complex128Array>
*
* var len = arr.length;
* // returns 2
*/
declare var ctor: Complex128ArrayConstructor;


// EXPORTS //

export = ctor;
