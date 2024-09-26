/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import { Array4D } from '@stdlib/types/array';
import { Shape4D } from '@stdlib/types/ndarray';

/**
* Array element indices.
*/
type Indices = [ number, number, number, number ];

/**
* Callback invoked for each array element.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, indices: Indices ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @param array - input array
* @returns result
*/
type Ternary<T, U, V> = ( this: V, value: T, indices: Indices, array: Array4D<T> ) => U;

/**
* Callback invoked for each array element.
*
* @param value - array element
* @param indices - current array element indices
* @param array - input array
* @returns result
*/
type Callback<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary<T, U, V>;

/**
* Interface describing the main export.
*/
interface Routine {
	/**
	* Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a new four-dimensional nested output array.
	*
	* @param x - input nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones4d = require( './../../../../base/ones4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = map4d( x, shape, scale );
	* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array4D<T>, shape: Shape4D, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array4D<U>;

	/**
	* Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a four-dimensional nested output array.
	*
	* @param x - input nested array
	* @param y - output nested array
	* @param shape - array shape
	* @param fcn - function to apply
	* @param thisArg - function execution context
	*
	* @example
	* var ones4d = require( './../../../../base/ones4d' );
	* var zeros4d = require( './../../../../base/zeros4d' );
	*
	* function scale( x ) {
	*     return x * 10.0;
	* }
	*
	* var shape = [ 1, 1, 2, 2 ];
	*
	* var x = ones4d( shape );
	* var y = zeros4d( shape );
	*
	* var out = map4d.assign( x, y, shape, scale );
	* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
	*
	* var bool = ( out === y );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Array4D<T>, y: Array4D<U>, shape: Shape4D, fcn: Callback<T, U, V>, thisArg?: ThisParameterType<Callback<T, U, V>> ): Array4D<U>;
}

/**
* Applies a function to elements in a four-dimensional nested input array and assigns results to elements in a new four-dimensional nested output array.
*
* ## Notes
*
* -   The applied function is provided the following arguments:
*
*     -   **value**: array element.
*     -   **indices**: current array element indices.
*     --  **array**: input nested array.
*
* @param x - input nested array
* @param shape - array shape
* @param fcn - function to apply
* @param thisArg - function execution context
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = map4d( x, shape, scale );
* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*
* @example
* var ones4d = require( '@stdlib/array/base/ones4d' );
* var zeros4d = require( '@stdlib/array/base/zeros4d' );
*
* function scale( x ) {
*     return x * 10.0;
* }
*
* var shape = [ 1, 1, 2, 2 ];
*
* var x = ones4d( shape );
* var y = zeros4d( shape );
*
* var out = map4d.assign( x, y, shape, scale );
* // returns [ [ [ [ 10.0, 10.0 ], [ 10.0, 10.0 ] ] ] ]
*
* var bool = ( out === y );
* // returns true
*/
declare var map4d: Routine;


// EXPORTS //

export = map4d;
