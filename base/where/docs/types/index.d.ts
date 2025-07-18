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

import { Collection, AccessorArrayLike, TypedArray, ComplexTypedArray, BooleanTypedArray } from '@stdlib/types/array';
import { ComplexLike } from '@stdlib/types/complex';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface describing `where`.
*/
interface Where {
	/**
	* Takes elements from either one of two arrays depending on a condition.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	*
	* var condition = [ true, false, true, false ];
	*
	* var z = where( condition, x, y );
	* // returns [ 1, 6, 3, 8 ]
	*/
	<T = unknown, U = unknown, V = unknown>( condition: InputArray<T>, x: InputArray<U>, y: InputArray<V> ): Array<U | V>;

	/**
	* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Int32Array = require( './../../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	* var y = new Int32Array( [ 5, 6, 7, 8 ] );
	*
	* var out = new Int32Array( [ 0, 0, 0, 0 ] );
	* var condition = [ true, false, true, false ];
	*
	* var arr = assign( condition, x, y, out, 1, 0 );
	* // returns <Int32Array>[ 1, 6, 3, 8 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T extends TypedArray>( condition: InputArray<any>, x: InputArray<number>, y: InputArray<number>, out: T, stride: number, offset: number ): T;

	/**
	* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var BooleanArray = require( './../../../../bool' );
	*
	* var x = new BooleanArray( [ 0, 1, 0, 1 ] );
	* var y = new BooleanArray( [ 1, 0, 1, 0 ] );
	*
	* var out = new BooleanArray( [ 0, 0, 0, 0 ] );
	* var condition = [ true, false, true, false ];
	*
	* var arr = assign( condition, x, y, out, 1, 0 );
	* // returns <BooleanArray>
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = arr.get( 0 );
	* // returns true
	*
	* v = arr.get( 1 );
	* // returns true
	*/
	assign<T extends BooleanTypedArray>( condition: InputArray<any>, x: InputArray<boolean>, y: InputArray<boolean>, out: T, stride: number, offset: number ): T;

	/**
	* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var BooleanArray = require( './../../../../bool' );
	*
	* var x = new BooleanArray( [ 0, 1, 0, 1 ] );
	* var y = new BooleanArray( [ 1, 0, 1, 0 ] );
	*
	* var out = new BooleanArray( [ 0, 0, 0, 0 ] );
	* var condition = [ true, false, true, false ];
	*
	* var arr = assign( condition, x, y, out, 1, 0 );
	* // returns <BooleanArray>
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* var v = arr.get( 0 );
	* // returns true
	*
	* v = arr.get( 1 );
	* // returns true
	*/
	assign<T extends ComplexTypedArray>( condition: InputArray<any>, x: InputArray<ComplexLike>, y: InputArray<ComplexLike>, out: T, stride: number, offset: number ): T;

	/**
	* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	* var condition = [ true, false, true, false ];
	*
	* var arr = assign( condition, x, y, out, 1, 0 );
	* // returns [ 1, 6, 3, 8 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( condition: InputArray<any>, x: InputArray<T>, y: InputArray<U>, out: Array<V>, stride: number, offset: number ): Array<T | U | V>;

	/**
	* Takes elements from either one of two arrays depending on a condition and assigns the values to elements in a provided output array.
	*
	* @param condition - array containing indicator values
	* @param x - first input array
	* @param y - second input array
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	* var y = [ 5, 6, 7, 8 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	* var condition = [ true, false, true, false ];
	*
	* var arr = assign( condition, x, y, out, 1, 0 );
	* // returns [ 1, 6, 3, 8 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( condition: InputArray<any>, x: InputArray<T>, y: InputArray<U>, out: InputArray<V>, stride: number, offset: number ): InputArray<T | U | V>;
}

/**
* Takes elements from either one of two arrays depending on a condition.
*
* @param condition - array containing indicator values
* @param x - first input array
* @param y - second input array
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var condition = [ true, false, true, false ];
*
* var z = where( condition, x, y );
* // returns [ 1, 6, 3, 8 ]
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var y = [ 5, 6, 7, 8 ];
*
* var out = [ 0, 0, 0, 0 ];
* var condition = [ true, false, true, false ];
*
* var arr = where.assign( condition, x, y, out, 1, 0 );
* // returns [ 1, 6, 3, 8 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var where: Where;


// EXPORTS //

export = where;
