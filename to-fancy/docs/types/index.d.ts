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

import { Collection, ArrayLike, AccessorArrayLike, ComplexTypedArray, TypedArray, BooleanTypedArray, IndexArrayObject } from '@stdlib/types/array';
import ArrayIndex = require( './../../../index' );

/**
* Interface describing a cache for resolving array index objects.
*/
interface Cache {
	/**
	* Returns an array associated with the index object having a provided identifier.
	*
	* @param id - identifier
	* @returns index data
	*/
	get( id: any ): IndexArrayObject | null;
}

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Boolean indicating whether to enforce strict bounds checking.
	*/
	strict?: boolean;

	/**
	* Cache for resolving array index objects.
	*/
	cache?: Cache;
}

/**
* Interface describing the main export.
*/
interface Array2Fancy {
	/**
	* Converts an array to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var Float64Array = require( './../../../float64' );
	*
	* var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var y = array2fancy( x );
	* // returns <Float64Array>
	*
	* var v = y[ ':' ];
	* // returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Float32Array = require( './../../../float32' );
	*
	* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var y = array2fancy( x );
	* // returns <Float32Array>
	*
	* var v = y[ ':' ];
	* // returns <Float32Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Complex128Array = require( './../../../complex128' );
	*
	* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var y = array2fancy( x );
	* // returns <Complex128Array>
	*
	* var v = y[ ':' ];
	* // returns <Complex128Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Complex64Array = require( './../../../complex64' );
	*
	* var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	*
	* var y = array2fancy( x );
	* // returns <Complex64Array>
	*
	* var v = y[ ':' ];
	* // returns <Complex64Array>[ 1.0, 2.0, 3.0, 4.0 ]
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Int32Array>
	*
	* var v = y[ ':' ];
	* // returns <Int32Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Int16Array = require( './../../../int16' );
	*
	* var x = new Int16Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Int16Array>
	*
	* var v = y[ ':' ];
	* // returns <Int16Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Int8Array = require( './../../../int8' );
	*
	* var x = new Int8Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Int8Array>
	*
	* var v = y[ ':' ];
	* // returns <Int8Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Uint32Array = require( './../../../uint32' );
	*
	* var x = new Uint32Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Uint32Array>
	*
	* var v = y[ ':' ];
	* // returns <Uint32Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Uint16Array = require( './../../../uint16' );
	*
	* var x = new Uint16Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Uint16Array>
	*
	* var v = y[ ':' ];
	* // returns <Uint16Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Uint8Array = require( './../../../uint8' );
	*
	* var x = new Uint8Array( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Uint8Array>
	*
	* var v = y[ ':' ];
	* // returns <Uint8Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Uint8ClampedArray = require( './../../../uint8c' );
	*
	* var x = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* // returns <Uint8ClampedArray>
	*
	* var v = y[ ':' ];
	* // returns <Uint8ClampedArray>[ 1, 2, 3, 4 ]
	*/
	<T extends TypedArray | ComplexTypedArray | BooleanTypedArray>( x: T, options?: Options ): T;

	/**
	* Converts an array to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = array2fancy( x );
	* // returns <Array>
	*
	* var v = y[ ':' ];
	* // returns [ 1, 2, 3, 4 ]
	*/
	<T = unknown>( x: Array<T>, options?: Options ): Array<T>;

	/**
	* Converts an array to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var toAccessorArray = require( './../../../base/to-accessor-array' );
	*
	* var x = toAccessorArray( [ 1, 2, 3, 4 ] );
	*
	* var y = array2fancy( x );
	* var v = y[ ':' ];
	*/
	<T = unknown>( x: AccessorArrayLike<T>, options?: Options ): AccessorArrayLike<T>;

	/**
	* Converts an array to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = array2fancy( x );
	* // returns <Array>
	*
	* var v = y[ ':' ];
	* // returns [ 1, 2, 3, 4 ]
	*/
	<T = unknown>( x: Collection<T>, options?: Options ): Collection<T>;

	/**
	* Converts an array-like value to an object supporting fancy indexing.
	*
	* @param x - input array
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking
	* @param options.cache - cache for resolving array index objects
	* @returns fancy array
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = array2fancy( x );
	* // returns <Array>
	*
	* var v = y[ ':' ];
	* // returns [ 1, 2, 3, 4 ]
	*/
	<T = unknown>( x: ArrayLike<T>, options?: Options ): ArrayLike<T>;

	/**
	* Returns a function for converting an array to an object supporting fancy indexing.
	*
	* @param options - function options
	* @param options.strict - boolean indicating whether to enforce strict bounds checking by default
	* @param options.cache - cache for resolving array index objects
	* @returns function for converting an array to an object supporting fancy indexing
	*
	* @example
	* var fcn = array2fancy.factory();
	*
	* var x = [ 1, 2, 3, 4 ];
	*
	* var y = fcn( x );
	* // returns <Array>
	*
	* var v = y[ ':' ];
	* // returns [ 1, 2, 3, 4 ]
	*/
	factory( options?: Options ): Array2Fancy;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var Uint8Array = require( './../../../uint8' );
	*
	* var x = new Uint8Array( [ 1, 0, 1, 0 ] );
	*
	* var idx = array2fancy.idx( x );
	* // returns <ArrayIndex>
	*/
	idx: typeof ArrayIndex;
}

/**
* Converts an array to an object supporting fancy indexing.
*
* @param x - input array
* @param options - function options
* @param options.strict - boolean indicating whether to enforce strict bounds checking
* @param options.cache - cache for resolving array index objects
* @returns fancy array
*
* @example
* var x = [ 1, 2, 3, 4 ];
*
* var y = array2fancy( x );
* // returns <Array>
*
* var v = y[ ':' ];
* // returns [ 1, 2, 3, 4 ]
*/
declare var array2fancy: Array2Fancy;


// EXPORTS //

export = array2fancy;
