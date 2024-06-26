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
import BooleanArray = require( './../../../bool' );
import emptyLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	emptyLike( [ 0, 0 ] ); // $ExpectType number[]
	emptyLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	emptyLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	emptyLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	emptyLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	emptyLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	emptyLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array
	emptyLike( new Int32Array( [ 0, 0 ] ) ); // $ExpectType Int32Array
	emptyLike( new Int16Array( [ 0, 0 ] ) ); // $ExpectType Int16Array
	emptyLike( new Int8Array( [ 0, 0 ] ) ); // $ExpectType Int8Array
	emptyLike( new Uint32Array( [ 0, 0 ] ) ); // $ExpectType Uint32Array
	emptyLike( new Uint16Array( [ 0, 0 ] ) ); // $ExpectType Uint16Array
	emptyLike( new Uint8Array( [ 0, 0 ] ) ); // $ExpectType Uint8Array
	emptyLike( new Uint8ClampedArray( [ 0, 0 ] ) ); // $ExpectType Uint8ClampedArray
	emptyLike( new BooleanArray( [ 0, 0 ] ) ); // $ExpectType BooleanArray
	emptyLike( [ 'a', 'b', 'c' ] ); // $ExpectType number[]

	emptyLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	emptyLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	emptyLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	emptyLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	emptyLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	emptyLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	emptyLike( [ 0, 0 ], 'bool' ); // $ExpectType BooleanArray
	emptyLike( [ 0, 0 ], 'int32' ); // $ExpectType Int32Array
	emptyLike( [ 0, 0 ], 'int16' ); // $ExpectType Int16Array
	emptyLike( [ 0, 0 ], 'int8' ); // $ExpectType Int8Array
	emptyLike( [ 0, 0 ], 'uint32' ); // $ExpectType Uint32Array
	emptyLike( [ 0, 0 ], 'uint16' ); // $ExpectType Uint16Array
	emptyLike( [ 0, 0 ], 'uint8' ); // $ExpectType Uint8Array
	emptyLike( [ 0, 0 ], 'uint8c' ); // $ExpectType Uint8ClampedArray
	emptyLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
	emptyLike( new Int32Array( [ 0, 0 ] ), 'generic' ); // $ExpectType number[]
	emptyLike( [ 'a', 'b', 'c' ], 'generic' ); // $ExpectType number[]
	emptyLike( [ 'a', 'b', 'c' ], 'float64' ); // $ExpectType Float64Array
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	emptyLike( '5' ); // $ExpectError
	emptyLike( false ); // $ExpectError
	emptyLike( true ); // $ExpectError
	emptyLike( null ); // $ExpectError
	emptyLike( undefined ); // $ExpectError
	emptyLike( {} ); // $ExpectError
	emptyLike( ( x: number ): number => x ); // $ExpectError

	emptyLike( '5', 'float32' ); // $ExpectError
	emptyLike( false, 'float32' ); // $ExpectError
	emptyLike( true, 'float32' ); // $ExpectError
	emptyLike( null, 'float32' ); // $ExpectError
	emptyLike( undefined, 'float32' ); // $ExpectError
	emptyLike( {}, 'float32' ); // $ExpectError
	emptyLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	emptyLike( [ 0, 0 ], '10' ); // $ExpectError
	emptyLike( [ 0, 0 ], 10 ); // $ExpectError
	emptyLike( [ 0, 0 ], false ); // $ExpectError
	emptyLike( [ 0, 0 ], true ); // $ExpectError
	emptyLike( [ 0, 0 ], null ); // $ExpectError
	emptyLike( [ 0, 0 ], [] ); // $ExpectError
	emptyLike( [ 0, 0 ], {} ); // $ExpectError
	emptyLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	emptyLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
