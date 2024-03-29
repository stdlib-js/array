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

import { ArrayLike, ComplexTypedArray, ComplexFloatingPointDataTypeMap as DataTypeMap } from '@stdlib/types/array';
import ArrayBuffer = require( './../../../buffer' );

/**
* Creates a complex number typed array.
*
* @param dtype - data type (default: 'complex128')
* @returns complex number typed array
*
* @example
* var arr = complexarray();
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( 'complex64');
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param length - typed array length
* @param dtype - data type (default: 'complex128')
* @returns typed array
*
* @example
* var arr = complexarray( 2 );
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( 2, 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( length: number, dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param complexarray - complex number typed array from which to generate another complex number typed array
* @param dtype - data type (default: 'complex128')
* @returns complex number typed array
*
* @example
* var arr = complexarray( new Complex128Array( 2 ) );
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( new Complex128Array( 2 ), 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( complexarray: ComplexTypedArray, dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param obj - array-like object or iterable from which to generate a typed array
* @param dtype - data type (default: 'complex128')
* @throws array length must be a multiple of two
* @returns complex number typed array
*
* @example
* var arr = complexarray( [ 0.5, 0.5 ] );
* // returns <Complex128Array>
*
* @example
* var arr = complexarray( [ 5, -3 ], 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( obj: ArrayLike<number> | Iterable<any>, dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param buffer - underlying ArrayBuffer
* @param dtype - data type (default: 'complex128')
* @returns complex number typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( buffer: ArrayBuffer, dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first array element (default: 0)
* @param dtype - data type (default: 'complex128')
* @returns complex number typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 32 );
* var arr = complexarray( buf, 16, 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( buffer: ArrayBuffer, byteOffset?: number, dtype?: T ): DataTypeMap[T];

/**
* Creates a complex number typed array.
*
* @param buffer - underlying ArrayBuffer
* @param byteOffset - integer byte offset specifying the location of the first array element (default: 0)
* @param length - view length; if not provided, the view spans from the byteOffset to the end of the underlying ArrayBuffer
* @param dtype - data type (default: 'complex128')
* @returns complex number typed array
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2 );
* // returns <Complex128Array>
*
* @example
* var ArrayBuffer = require( '@stdlib/array/buffer' );
*
* var buf = new ArrayBuffer( 64 );
* var arr = complexarray( buf, 16, 2, 'complex64' );
* // returns <Complex64Array>
*/
declare function complexarray<T extends keyof DataTypeMap = 'complex128'>( buffer: ArrayBuffer, byteOffset?: number, length?: number, dtype?: T ): DataTypeMap[T];


// EXPORTS //

export = complexarray;
