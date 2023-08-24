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

/* tslint:disable:max-file-line-count */

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Collection, Array1D, Array2D, Array3D, Array4D, Array5D, Array6D, Array7D, Array8D, Array9D, Array10D } from '@stdlib/types/array';

/**
* One-dimensional array shape.
*/
type Shape1D = [ number ]; // tslint:disable-line:no-single-element-tuple-type

/**
* Two-dimensional array shape.
*/
type Shape2D = [ number, number ];

/**
* Three-dimensional array shape.
*/
type Shape3D = [ number, number, number ];

/**
* Four-dimensional array shape.
*/
type Shape4D = [ number, number, number, number ];

/**
* Five-dimensional array shape.
*/
type Shape5D = [ number, number, number, number, number ];

/**
* Six-dimensional array shape.
*/
type Shape6D = [ number, number, number, number, number, number ];

/**
* Seven-dimensional array shape.
*/
type Shape7D = [ number, number, number, number, number, number, number ];

/**
* Eight-dimensional array shape.
*/
type Shape8D = [ number, number, number, number, number, number, number, number ];

/**
* Nine-dimensional array shape.
*/
type Shape9D = [ number, number, number, number, number, number, number, number, number ];

/**
* Ten-dimensional array shape.
*/
type Shape10D = [ number, number, number, number, number, number, number, number, number, number ];

/**
* Nullary callback function.
*
* @returns result
*/
type Nullary<U, V> = ( this: V ) => U;

/**
* Unary callback function.
*
* @param value - array element
* @returns result
*/
type Unary<T, U, V> = ( this: V, value: T ) => U;

/**
* Binary callback function.
*
* @param value - array element
* @param indices - element indices
* @returns result
*/
type Binary<T, U, V> = ( this: V, value: T, indices: Array<number> ) => U; // TODO: could consider whether to make indices a tuple of fixed length, but would require Binary1D, Binary2D, etc, etc.

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary1D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array1D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary2D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array2D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary3D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array3D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary4D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array4D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary5D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array5D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary6D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array6D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary7D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array7D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary8D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array8D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary9D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array9D<T> ) => U;

/**
* Ternary callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Ternary10D<T, U, V> = ( this: V, value: T, indices: Array<number>, arr: Array10D<T> ) => U;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback1D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary1D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback2D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary2D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback3D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary3D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback4D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary4D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback5D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary5D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback6D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary6D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback7D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary7D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback8D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary8D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback9D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary9D<T, U, V>;

/**
* Callback function.
*
* @param value - array element
* @param indices - element indices
* @param arr - input array
* @returns result
*/
type Callback10D<T, U, V> = Nullary<U, V> | Unary<T, U, V> | Binary<T, U, V> | Ternary10D<T, U, V>;

/**
* Interface describing `flattenBy`.
*/
interface FlattenBy {
	/**
	* Flattens a one-dimensional nested array according to a callback function.
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ 1, 2 ];
	*
	* var out = flattenBy( x, [ 2 ], false, scale );
	* // returns [ 2, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ 1, 2 ];
	*
	* var out = flattenBy( x, [ 2 ], true, scale );
	* // returns [ 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array1D<T>, shape: Shape1D, colexicographic: boolean, clbk: Callback1D<T, U, V>, thisArg?: ThisParameterType<Callback1D<T, U, V>> ): Array<U>;

	/**
	* Flattens a two-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flattenBy( x, [ 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flattenBy( x, [ 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array2D<T>, shape: Shape2D, colexicographic: boolean, clbk: Callback2D<T, U, V>, thisArg?: ThisParameterType<Callback2D<T, U, V>> ): Array<T>;

	/**
	* Flattens a three-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*
	* var out = flattenBy( x, [ 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*
	* var out = flattenBy( x, [ 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array3D<T>, shape: Shape3D, colexicographic: boolean, clbk: Callback3D<T, U, V>, thisArg?: ThisParameterType<Callback3D<T, U, V>> ): Array<T>;

	/**
	* Flattens a four-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array4D<T>, shape: Shape4D, colexicographic: boolean, clbk: Callback4D<T, U, V>, thisArg?: ThisParameterType<Callback4D<T, U, V>> ): Array<T>;

	/**
	* Flattens a five-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array5D<T>, shape: Shape5D, colexicographic: boolean, clbk: Callback5D<T, U, V>, thisArg?: ThisParameterType<Callback5D<T, U, V>> ): Array<T>;

	/**
	* Flattens a six-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array6D<T>, shape: Shape6D, colexicographic: boolean, clbk: Callback6D<T, U, V>, thisArg?: ThisParameterType<Callback6D<T, U, V>> ): Array<T>;

	/**
	* Flattens a seven-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array7D<T>, shape: Shape7D, colexicographic: boolean, clbk: Callback7D<T, U, V>, thisArg?: ThisParameterType<Callback7D<T, U, V>> ): Array<T>;

	/**
	* Flattens an eight-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array8D<T>, shape: Shape8D, colexicographic: boolean, clbk: Callback8D<T, U, V>, thisArg?: ThisParameterType<Callback8D<T, U, V>> ): Array<T>;

	/**
	* Flattens a nine-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array9D<T>, shape: Shape9D, colexicographic: boolean, clbk: Callback9D<T, U, V>, thisArg?: ThisParameterType<Callback9D<T, U, V>> ): Array<T>;

	/**
	* Flattens a ten-dimensional nested array according to a callback function.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns flattened array
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], false, scale );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy( x, [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], true, scale );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown, U = unknown, V = unknown>( x: Array10D<T>, shape: Shape10D, colexicographic: boolean, clbk: Callback10D<T, U, V>, thisArg?: ThisParameterType<Callback10D<T, U, V>> ): Array<T>;

	/**
	* Flattens a one-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ 1, 2 ];
	*
	* var out = flattenBy.assign( x, [ 2 ], false, new Float64Array( 2 ), 1, 0, scale );
	* // returns <Float64Array>[ 2, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ 1, 2 ];
	*
	* var out = flattenBy.assign( x, [ 2 ], true, new Float64Array( 2 ), 1, 0, scale );
	* // returns <Float64Array>[ 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array1D<T>, shape: Shape1D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback1D<T, U, W>, thisArg?: ThisParameterType<Callback1D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a two-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flattenBy.assign( x, [ 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flattenBy.assign( x, [ 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array2D<T>, shape: Shape2D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback2D<T, U, W>, thisArg?: ThisParameterType<Callback2D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a three-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ 1, 2 ], [ 3, 4 ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array3D<T>, shape: Shape3D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback3D<T, U, W>, thisArg?: ThisParameterType<Callback3D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a four-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array4D<T>, shape: Shape4D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback4D<T, U, W>, thisArg?: ThisParameterType<Callback4D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a five-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array5D<T>, shape: Shape5D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback5D<T, U, W>, thisArg?: ThisParameterType<Callback5D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a six-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array6D<T>, shape: Shape6D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback6D<T, U, W>, thisArg?: ThisParameterType<Callback6D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a seven-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array7D<T>, shape: Shape7D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback7D<T, U, W>, thisArg?: ThisParameterType<Callback7D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens an eight-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array8D<T>, shape: Shape8D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback8D<T, U, W>, thisArg?: ThisParameterType<Callback8D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a nine-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array9D<T>, shape: Shape9D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback9D<T, U, W>, thisArg?: ThisParameterType<Callback9D<T, U, W>> ): Collection<U | V>;

	/**
	* Flattens a ten-dimensional nested array according to a callback function and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @param clbk - callback function
	* @param thisArg - callback execution context
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], false, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* function scale( v ) {
	*     return v * 2;
	* }
	*
	* var x = [ [ [ [ [ [ [ [ [ [ 1, 2 ], [ 3, 4 ] ] ] ] ] ] ] ] ] ];
	*
	* var out = flattenBy.assign( x, [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 2 ], true, new Float64Array( 4 ), 1, 0, scale );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown, V = unknown, W = unknown>( x: Array10D<T>, shape: Shape10D, colexicographic: boolean, out: Collection<V>, stride: number, offset: number, clbk: Callback10D<T, U, W>, thisArg?: ThisParameterType<Callback10D<T, U, W>> ): Collection<U | V>;
}

/**
* Flattens an n-dimensional nested array according to a callback function.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param x - input array
* @param shape - array shape
* @param colexicographic - specifies whether to flatten array values in colexicographic order
* @param clbk - callback function
* @param thisArg - callback execution context
* @returns flattened array
*
* @example
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flattenBy( x, [ 2, 2 ], false, scale );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* function scale( v ) {
*     return v * 2;
* }
*
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flattenBy( x, [ 2, 2 ], true, scale );
* // returns [ 1, 3, 2, 4 ]
*/
declare var flattenBy: FlattenBy;


// EXPORTS //

export = flattenBy;
