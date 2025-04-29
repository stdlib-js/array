/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import { Collection, AccessorArrayLike, TypedArray } from '@stdlib/types/array';

/**
* Input array.
*/
type InputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Output array.
*/
type OutputArray<T> = Collection<T> | AccessorArrayLike<T>;

/**
* Interface for an object having a `map` method.
*/
interface ObjectWithMap<T> {
	/**
	* Invokes a callback for each element in an array and assigns results to a new output array.
	*
	* @param clbk - callback to apply
	* @param thisArg - callback execution context
	* @returns output array
	*/
	map<V>( clbk: Callback<T, InputArray<T>, V, unknown>, thisArg?: unknown ): ObjectWithMap<V>;
}

/**
* An array having a `map` method.
*/
type ArrayWithMap<T> = InputArray<T> & ObjectWithMap<T>;

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<V, ThisArg> = ( this: ThisArg ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @returns result
*/
type Unary<T, V, ThisArg> = ( this: ThisArg, value: T ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @returns result
*/
type Binary<T, V, ThisArg> = ( this: ThisArg, value: T, index: number ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns result
*/
type Ternary<T, U, V, ThisArg> = ( this: ThisArg, value: T, index: number, arr: U ) => V;

/**
* Callback invoked for each array element.
*
* @param value - current array element
* @param index - current array element index
* @param arr - input array
* @returns result
*/
type Callback<T, U, V, ThisArg> = Nullary<V, ThisArg> | Unary<T, V, ThisArg> | Binary<T, V, ThisArg> | Ternary<T, U, V, ThisArg>;

/**
* Interface describing the main export.
*/
interface Routine {
	/**
	* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
	*
	* @param x - input array object
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var ones = require( './../../../../base/ones' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4 );
	* // returns [ 0, 0, 0, 0 ]
	*
	* var y = map( x, scale );
	* // returns [ 10, 10, 10, 10 ]
	*/
	<T = unknown, U extends Array<T> = Array<T>, V = unknown, W extends Array<V> = Array<V>, ThisArg = unknown>( x: U, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): W;

	/**
	* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
	*
	* @param x - input array object
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var ones = require( './../../../../ones' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4, 'int32' );
	* // returns <Int32Array>[ 0, 0, 0, 0 ]
	*
	* var y = map( x, scale );
	* // returns <Int32Array>[ 10, 10, 10, 10 ]
	*/
	<T = unknown, U extends TypedArray = TypedArray, V = unknown, ThisArg = unknown>( x: U, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): U;

	/**
	* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
	*
	* ## Notes
	*
	* -   We assume that an input array having a `map` method returns an array of the same class, and, thus, the output array should also have a `map` method.
	*
	* @param x - input array object
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var ones = require( './../../../../base/ones' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4 );
	* // returns [ 0, 0, 0, 0 ]
	*
	* var y = map( x, scale );
	* // returns [ 10, 10, 10, 10 ]
	*/
	<T = unknown, U extends ArrayWithMap<T> = ArrayWithMap<T>, V = unknown, W extends ArrayWithMap<V> = ArrayWithMap<V>, ThisArg = unknown>( x: U, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): W;

	/**
	* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
	*
	* ## Notes
	*
	* -   When an input array does not have a `map` method, we always return a new "generic" array.
	*
	* @param x - input array object
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var toAccessorArray = require( './../../../../to-accessor-array' );
	* var ones = require( './../../../../base/ones' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	*
	* var x = ones( 4 );
	* // returns [ 0, 0, 0, 0 ]
	*
	* var y = map( toAccessorArray( x ), scale );
	* // returns [ 10, 10, 10, 10 ]
	*/
	<T = unknown, U extends InputArray<T> = InputArray<T>, V = unknown, ThisArg = unknown>( x: U, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): Array<V>;

	/**
	* Applies a callback function to elements in an input array and assigns results to elements in an output array.
	*
	* @param x - input array object
	* @param y - output array object
	* @param stride - stride length for output array
	* @param offset - starting index for output array
	* @param fcn - callback function
	* @param thisArg - callback execution context
	* @returns output array object
	*
	* @example
	* var ones = require( './../../../../base/ones' );
	* var zeros = require( './../../../../base/zeros' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	* var x = ones( 4 );
	* var y = zeros( x.length );
	*
	* var out = map.assign( x, y, 1, 0, scale );
	* // returns [ 10, 10, 10, 10 ]
	*
	* var bool = ( out === y );
	* // returns true
	*
	* @example
	* var toAccessorArray = require( './../../../../to-accessor-array' );
	* var ones = require( './../../../../base/ones' );
	* var zeros = require( './../../../../base/zeros' );
	*
	* function scale( v ) {
	*     return v * 10;
	* }
	* var x = ones( 4 );
	* var y = zeros( x.length );
	*
	* var out = map.assign( toAccessorArray( x ), toAccessorArray( y ), 1, 0 scale );
	* // y => [ 10, 10, 10, 10 ]
	*/
	assign<T = unknown, U extends InputArray<T> = InputArray<T>, V = unknown, W extends OutputArray<V> = OutputArray<V>, ThisArg = unknown>( x: U, y: W, stride: number, offset: number, fcn: Callback<T, U, V, ThisArg>, thisArg?: ThisParameterType<Callback<T, U, V, ThisArg>> ): W;
}

/**
* Applies a callback function to elements in an input array and assigns results to elements in a new output array.
*
* @param x - input array
* @param fcn - callback function
* @param thisArg - callback execution context
* @returns output array
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
*
* function scale( v ) {
*     return v * 10;
* }
*
* var x = ones( 4 );
* var y = map( x, scale );
* // returns [ 10, 10, 10, 10 ]
*
* @example
* var ones = require( '@stdlib/array/base/ones' );
* var zeros = require( '@stdlib/array/base/zeros' );
*
* function scale( v ) {
*     return v * 10;
* }
*
* var x = ones( 4 );
* var y = zeros( x.length );
*
* var out = map.assign( x, y, 1, 0, scale );
* // y => [ 10, 10, 10, 10 ]
*
* var bool = ( out === y );
* // returns true
*/
declare var map: Routine;


// EXPORTS //

export = map;
