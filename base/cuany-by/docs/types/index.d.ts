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

import { Collection, AccessorArrayLike, TypedArray, BooleanArray } from '@stdlib/types/array';

/**
* Returns a boolean indicating whether an element passes a test.
*
* @returns boolean indicating whether an element passes a test
*/
type Nullary<U> = ( this: U ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @returns boolean indicating whether an element passes a test
*/
type Unary<T, U> = ( this: U, value: T ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @returns boolean indicating whether an element passes a test
*/
type Binary<T, U> = ( this: U, value: T, index: number ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Ternary<T, U> = ( this: U, value: T, index: number, arr: Collection<T> | AccessorArrayLike<T> ) => boolean;

/**
* Returns a boolean indicating whether an element passes a test.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns boolean indicating whether an element passes a test
*/
type Predicate<T, U> = Nullary<U> | Unary<T, U> | Binary<T, U> | Ternary<T, U>;

/**
* Interface describing `cunanyBy`.
*/
interface CuAnyBy {
	/**
	* Cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function.
	*
	* @param x - input array
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 0, 1, 0 ];
	*
	* var y = cuanyBy( x, isPositive );
	*  // returns [ false, false, false, true, true ];
	*/
	<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, predicate: Predicate<T, U>, thisArg?: ThisParameterType<Predicate<T, U>> ): Array<boolean>;

	/**
	* Cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function and assigns the results to a provided output array.
	*
	* @param x - input array
	* @param y - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 0, 1, 0 ];
	* var y = [ false, null, false, null, false, null, true, null, true, null ];
	*
	* var arr = cuanyBy.assign( x, y, 2, 0, isPositive );
	* // returns [ false, null, false, null, false, null, true, null, true, null ];
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, out: Array<U>, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): Array<U | boolean>;

	/**
	* Cumulatively tests whether at least one array element in a provided array passes a test implemented by a predicate function and assigns the results to the provided output array.
	*
	* @param x - input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - test function
	* @param thisArg - execution context
	* @returns output array
	*
	* @example
	* var BooleanArray = require( './../../../../bool' );
	*
	* function isPositive( v ) {
	*     return ( v > 0 );
	* }
	* var x = [ 0, 1, 0, 1, 0 ];
	* var y = new BooleanArray( [ false, false, false, false, false, false, false, false, false, false ] );
	*
	* var arr = cuanyBy.assign( x, y, 2, 0, isPositive );
	* // returns <BooleanArray>
	*
	* var v = arr.get( 4 );
	* // returns true
	*/
	assign<T, U extends TypedArray | BooleanArray, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, out: U, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): U;

	/**
	* Cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function and assigns the results to a provided output array.
	*
	* @param x - input array
	* @param y - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @param predicate - predicate function
	* @param thisArg - predicate function execution context
	* @returns output array
	*
	* @example
	* function isPositive( v ) {
	*     return v > 0;
	* }
	*
	* var x = [ 0, 0, 0, 1, 0 ];
	* var y = [ false, null, false, null, false, null, true, null, true, null ];
	*
	* var arr = cuanyBy.assign( x, y, 2, 0, isPositive );
	* // returns [ false, null, false, null, false, null, true, null, true, null ];
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, out: Collection<U> | AccessorArrayLike<U>, stride: number, offset: number, predicate: Predicate<T, V>, thisArg?: ThisParameterType<Predicate<T, V>> ): Collection<U | boolean> | AccessorArrayLike<U | boolean>;
}

/**
* Cumulatively tests whether at least one element in a provided array passes a test implemented by a predicate function.
*
* @param x - input array
* @returns output array
*
* @example
* function isPositive( value ) {
*	return ( value > 0 );
* }
*
* var x = [ 0, 0, 0, 1, 0 ];
*
* var y = cuanyBy( x, isPositive );
* // returns [ false, false, false, true, true ]
*
* @example
* function isPositive( value ) {
*	return ( value > 0 );
* }
*
* var x = [ 0, 0, 0, 1, 0 ];
* var y = [ false, null, false, null, false, null, false, null, false, null ];
*
* var arr = cuanyBy.assign( x, y, 2, 0, isPositive );
* // returns [ false, null, false, null, false, null, true, null, true, null ]
*/
declare var cuanyBy: CuAnyBy;


// EXPORTS //

export = cuanyBy;