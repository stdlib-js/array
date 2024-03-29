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

import Complex128Array = require( './../../../complex128' );
import Complex64Array = require( './../../../complex64' );
import zeroToLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	zeroToLike( [ 0, 0 ] ); // $ExpectType number[]
	zeroToLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	zeroToLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	zeroToLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	zeroToLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	zeroToLike( new Int32Array( [ 0, 0 ] ) ); // $ExpectType Int32Array
	zeroToLike( new Int16Array( [ 0, 0 ] ) ); // $ExpectType Int16Array
	zeroToLike( new Int8Array( [ 0, 0 ] ) ); // $ExpectType Int8Array
	zeroToLike( new Uint32Array( [ 0, 0 ] ) ); // $ExpectType Uint32Array
	zeroToLike( new Uint16Array( [ 0, 0 ] ) ); // $ExpectType Uint16Array
	zeroToLike( new Uint8Array( [ 0, 0 ] ) ); // $ExpectType Uint8Array
	zeroToLike( new Uint8ClampedArray( [ 0, 0 ] ) ); // $ExpectType Uint8ClampedArray

	zeroToLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	zeroToLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	zeroToLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	zeroToLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	zeroToLike( [ 0, 0 ], 'int32' ); // $ExpectType Int32Array
	zeroToLike( [ 0, 0 ], 'int16' ); // $ExpectType Int16Array
	zeroToLike( [ 0, 0 ], 'int8' ); // $ExpectType Int8Array
	zeroToLike( [ 0, 0 ], 'uint32' ); // $ExpectType Uint32Array
	zeroToLike( [ 0, 0 ], 'uint16' ); // $ExpectType Uint16Array
	zeroToLike( [ 0, 0 ], 'uint8' ); // $ExpectType Uint8Array
	zeroToLike( [ 0, 0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	zeroToLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	zeroToLike( '5' ); // $ExpectError
	zeroToLike( false ); // $ExpectError
	zeroToLike( true ); // $ExpectError
	zeroToLike( null ); // $ExpectError
	zeroToLike( undefined ); // $ExpectError
	zeroToLike( {} ); // $ExpectError
	zeroToLike( ( x: number ): number => x ); // $ExpectError

	zeroToLike( '5', 'float32' ); // $ExpectError
	zeroToLike( false, 'float32' ); // $ExpectError
	zeroToLike( true, 'float32' ); // $ExpectError
	zeroToLike( null, 'float32' ); // $ExpectError
	zeroToLike( undefined, 'float32' ); // $ExpectError
	zeroToLike( {}, 'float32' ); // $ExpectError
	zeroToLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	zeroToLike( [ 0, 0 ], '10' ); // $ExpectError
	zeroToLike( [ 0, 0 ], 10 ); // $ExpectError
	zeroToLike( [ 0, 0 ], false ); // $ExpectError
	zeroToLike( [ 0, 0 ], true ); // $ExpectError
	zeroToLike( [ 0, 0 ], null ); // $ExpectError
	zeroToLike( [ 0, 0 ], [] ); // $ExpectError
	zeroToLike( [ 0, 0 ], {} ); // $ExpectError
	zeroToLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	zeroToLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
