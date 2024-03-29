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
import oneToLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	oneToLike( [ 0, 0 ] ); // $ExpectType number[]
	oneToLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	oneToLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	oneToLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	oneToLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	oneToLike( new Int32Array( [ 0, 0 ] ) ); // $ExpectType Int32Array
	oneToLike( new Int16Array( [ 0, 0 ] ) ); // $ExpectType Int16Array
	oneToLike( new Int8Array( [ 0, 0 ] ) ); // $ExpectType Int8Array
	oneToLike( new Uint32Array( [ 0, 0 ] ) ); // $ExpectType Uint32Array
	oneToLike( new Uint16Array( [ 0, 0 ] ) ); // $ExpectType Uint16Array
	oneToLike( new Uint8Array( [ 0, 0 ] ) ); // $ExpectType Uint8Array
	oneToLike( new Uint8ClampedArray( [ 0, 0 ] ) ); // $ExpectType Uint8ClampedArray

	oneToLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	oneToLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	oneToLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	oneToLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	oneToLike( [ 0, 0 ], 'int32' ); // $ExpectType Int32Array
	oneToLike( [ 0, 0 ], 'int16' ); // $ExpectType Int16Array
	oneToLike( [ 0, 0 ], 'int8' ); // $ExpectType Int8Array
	oneToLike( [ 0, 0 ], 'uint32' ); // $ExpectType Uint32Array
	oneToLike( [ 0, 0 ], 'uint16' ); // $ExpectType Uint16Array
	oneToLike( [ 0, 0 ], 'uint8' ); // $ExpectType Uint8Array
	oneToLike( [ 0, 0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	oneToLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	oneToLike( '5' ); // $ExpectError
	oneToLike( false ); // $ExpectError
	oneToLike( true ); // $ExpectError
	oneToLike( null ); // $ExpectError
	oneToLike( undefined ); // $ExpectError
	oneToLike( {} ); // $ExpectError
	oneToLike( ( x: number ): number => x ); // $ExpectError

	oneToLike( '5', 'float32' ); // $ExpectError
	oneToLike( false, 'float32' ); // $ExpectError
	oneToLike( true, 'float32' ); // $ExpectError
	oneToLike( null, 'float32' ); // $ExpectError
	oneToLike( undefined, 'float32' ); // $ExpectError
	oneToLike( {}, 'float32' ); // $ExpectError
	oneToLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	oneToLike( [ 0, 0 ], '10' ); // $ExpectError
	oneToLike( [ 0, 0 ], 10 ); // $ExpectError
	oneToLike( [ 0, 0 ], false ); // $ExpectError
	oneToLike( [ 0, 0 ], true ); // $ExpectError
	oneToLike( [ 0, 0 ], null ); // $ExpectError
	oneToLike( [ 0, 0 ], [] ); // $ExpectError
	oneToLike( [ 0, 0 ], {} ); // $ExpectError
	oneToLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	oneToLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
