/* eslint-disable max-lines */

/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

import { Iterator as Iter, IterableIterator, TypedIterator } from '@stdlib/types/iter';
import { ArrayLike, BooleanArray as BooleanArrayInterface } from '@stdlib/types/array';
import ArrayBuffer = require( './../../../buffer' );

// Define a union type representing both iterable and non-iterable iterators:
type Iterator = Iter | IterableIterator;

/**
* Locale-specific configuration options.
*/
interface LocaleOptions<T = unknown> {
	/**
	* Configuration property.
	*/
	[ key: string | symbol | number ]: T | undefined;
}

/**
* Callback invoked for each element in a source object.
*
* @returns transformed value
*/
type FromNullary<U> = ( this: U ) => boolean;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @returns transformed value
*/
type FromUnary<U> = ( this: U, value: boolean ) => boolean;

/**
* Callback invoked for each element in a source object.
*
* @param value - source element
* @param index - source element index
* @returns transformed value
*/
type FromBinary<U> = ( this: U, value: boolean, index: number ) => boolean;

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
type UnaryPredicate<U> = ( this: U, value: boolean ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element in an array passes a test
*/
type BinaryPredicate<U> = ( this: U, value: boolean, index: number ) => boolean;

/**
* Checks whether an element in an array passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns boolean indicating whether an element in an array passes a test
*/
type TernaryPredicate<U> = ( this: U, value: boolean, index: number, arr: BooleanArray ) => boolean;

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
type UnaryCallback<U> = ( this: U, value: boolean ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @returns undefined
*/
type BinaryCallback<U> = ( this: U, value: boolean, index: number ) => void;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns undefined
*/
type TernaryCallback<U> = ( this: U, value: boolean, index: number, arr: BooleanArray ) => void;

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
* @returns returned value
*/
type NullaryMapFcn<U> = ( this: U ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @returns returned value
*/
type UnaryMapFcn<U> = ( this: U, value: boolean ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @returns returned value
*/
type BinaryMapFcn<U> = ( this: U, value: boolean, index: number ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns returned value
*/
type TernaryMapFcn<U> = ( this: U, value: boolean, index: number, arr: BooleanArray ) => any;

/**
* Callback invoked for each element in an array.
*
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns returned value
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
type BinaryReducer<U> = ( acc: U, value: boolean ) => U;

/**
* Reducer function invoked for each element in an array.
*
* @param acc - accumulated result
* @param value - current array element
* @param index - current array element index
* @returns accumulated result
*/
type TernaryReducer<U> = ( acc: U, value: boolean, index: number ) => U;

/**
* @param acc - accumulated result
* @param value - current array element
* @param index - current array element index
* @param arr - array on which the method was called
* @returns accumulated result
*/
type QuaternaryReducer<U> = ( acc: U, value: boolean, index: number, arr: BooleanArray ) => U;

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
* Comparator function.
*
* @param a - first boolean value for comparison
* @param b - second boolean value for comparison
* @returns number indicating comparison result
*/
type CompareFcn = ( a: boolean, b: boolean ) => number;

/**
* Class for creating a Boolean array.
*/
declare class BooleanArray implements BooleanArrayInterface {
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
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	constructor( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number );

	/**
	* Returns an array element located at integer position (index) `i`, with support for both nonnegative and negative integer indices.
	*
	* @param i - element index
	* @throws index argument must be a integer
	* @returns array element
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.at( 0 );
	* // returns true
	*
	* v = arr.at( -1 );
	* // returns true
	*
	* v = arr.at( 100 );
	* // returns undefined
	*/
	at( i: number ): boolean | void;

	/**
	* Pointer to the underlying data buffer.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var buf = arr.buffer;
	* // returns <ArrayBuffer>
	*/
	readonly buffer: ArrayBuffer;

	/**
	* Length (in bytes) of the array.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var byteLength = arr.byteLength;
	* // returns 10
	*/
	readonly byteLength: number;

	/**
	* Offset (in bytes) of the array from the start of its underlying `ArrayBuffer`.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var byteOffset = arr.byteOffset;
	* // returns 0
	*/
	readonly byteOffset: number;

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var nbytes = arr.BYTES_PER_ELEMENT;
	* // returns 1
	*/
	readonly BYTES_PER_ELEMENT: 1;

	/**
	* Number of array elements.
	*
	* @example
	* var arr = new BooleanArray( 10 );
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
	* var arr = new BooleanArray( 4 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( false, 2 );
	* arr.set( true, 3 );
	*
	* // Copy the first two elements to the last two elements:
	* arr.copyWithin( 2, 0, 2 );
	*
	* var v = arr.get( 2 );
	* // returns true
	*
	* v = arr.get( 3 );
	* // returns false
	*/
	copyWithin( target: number, start: number, end?: number ): BooleanArray;

	/**
	* Returns an iterator for iterating over array key-value pairs.
	*
	* @returns iterator
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var it = arr.entries();
	*
	* var v = it.next().value;
	* // returns [ 0, true ]
	*
	* v = it.next().value;
	* // returns [ 1, false ]
	*
	* v = it.next().value;
	* // returns [ 2, true ]
	*
	* var bool = it.next().done;
	* // returns true
	*/
	entries(): TypedIterator<[number, boolean]>;

	/**
	* Tests whether all elements in an array pass a test implemented by a predicate function.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether all elements pass a test
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( true, 1 );
	* arr.set( true, 2 );
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
	* var arr = new BooleanArray( 3 );
	*
	* arr.fill( true, 1 );
	*
	* var v = arr.get( 0 );
	* // returns false
	*
	* v = arr.get( 1 );
	* // returns true
	*
	* v = arr.get( 2 );
	* // returns true
	*/
	fill( value: boolean, start?: number, end?: number ): BooleanArray;

	/**
	* Returns a new array containing the elements of an array which pass a test implemented by a predicate function.
	*
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns new array containing elements which pass a test implemented by a predicate function
	*
	* @example
	* function predicate( v ) {
	*     return ( v === true );
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.filter( predicate );
	* // returns <BooleanArray>
	*
	* var len = out.length;
	* // returns 2
	*
	* var v = out.get( 0 );
	* // returns true
	*
	* v = out.get( 1 );
	* // returns true
	*/
	filter<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): BooleanArray;

	/**
	* Returns the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array element or undefined
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.find( predicate );
	* // returns true
	*/
	find<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean | void;

	/**
	* Returns the index of the first element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array index or -1
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findIndex( predicate );
	* // returns 0
	*/
	findIndex<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): number;

	/**
	* Returns the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array element or undefined
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findLast( predicate );
	* // returns true
	*/
	findLast<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean | void;

	/**
	* Returns the index of the last element in an array for which a predicate function returns a truthy value.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns array index or -1
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var v = arr.findLastIndex( predicate );
	* // returns 2
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
	* function log( v, i ) {
	*     console.log( '%s: %s', i, v.toString() );
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* arr.forEach( log );
	* // => 0: true
	* // => 1: false
	* // => 2: true
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
	* var arr = new BooleanArray( 10 );
	*
	* var v = arr.get( 0 );
	* // returns false
	*
	* arr.set( true, 0 );
	*
	* v = arr.get( 100 );
	* // returns undefined
	*/
	get( i: number ): boolean | void;

	/**
	* Returns a boolean indicating whether an array includes a provided value.
	*
	* @param searchElement - element to search for
	* @param fromIndex - starting index (inclusive)
	* @returns boolean indicating whether an array includes a value
	*
	* @example
	* var arr = new BooleanArray( 5 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	* arr.set( true, 3 );
	* arr.set( true, 4 );
	*
	* var bool = arr.includes( true );
	* // returns true
	*
	* bool = arr.includes( false, 2 );
	* // returns false
	*/
	includes( searchElement: boolean, fromIndex?: number ): boolean;

	/**
	* Returns the first index at which a given element can be found.
	*
	* @param searchElement - element to find
	* @param fromIndex - starting index (inclusive)
	* @returns index or -1
	*
	* @example
	* var arr = new BooleanArray( 5 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	* arr.set( true, 3 );
	* arr.set( true, 4 );
	*
	* var idx = arr.indexOf( true );
	* // returns 0
	*
	* idx = arr.indexOf( false, 2 );
	* // returns -1
	*
	* idx = arr.indexOf( false, -3 );
	* // returns -1
	*/
	indexOf( searchElement: boolean, fromIndex?: number ): number;

	/**
	* Returns a new string by concatenating all array elements.
	*
	* @param separator - value separator (default: ',')
	* @returns string
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var str = arr.join();
	* // returns 'true,false,true'
	*
	* str = arr.join( '|' );
	* // returns 'true|false|true'
	*/
	join( separator?: string ): string;

	/**
	* Returns an iterator for iterating over each index key in a typed array.
	*
	* @returns iterator
	*
	* @example
	* var arr = new BooleanArray( 2 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	*
	* var iter = arr.keys();
	*
	* var v = iter.next().value;
	* // returns 0
	*
	* v = iter.next().value;
	* // returns 1
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	keys(): TypedIterator<number>;

	/**
	* Returns the last index at which a given element can be found.
	*
	* @param searchElement - element to find
	* @param fromIndex - index at which to start searching backward (inclusive)
	* @returns index or -1
	*
	* @example
	* var arr = new BooleanArray( 5 );
	*
	* arr.set( true, 0 );
	* arr.set( true, 1 );
	* arr.set( true, 2 );
	* arr.set( false, 3 );
	* arr.set( true, 4 );
	*
	* var idx = arr.lastIndexOf( true );
	* // returns 4
	*
	* idx = arr.lastIndexOf( false, 2 );
	* // returns -1
	*
	* idx = arr.lastIndexOf( false, -3 );
	* // returns -1
	*/
	lastIndexOf( searchElement: boolean, fromIndex?: number ): number;

	/**
	* Returns a new array with each element being the result of a provided callback function.
	*
	* @param fcn - callback function
	* @param thisArg - callback function execution context
	* @returns new boolean array
	*
	* @example
	* function invert( v ) {
	*     return !v;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.map( invert );
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns true
	*
	* v = out.get( 2 );
	* // returns false
	*/
	map<U = unknown>( fcn: MapFcn<U>, thisArg?: ThisParameterType<MapFcn<U>> ): BooleanArray;

	/**
	* Applies a provided callback function to each element of the array, in order, passing in the return value from the calculation on the preceding element and returning the accumulated result upon completion.
	*
	* @param reducer - callback function
	* @param initialValue - initial value
	* @returns accumulated result
	*
	* @example
	* function reducer( acc, v ) {
	*     if ( v ) {
	*          return acc + 1;
	*     }
	*     return acc;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.reduce( reducer, 0 );
	* // returns 2
	*/
	reduce<U = unknown>( reducer: Reducer<U>, initialValue?: U ): U;

	/**
	* Applies a provided callback function to each element of the array, in reverse order, passing in the return value from the calculation on the following element and returning the accumulated result upon completion.
	*
	* @param reducer - callback function
	* @param initialValue - initial value
	* @returns accumulated result
	*
	* @example
	* function reducer( acc, v ) {
	*     if ( v ) {
	*          return acc + 1;
	*     }
	*     return acc;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.reduceRight( reducer, 0 );
	* // returns 2
	*/
	reduceRight<U = unknown>( reducer: Reducer<U>, initialValue?: U ): U;

	/**
	* Reverses an array in-place.
	*
	* @returns reversed array
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( false, 2 );
	*
	* var out = arr.reverse();
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns false
	*
	* v = out.get( 2 );
	* // returns true
	*/
	reverse(): BooleanArray;

	/**
	* Sets an array element.
	*
	* ## Notes
	*
	* -   When provided a typed array, we must check whether the source array shares the same buffer as the target array and whether the underlying memory overlaps. In particular, we are concerned with the following scenario:
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
	* @throws index argument is out-of-bounds
	* @throws target array lacks sufficient storage to accommodate source values
	*
	* @example
	* var arr = new BooleanArray( 10 );
	*
	* var v = arr.get( 0 );
	* // returns false
	*
	* arr.set( true, 0 );
	*
	* v = arr.get( 0 );
	* // returns true
	*/
	set( value: ArrayLike<any> | any, i?: number ): void;

	/**
	* Copies a portion of a typed array to a new typed array.
	*
	* @param start - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @throws indices must be integers
	* @returns output array
	*
	* @example
	* var arr = new BooleanArray( 5 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	* arr.set( false, 3 );
	* arr.set( true, 4 );
	*
	* var out = arr.slice();
	* // returns <BooleanArray>
	*
	* var len = out.length;
	* // returns 5
	*
	* var bool = out.get( 0 );
	* // returns true
	*
	* bool = out.get( len-1 );
	* // returns true
	*
	* out = arr.slice( 1, -2 );
	* // returns <BooleanArray>
	*
	* len = out.length;
	* // returns 2
	*
	* bool = out.get( 0 );
	* // returns false
	*
	* bool = out.get( len-1 );
	* // returns true
	*/
	slice( start?: number, end?: number ): BooleanArray;

	/**
	* Tests whether at least one element in an array passes a test implemented by a predicate function.
	*
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns boolean indicating whether at least one element passes a test
	*
	* @example
	* function predicate( v ) {
	*     return v === true;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( false, 0 );
	* arr.set( true, 1 );
	* arr.set( false, 2 );
	*
	* var bool = arr.some( predicate );
	* // returns true
	*/
	some<U = unknown>( predicate: Predicate<U>, thisArg?: ThisParameterType<Predicate<U>> ): boolean;

	/**
	* Sorts an array in-place.
	*
	* @param compareFcn - comparison function
	* @returns sorted array
	*
	* @example
	* function compare( a, b ) {
	*    if ( a === false ) {
	*        if ( b === false ) {
	*            return 0;
	*        }
	*        return 1;
	*    }
	*    if ( b === true ) {
	*        return 0;
	*    }
	*    return -1;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* arr.sort( compare );
	*
	* var v = arr.get( 0 );
	* // returns true
	*
	* v = arr.get( 1 );
	* // returns true
	*
	* v = arr.get( 2 );
	* // returns false
	*/
	sort( compareFcn: CompareFcn ): BooleanArray;

	/**
	* Creates a new typed array view over the same underlying `ArrayBuffer` and with the same underlying data type as the host array.
	*
	* @param begin - starting index (inclusive)
	* @param end - ending index (exclusive)
	* @throws indices must be integers
	* @returns subarray
	*
	* @example
	* var arr = new BooleanArray( 5 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	* arr.set( false, 3 );
	* arr.set( true, 4 );
	*
	* var subarr = arr.subarray();
	* // returns <BooleanArray>
	*
	* var len = subarr.length;
	* // returns 5
	*
	* var bool = subarr.get( 0 );
	* // returns true
	*
	* bool = subarr.get( len-1 );
	* // returns true
	*
	* subarr = arr.subarray( 1, -2 );
	* // returns <BooleanArray>
	*
	* len = subarr.length;
	* // returns 2
	*
	* bool = subarr.get( 0 );
	* // returns false
	*
	* bool = subarr.get( len-1 );
	* // returns true
	*/
	subarray( begin?: number, end?: number ): BooleanArray;

	/**
	* Serializes an array as a locale-specific string.
	*
	* @param locales - locale identifier(s)
	* @param options - configuration options
	* @returns string
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 1 );
	*
	* var str = arr.toLocaleString();
	* // returns 'true,false,true'
	*/
	toLocaleString( locales?: string | Array<string>, options?: LocaleOptions ): string;

	/**
	* Returns a new typed array containing the elements in reversed order.
	*
	* @returns reversed array
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( false, 2 );
	*
	* var out = arr.toReversed();
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*
	* v = out.get( 1 );
	* // returns false
	*
	* v = out.get( 2 );
	* // returns true
	*/
	toReversed(): BooleanArray;

	/**
	* Returns a new typed array containing the elements in sorted order.
	*
	* @param compareFcn - comparison function
	* @returns sorted array
	*
	* @example
	* function compare( a, b ) {
	*    if ( a === false ) {
	*        if ( b === false ) {
	*            return 0;
	*        }
	*        return 1;
	*    }
	*    if ( b === true ) {
	*        return 0;
	*    }
	*    return -1;
	* }
	*
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.sort( compare );
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns true
	*
	* v = out.get( 1 );
	* // returns true
	*
	* v = out.get( 2 );
	* // returns false
	*/
	toSorted( compareFcn: CompareFcn ): BooleanArray;

	/**
	* Serializes an array as a string.
	*
	* @returns string
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var str = arr.toString();
	* // returns 'true,false,true'
	*/
	toString(): string;

	/**
	* Returns an iterator for iterating over each value in a typed array.
	*
	* @returns iterator
	*
	* @example
	* var arr = new BooleanArray( 2 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	*
	* var iter = arr.values();
	*
	* var v = iter.next().value;
	* // returns true
	*
	* v = iter.next().value;
	* // returns false
	*
	* var bool = iter.next().done;
	* // returns true
	*/
	values(): TypedIterator<boolean>;

	/**
	* Returns a new typed array with the element at a provided index replaced with a provided value.
	*
	* @param index - element index
	* @param value - new value
	* @throws first argument must be an integer
	* @throws second argument must be a boolean
	* @throws index argument is out-of-bounds
	* @returns modified typed array
	*
	* @example
	* var arr = new BooleanArray( 3 );
	*
	* arr.set( true, 0 );
	* arr.set( false, 1 );
	* arr.set( true, 2 );
	*
	* var out = arr.with( 0, false );
	* // returns <BooleanArray>
	*
	* var v = out.get( 0 );
	* // returns false
	*/
	with( index: number, value: boolean ): BooleanArray;
}

/**
* Interface defining a Boolean array constructor which is both "newable" and "callable".
*/
interface BooleanArrayConstructor {
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
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	new( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number ): BooleanArray;

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
	* var arr = new BooleanArray();
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 0
	*
	* @example
	* var arr = new BooleanArray( 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var arr = new BooleanArray( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 16
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 16 );
	* var arr = new BooleanArray( buf, 8 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 8
	*
	* @example
	* var ArrayBuffer = require( './../../../buffer' );
	*
	* var buf = new ArrayBuffer( 32 );
	* var arr = new BooleanArray( buf, 8, 2 );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	( arg?: number | ArrayLike<any> | ArrayBuffer | Iterable<any>, byteOffset?: number, length?: number ): BooleanArray;

	/**
	* Constructor name.
	*
	* @example
	* var str = BooleanArray.name;
	* // returns 'BooleanArray'
	*/
	readonly name: 'BooleanArray';

	/**
	* Size (in bytes) of each array element.
	*
	* @example
	* var nbytes = BooleanArray.BYTES_PER_ELEMENT;
	* // returns 1
	*/
	readonly BYTES_PER_ELEMENT: 1;

	/**
	* Creates a new boolean array from an array-like object or an iterable.
	*
	* @param src - array-like object or iterable
	* @param clbk - callback to invoke for each source element
	* @param thisArg - context
	* @returns boolean array
	*
	* @example
	* var arr = BooleanArray.from( [ true, false ] );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*
	* @example
	* function clbk( v ) {
	*     return !v;
	* }
	*
	* var arr = BooleanArray.from( [ true, false ], clbk );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 2
	*/
	from<U = unknown>( src: ArrayLike<any> | Iterable<any>, clbk?: FromCallback<U>, thisArg?: ThisParameterType<FromCallback<U>> ): BooleanArray;

	/**
	* Creates a new boolean array from a variable number of arguments.
	*
	* @param elements - array elements
	* @returns boolean array
	*
	* @example
	* var arr = BooleanArray.of( true, true, true, true );
	* // returns <BooleanArray>
	*
	* var len = arr.length;
	* // returns 4
	*/
	of( ...elements: Array<any> ): BooleanArray;
}

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
* var arr = new BooleanArray();
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 0
*
* @example
* var arr = new BooleanArray( 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var arr = new BooleanArray( [ true, false ] );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 16
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = new BooleanArray( buf, 8 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 8
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = new BooleanArray( buf, 8, 2 );
* // returns <BooleanArray>
*
* var len = arr.length;
* // returns 2
*/
declare var ctor: BooleanArrayConstructor;


// EXPORTS //

export = ctor;
