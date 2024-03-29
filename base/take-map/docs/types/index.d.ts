/**
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

import { Collection, AccessorArrayLike } from '@stdlib/types/array';
import { Mode } from '@stdlib/types/ndarray';

/**
* Index array.
*/
type IndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Callback function invoked for each indexed element.
*/
type Callback<T, U> = ( value: T, index: number ) => U;

/**
* Interface describing `takeMap`.
*/
interface TakeMap {
	/**
	* Takes elements from an array based on an index array and applies a callback function to each element.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param clbk - callback function
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* function transform( v ) {
	*    return v * 2;
	* }
	*
	* var y = takeMap( x, [ 1, 3 ], 'throw', transform );
	* // returns [ 4, 8 ]
	*/
	<T = unknown, U = unknown>( x: Collection<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U> ): Array<U>;

	/**
	* Takes elements from an array based on an index array and applies a callback function to each element. The function assigns the transformed values to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param clbk - callback function
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* function transform( v ) {
	*    return v * 2;
	* }
	*
	* var arr = takeMap.assign( x, [ 1, 3 ], 'throw', transform, out, 2, 0 );
	* // returns <Float64Array>[ 4.0, 0.0, 8.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U>, out: Collection<U>, stride: number, offset: number ): Collection<U>;

	/**
	* Takes elements from an array based on an index array and applies a callback function to each element. The function assigns the transformed values to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param clbk - callback function
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float32Array = require( './../../../../float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	* var out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );
	*
	* function transform( v ) {
	*    return v * 2;
	* }
	*
	* var arr = takeMap.assign( x, [ 1, 3 ], 'throw', transform, out, 2, 0 );
	* // returns <Float32Array>[ 4.0, 0.0, 8.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U>, out: AccessorArrayLike<U>, stride: number, offset: number ): AccessorArrayLike<U>;

	/**
	* Takes elements from an array based on an index array and applies a callback function to each element. The function assigns the transformed values to elements in a provided output array.
	*
	* @param x - input array
	* @param indices - list of element indices
	* @param mode - index mode
	* @param clbk - callback function
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Complex128Array = require( './../../../../float64' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
	* var out = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
	*
	* function transform( v ) {
	*    return v * 2;
	* }
	*
	* var arr = takeMap.assign( x, [ 1, 3 ], 'throw', transform, out, 2, 0 );
	* // returns <Complex128Array>[ 4.0, 0.0, 8.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U>, out: Collection<U>, stride: number, offset: number ): Collection<U>;
}

/**
* Takes elements from an array based on an index array and applies a callback function to each element.
*
* @param x - input array
* @param indices - list of element indices
* @param mode - index mode
* @param clbk - callback function
* @returns output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* function transform( v ) {
*    return v * 2;
* }
*
* var y = takeMap( x, [ 1, 3 ], 'throw', transform );
* // returns [ 4, 8 ]
*/
declare function takeMap<T, U>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U> ): Collection<U>;

/**
* Takes elements from an array based on an index array and applies a callback function to each element. The function assigns the transformed values to elements in a provided output array.
*
* @param x - input array
* @param indices - list of element indices
* @param mode - index mode
* @param clbk - callback function
* @param out - output array
* @param stride - output array stride
* @param offset - output array offset
* @returns output array
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var out = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
*
* function transform( v ) {
*    return v * 2;
* }
*
* var arr = takeMap.assign( x, [ 1, 3 ], 'throw', transform, out, 2, 0 );
* // returns <Float64Array>[ 4.0, 0.0, 8.0, 0.0 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare function takeMapAssign<T, U>( x: Collection<T> | AccessorArrayLike<T>, indices: IndexArray, mode: Mode, clbk: Callback<T, U>, out: Collection<U>, stride: number, offset: number ): Collection<U>;


// EXPORTS //

export = takeMap;
