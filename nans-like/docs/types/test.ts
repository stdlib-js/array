/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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
import nansLike = require( './index' );


// TESTS //

// The function returns an array or typed array...
{
	nansLike( [ 0, 0 ] ); // $ExpectType number[]
	nansLike( new Float64Array( [ 0, 0 ] ) ); // $ExpectType Float64Array
	nansLike( new Float32Array( [ 0, 0 ] ) ); // $ExpectType Float32Array
	nansLike( new Complex128Array( [ 0, 0 ] ) ); // $ExpectType Complex128Array
	nansLike( new Complex64Array( [ 0, 0 ] ) ); // $ExpectType Complex64Array

	nansLike( [ 0, 0 ], 'float64' ); // $ExpectType Float64Array
	nansLike( [ 0, 0 ], 'float32' ); // $ExpectType Float32Array
	nansLike( [ 0, 0 ], 'complex128' ); // $ExpectType Complex128Array
	nansLike( [ 0, 0 ], 'complex64' ); // $ExpectType Complex64Array
	nansLike( [ 0, 0 ], 'generic' ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided an array or typed array for the first argument...
{
	nansLike( '5' ); // $ExpectError
	nansLike( 5 ); // $ExpectError
	nansLike( false ); // $ExpectError
	nansLike( true ); // $ExpectError
	nansLike( null ); // $ExpectError
	nansLike( undefined ); // $ExpectError
	nansLike( {} ); // $ExpectError
	nansLike( ( x: number ): number => x ); // $ExpectError

	nansLike( '5', 'float32' ); // $ExpectError
	nansLike( 5, 'float32' ); // $ExpectError
	nansLike( false, 'float32' ); // $ExpectError
	nansLike( true, 'float32' ); // $ExpectError
	nansLike( null, 'float32' ); // $ExpectError
	nansLike( undefined, 'float32' ); // $ExpectError
	nansLike( {}, 'float32' ); // $ExpectError
	nansLike( ( x: number ): number => x, 'float32' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is an unrecognized/unsupported data type...
{
	nansLike( [ 0, 0 ], '10' ); // $ExpectError
	nansLike( [ 0, 0 ], 10 ); // $ExpectError
	nansLike( [ 0, 0 ], false ); // $ExpectError
	nansLike( [ 0, 0 ], true ); // $ExpectError
	nansLike( [ 0, 0 ], null ); // $ExpectError
	nansLike( [ 0, 0 ], [] ); // $ExpectError
	nansLike( [ 0, 0 ], {} ); // $ExpectError
	nansLike( [ 0, 0 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	nansLike( [ 0, 0 ], 'float64', 1 ); // $ExpectError
}
