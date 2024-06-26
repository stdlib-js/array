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

import { GenericBooleanIndexArray, GenericIntegerIndexArray, IndexArray, MaskArrayIndex, BooleanArrayIndex, Int32ArrayIndex, GenericBooleanArrayIndex, GenericIntegerArrayIndex, ArrayIndex, BaseIndexArrayObject, IndexArrayObject, BooleanArray } from '@stdlib/types/array';

/**
* Interface describing function options.
*/
interface Options {
	/**
	* Boolean indicating whether to continue persisting an index object after first usage (default: `false`).
	*/
	persist?: boolean;
}

/**
* Interface defining an `ArrayIndex` constructor which is both "newable" and "callable".
*/
interface Constructor {
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
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: Uint8Array, options?: Options ): MaskArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var BooleanArray = require( './../../../bool' );
	*
	* var x = new BooleanArray( [ true, false, true, false ] );
	*
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: BooleanArray, options?: Options ): BooleanArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 0, 1, 0 ] );
	*
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: Int32Array, options?: Options ): Int32ArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: GenericIntegerIndexArray, options?: Options ): GenericIntegerArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var x = [ true, false, true, false ];
	*
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: GenericBooleanIndexArray, options?: Options ): GenericBooleanArrayIndex;

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
	* var idx = new ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	new( x: IndexArray, options?: Options ): ArrayIndex;

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
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: Uint8Array, options?: Options ): MaskArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var BooleanArray = require( './../../../bool' );
	*
	* var x = new BooleanArray( [ true, false, true, false ] );
	*
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: BooleanArray, options?: Options ): BooleanArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var Int32Array = require( './../../../int32' );
	*
	* var x = new Int32Array( [ 1, 0, 1, 0 ] );
	*
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: Int32Array, options?: Options ): Int32ArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var x = [ 1, 2, 3, 4 ];
	*
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: GenericIntegerIndexArray, options?: Options ): GenericIntegerArrayIndex;

	/**
	* Array index constructor.
	*
	* @param x - input array
	* @param options - function options
	* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
	* @returns ArrayIndex instance
	*
	* @example
	* var x = [ true, false, true, false ];
	*
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: GenericBooleanIndexArray, options?: Options ): GenericBooleanArrayIndex;

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
	* var idx = ArrayIndex( x );
	* // returns <ArrayIndex>
	*/
	( x: IndexArray, options?: Options ): ArrayIndex;

	/**
	* String value of the constructor name.
	*/
	name: 'ArrayIndex';

	/**
	* Frees the `ArrayIndex` associated with a provided identifier.
	*
	* @param id - identifier
	* @returns boolean indicating whether an `ArrayIndex` was successfully freed
	*
	* @example
	* var Uint8Array = require( './../../../uint8' );
	*
	* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
	*     'persist': true
	* });
	* // returns <ArrayIndex>
	*
	* // ...
	*
	* var out = ArrayIndex.free( idx.id );
	* // returns true
	*/
	free( id: string ): boolean;

	/**
	* Returns the array associated with a provided identifier.
	*
	* @param id - identifier
	* @returns object containing array index data
	*
	* @example
	* var Uint8Array = require( './../../../uint8' );
	*
	* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ), {
	*     'persist': true
	* });
	* // returns <ArrayIndex>
	*
	* // ...
	*
	* var o = ArrayIndex.get( idx.id );
	* // returns {...}
	*
	* var d = o.data;
	* // returns <Uint8Array>[ 1, 0, 1, 0 ]
	*
	* var t = o.type;
	* // returns 'mask'
	*
	* var dt = o.dtype;
	* // returns 'uint8'
	*/
	get<T extends BaseIndexArrayObject = IndexArrayObject>( id: string ): T | null;
}

/**
* Array index constructor.
*
* @param x - input array
* @param options - function options
* @param options.persist - boolean indicating whether to continue persisting an index object after first usage
* @returns ArrayIndex instance
*
* @example
* var Uint8Array = require( '@stdlib/array/uint8' );
*
* var x = new Uint8Array( [ 1, 0, 1, 0 ] );
*
* var idx = new ArrayIndex( x );
* // returns <ArrayIndex>
*/
declare var ctor: Constructor;


// EXPORTS //

export = ctor;
