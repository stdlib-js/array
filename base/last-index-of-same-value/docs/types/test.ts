/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import lastIndexOfSameValue = require( './index' );


// TESTS //

// The function returns a number...
{
	lastIndexOfSameValue( [ 1, 2, 3 ], 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Float64Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Float32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Int32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Int16Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Int8Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Uint32Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Uint16Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Uint8Array( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3 ); // $ExpectType number
	lastIndexOfSameValue( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3 ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	lastIndexOfSameValue( 5, 0, 3 ); // $ExpectError
	lastIndexOfSameValue( true, 0, 3 ); // $ExpectError
	lastIndexOfSameValue( false, 0, 3 ); // $ExpectError
	lastIndexOfSameValue( null, 0, 3 ); // $ExpectError
	lastIndexOfSameValue( void 0, 0, 3 ); // $ExpectError
	lastIndexOfSameValue( {}, 0, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	lastIndexOfSameValue( x, 0, '5' ); // $ExpectError
	lastIndexOfSameValue( x, 0, true ); // $ExpectError
	lastIndexOfSameValue( x, 0, false ); // $ExpectError
	lastIndexOfSameValue( x, 0, null ); // $ExpectError
	lastIndexOfSameValue( x, 0, void 0 ); // $ExpectError
	lastIndexOfSameValue( x, 0, [] ); // $ExpectError
	lastIndexOfSameValue( x, 0, {} ); // $ExpectError
	lastIndexOfSameValue( x, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	lastIndexOfSameValue(); // $ExpectError
	lastIndexOfSameValue( [ 1, 2, 3 ] ); // $ExpectError
	lastIndexOfSameValue( [ 1, 2, 3 ], 0 ); // $ExpectError
	lastIndexOfSameValue( [ 1, 2, 3 ], 0, 3, false ); // $ExpectError
}
