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

import { Collection, RealTypedArray, ComplexTypedArray, AccessorArrayLike } from '@stdlib/types/array';

/**
* Interface describing `without`.
*/
interface ArrayWith {
	/**
	* Returns a new array containing every element from an input array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var out = without( x, 0 );
	* // returns <Float64Array>[ 2.0, 3.0 ]
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = without( x, 0 );
	* // returns <Complex128Array>[ 3.0, 4.0, 5.0, 6.0 ]
	*/
	<T extends RealTypedArray | ComplexTypedArray>( x: T, index: number ): T;

	/**
	* Returns a new array containing every element from an input array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = without( x, 0 );
	* // returns [ 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = without( x, 1 );
	* // returns [ 1, 3, 4, 5, 6 ]
	*/
	<T = unknown>( x: Collection<T>, index: number ): Array<T>;

	/**
	* Copies every element from one array to another array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../../../float64' );
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = new Float64Array( [ 0, 0, 0 ] );
	* var arr = without.assign( x, 0, out, 1, 0 );
	* // returns <Float64Array>[ 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = new Complex128Array( x.length-1 );
	* var arr = without.assign( x, 0, out, 1, 0 );
	* // returns <Complex128Array>[ 3.0, 4.0, 5.0, 6.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T extends RealTypedArray | ComplexTypedArray>( x: Collection | AccessorArrayLike<any>, index: number, out: T, stride: number, offset: number ): T;

	/**
	* Copies every element from one array to another array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = [ 0, 0, 0 ];
	* var arr = without.assign( x, 0, out, 1, 0 );
	* // returns [ 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, out: Array<U>, stride: number, offset: number ): Array<T | U>;

	/**
	* Copies every element from one array to another array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var toAccessorArray = require( './../../../../base/to-accessor-array' );
	*
	* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
	*
	* var out = toAccessorArray( [ 0, 0, 0 ] );
	* var arr = without.assign( x, 0, out, 1, 0 );
	*
	* var v = out[ 0 ];
	* // returns 2
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, out: AccessorArrayLike<U>, stride: number, offset: number ): AccessorArrayLike<T | U>;

	/**
	* Copies every element from one array to another array, except for the element at a specified index.
	*
	* @param x - input array
	* @param index - index of the element to exclude
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = [ 0, 0, 0 ];
	* var arr = without.assign( x, 0, out, 1, 0 );
	* // returns [ 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, out: Collection<U>, stride: number, offset: number ): Collection<T | U>;
}

/**
* Returns a new array containing every element from an input array, except for the element at a specified index.
*
* @param x - input array
* @param index - index of the element to exclude
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = without( x, 0 );
* // returns [ 2, 3 ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = without( x, 1 );
* // returns [ 1, 3, 4, 5, 6 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = new Float64Array( [ 0, 0, 0 ] );
* var arr = without.assign( x, 0, out, 1, 0 );
* // returns <Float64Array>[ 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var without: ArrayWith;


// EXPORTS //

export = without;
