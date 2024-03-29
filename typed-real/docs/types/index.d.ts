/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

/* eslint-disable @typescript-eslint/unified-signatures */

/// <reference types="@stdlib/types"/>

import { ArrayLike, TypedArray, RealDataType as DataType } from '@stdlib/types/array';
import ArrayBuffer = require( './../../../buffer' );

/**
* Creates a typed array.
*
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var arr = realarray();
* // returns <Float64Array>
*
* @example
* var arr = realarray( 'float32');
* // returns <Float32Array>
*/
declare function realarray( dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param length - typed array length
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var arr = realarray( 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var arr = realarray( 2, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function realarray( length: number, dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param realarray - typed array from which to generate another typed array
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var arr = realarray( new Float64Array( 2 ) );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var arr = realarray( new Float64Array( 2 ), 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*
* @example
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1 );
* // returns <Float64Array>[ 5.0, 3.0 ]
*
* @example
* var arr1 = realarray( [ 5, 3 ], 'int32' );
* var arr2 = realarray( arr1, 'uint32' );
* // returns <Uint32Array>[ 5, 3 ]
*/
declare function realarray( realarray: TypedArray, dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param obj - array-like object or iterable from which to generate a typed array
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var arr = realarray( [ 0.5, 0.5 ] );
* // returns <Float64Array>[ 0.5, 0.5 ]
*
* @example
* var arr = realarray( [ 5, -3 ], 'int32' );
* // returns <Int32Array>[ 5, -3 ]
*/
declare function realarray( obj: ArrayLike<number> | Iterable<any>, dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param buffer - underlying ArrayBuffer
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0, 0.0, 0.0 ]
*/
declare function realarray( buffer: ArrayBuffer, dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element (default: 0)
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8 );
* // returns <Float64Array>[ 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 16 );
* var arr = realarray( buf, 8, 'float32' );
* // returns <Float32Array>[ 0.0, 0.0 ]
*/
declare function realarray( buffer: ArrayBuffer, byteOffset?: number, dtype?: DataType ): TypedArray;

/**
* Creates a typed array.
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first typed array element (default: 0)
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param dtype - data type (default: 'float64')
* @returns typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2 );
* // returns <Float64Array>[ 0.0, 0.0 ]
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = realarray( buf, 8, 2, 'int32' );
* // returns <Int32Array>[ 0, 0 ]
*/
declare function realarray( buffer: ArrayBuffer, byteOffset?: number, length?: number, dtype?: DataType ): TypedArray;


// EXPORTS //

export = realarray;
