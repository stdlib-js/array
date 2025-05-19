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
import { ComplexLike } from '@stdlib/types/complex';

/**
* Interface describing `arrayWith`.
*/
interface ArrayWith {
	/**
	* Returns a new array with the element at the specified index replaced with a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @returns output array
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = arrayWith( x, 0, new Complex128( 7.0, 8.0 ) );
	* // returns <Complex128Array>[ 7.0, 8.0, 3.0, 4.0, 5.0, 6.0 ]
	*/
	<T extends ComplexTypedArray>( x: T, index: number, value: ComplexLike ): T;

	/**
	* Returns a new array with the element at the specified index replaced with a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @returns output array
	*
	* @example
	* var Float64Array = require( './../../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	*
	* var out = arrayWith( x, 0, 5.0 );
	* // returns <Float64Array>[ 5.0, 2.0, 3.0 ]
	*/
	<T extends RealTypedArray>( x: T, index: number, value: number ): T; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Returns a new array with the element at the specified index replaced with a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = arrayWith( x, 0, 7 );
	* // returns [ 7, 2, 3 ]
	*
	* @example
	* var x = [ 1, 2, 3, 4, 5, 6 ];
	*
	* var out = arrayWith( x, 1, 8 );
	* // returns [ 1, 8, 3, 4, 5, 6 ]
	*/
	<T = unknown>( x: Collection<T>, index: number, value: T ): Array<T>;

	/**
	* Copies elements from one array to another array and sets the element at the specified index to a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
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
	* var out = new Float64Array( [ 0, 0, 0, 0 ] );
	* var arr = arrayWith.assign( x, 0, 5, out, 1, 0 );
	* // returns <Float64Array>[ 5, 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T extends RealTypedArray>( x: Collection | AccessorArrayLike<any>, index: number, value: number, out: T, stride: number, offset: number ): T;

	/**
	* Copies elements from one array to another array and sets the element at the specified index to a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var Complex128Array = require( './../../../../complex128' );
	* var Complex128 = require( '@stdlib/complex/float64/ctor' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
	*
	* var out = new Complex128Array( x.length );
	* var arr = arrayWith.assign( x, 0, new Complex128( 7.0, 8.0 ), out, 1, 0 );
	* // returns <Complex128Array>[ 7.0, 8.0, 3.0, 4.0, 5.0, 6.0 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T extends ComplexTypedArray>( x: Collection | AccessorArrayLike<any>, index: number, value: ComplexLike, out: T, stride: number, offset: number ): T; // eslint-disable-line @typescript-eslint/unified-signatures

	/**
	* Copies elements from one array to another array and sets the element at the specified index to a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	* var arr = arrayWith.assign( x, 0, 5, out, 1, 0 );
	* // returns [ 5, 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, value: U, out: Array<V>, stride: number, offset: number ): Array<T | U | V>;

	/**
	* Copies elements from one array to another array and sets the element at the specified index to a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
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
	* var out = toAccessorArray( [ 0, 0, 0, 0 ] );
	* var arr = arrayWith.assign( x, 0, 5, out, 1, 0 );
	*
	* var v = out[ 0 ];
	* // returns 5
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, value: U, out: AccessorArrayLike<V>, stride: number, offset: number ): AccessorArrayLike<T | U | V>;

	/**
	* Copies elements from one array to another array and sets the element at the specified index to a provided value.
	*
	* @param x - input array
	* @param index - index at which to set a provided value
	* @param value - replacement value
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array offset
	* @returns output array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var out = [ 0, 0, 0, 0 ];
	* var arr = arrayWith.assign( x, 0, 5, out, 1, 0 );
	* // returns [ 5, 2, 3, 4 ]
	*
	* var bool = ( arr === out );
	* // returns true
	*/
	assign<T = unknown, U = unknown, V = unknown>( x: Collection<T> | AccessorArrayLike<T>, index: number, value: U, out: Collection<V>, stride: number, offset: number ): Collection<T | U | V>;
}

/**
* Returns a new array with the element at the specified index replaced with a provided value.
*
* @param x - input array
* @param index - index at which to set a provided value
* @param value - replacement value
* @returns output array
*
* @example
* var x = [ 1, 2, 3 ];
*
* var out = arrayWith( x, 0, 7 );
* // returns [ 7, 2, 3 ]
*
* @example
* var x = [ 1, 2, 3, 4, 5, 6 ];
*
* var out = arrayWith( x, 1, 8 );
* // returns [ 1, 8, 3, 4, 5, 6 ]
*
* @example
* var Float64Array = require( '@stdlib/array/float64' );
*
* var x = [ 1, 2, 3, 4 ];
*
* var out = new Float64Array( [ 0, 0, 0, 0 ] );
* var arr = arrayWith.assign( x, 0, 5, out, 1, 0 );
* // returns <Float64Array>[ 5, 2, 3, 4 ]
*
* var bool = ( arr === out );
* // returns true
*/
declare var arrayWith: ArrayWith;


// EXPORTS //

export = arrayWith;
