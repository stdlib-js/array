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

import { Collection, AccessorArrayLike, DataType } from '@stdlib/types/array';

/**
* Boolean index array.
*/
type BooleanIndexArray = Collection<boolean> | AccessorArrayLike<boolean>;

/**
* Integer index array.
*/
type IntegerIndexArray = Collection<number> | AccessorArrayLike<number>;

/**
* Index array.
*/
type IndexArray = BooleanIndexArray | IntegerIndexArray;

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
* Interface describing an object containing array index data.
*/
interface BaseArrayObject {
	/**
	* The underlying array associated with an array index.
	*/
	data: IndexArray;

	/**
	* The type of array index.
	*/
	type: 'int' | 'bool' | 'mask';

	/**
	* The data type of the underlying array.
	*/
	dtype: DataType;
}

/**
* Interface describing an object containing mask array data.
*/
interface MaskArrayObject extends BaseArrayObject {
	/**
	* The underlying array associated with an array index.
	*/
	data: Uint8Array;

	/**
	* The type of array index.
	*/
	type: 'mask';

	/**
	* The data type of the underlying array.
	*/
	dtype: 'uint8';
}

/**
* Interface describing an object containing integer array data.
*/
interface Int32ArrayObject extends BaseArrayObject {
	/**
	* The underlying array associated with an array index.
	*/
	data: Int32Array;

	/**
	* The type of array index.
	*/
	type: 'int';

	/**
	* The data type of the underlying array.
	*/
	dtype: 'int32';
}

/**
* Interface describing an object containing integer array data.
*/
interface IntegerArrayObject extends BaseArrayObject {
	/**
	* The underlying array associated with an array index.
	*/
	data: IntegerIndexArray;

	/**
	* The type of array index.
	*/
	type: 'int';

	/**
	* The data type of the underlying array.
	*/
	dtype: 'generic';
}

/**
* Interface describing an object containing boolean array data.
*/
interface BooleanArrayObject extends BaseArrayObject {
	/**
	* The underlying array associated with an array index.
	*/
	data: BooleanIndexArray;

	/**
	* The type of array index.
	*/
	type: 'bool';

	/**
	* The data type of the underlying array.
	*/
	dtype: 'generic';
}

/**
* Array object data.
*/
type ArrayObject = MaskArrayObject | Int32ArrayObject | BooleanArrayObject | IntegerArrayObject | null;

/**
* Interface describing an array index object.
*/
interface BaseArrayIndex {
	/**
	* Read-only property returning the data associated with an `ArrayIndex` instance.
	*/
	data: IndexArray;

	/**
	* Read-only property returning the underlying array index data type.
	*/
	dtype: DataType;

	/**
	* Read-only property returning the unique identifier associated with an `ArrayIndex` instance.
	*/
	id: string;

	/**
	* Boolean indicating if an `ArrayIndex` instance is actively cached.
	*/
	isCached: boolean;

	/**
	* Read-only property returning the array index type.
	*/
	type: 'int' | 'bool' | 'mask';

	/**
	* Serializes an `ArrayIndex` to a string.
	*
	* @returns serialized string
	*
	* @example
	* var Uint8Array = require( './../../../uint8' );
	*
	* var idx = new ArrayIndex( new Uint8Array( [ 1, 0, 1, 0 ] ) );
	* // returns <ArrayIndex>
	*
	* var str = idx.toString();
	* // e.g., 'ArrayIndex<0>'
	*/
	toString(): string;
}

/**
* Interface describing a mask array index object.
*/
interface MaskArrayIndex extends BaseArrayIndex {
	/**
	* Read-only property returning the array index type.
	*/
	type: 'mask';

	/**
	* Read-only property returning the underlying array index data type.
	*/
	dtype: 'uint8';

	/**
	* Read-only property returning the underlying array data.
	*/
	data: Uint8Array;
}

/**
* Interface describing an integer array index object.
*/
interface Int32ArrayIndex extends BaseArrayIndex {
	/**
	* Read-only property returning the array index type.
	*/
	type: 'int';

	/**
	* Read-only property returning the underlying array index data type.
	*/
	dtype: 'int32';

	/**
	* Read-only property returning the underlying array data.
	*/
	data: Int32Array;
}

/**
* Interface describing a boolean array index object.
*/
interface BooleanArrayIndex extends BaseArrayIndex {
	/**
	* Read-only property returning the array index type.
	*/
	type: 'bool';

	/**
	* Read-only property returning the underlying array index data type.
	*/
	dtype: 'generic';

	/**
	* Read-only property returning the underlying array data.
	*/
	data: BooleanIndexArray;
}

/**
* Interface describing an integer array index object.
*/
interface IntegerArrayIndex extends BaseArrayIndex {
	/**
	* Read-only property returning the array index type.
	*/
	type: 'int';

	/**
	* Read-only property returning the underlying array index data type.
	*/
	dtype: 'generic';

	/**
	* Read-only property returning the underlying array data.
	*/
	data: IntegerIndexArray;
}

/**
* Array index object.
*/
type ArrayIndex = MaskArrayIndex | Int32ArrayIndex | BooleanArrayIndex | IntegerArrayIndex;

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
	new( x: IntegerIndexArray, options?: Options ): IntegerArrayIndex;

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
	new( x: BooleanIndexArray, options?: Options ): BooleanArrayIndex;

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
	( x: IntegerIndexArray, options?: Options ): IntegerArrayIndex;

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
	( x: BooleanIndexArray, options?: Options ): BooleanArrayIndex;

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
	get<T extends BaseArrayObject = ArrayObject>( id: string ): T;
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
