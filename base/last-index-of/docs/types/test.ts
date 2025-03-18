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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import lastIndexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	lastIndexOf( [ 1, 2, 3 ], 0, 3, false ); // $ExpectType number
	lastIndexOf( new Float64Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Float32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Int32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Int16Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Int8Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, false ); // $ExpectType number
	lastIndexOf( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, false ); // $ExpectType number

	lastIndexOf( [ 1, 2, 3 ], 0, 3, true ); // $ExpectType number
	lastIndexOf( new Float64Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Float32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Int32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Int16Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Int8Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, true ); // $ExpectType number
	lastIndexOf( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, true ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	lastIndexOf( 5, 0, 3, false ); // $ExpectError
	lastIndexOf( true, 0, 3, false ); // $ExpectError
	lastIndexOf( false, 0, 3, false ); // $ExpectError
	lastIndexOf( null, 0, 3, false ); // $ExpectError
	lastIndexOf( void 0, 0, 3, false ); // $ExpectError
	lastIndexOf( {}, 0, 3, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	lastIndexOf( x, 0, '5', false ); // $ExpectError
	lastIndexOf( x, 0, true, false ); // $ExpectError
	lastIndexOf( x, 0, false, false ); // $ExpectError
	lastIndexOf( x, 0, null, false ); // $ExpectError
	lastIndexOf( x, 0, void 0, false ); // $ExpectError
	lastIndexOf( x, 0, [], false ); // $ExpectError
	lastIndexOf( x, 0, {}, false ); // $ExpectError
	lastIndexOf( x, 0, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ 1, 2, 3 ];

	lastIndexOf( x, 0, 0, '5' ); // $ExpectError
	lastIndexOf( x, 0, 0, 5 ); // $ExpectError
	lastIndexOf( x, 0, 0, null ); // $ExpectError
	lastIndexOf( x, 0, 0, void 0 ); // $ExpectError
	lastIndexOf( x, 0, 0, [] ); // $ExpectError
	lastIndexOf( x, 0, 0, {} ); // $ExpectError
	lastIndexOf( x, 0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	lastIndexOf(); // $ExpectError
	lastIndexOf( [ 1, 2, 3 ] ); // $ExpectError
	lastIndexOf( [ 1, 2, 3 ], 0 ); // $ExpectError
	lastIndexOf( [ 1, 2, 3 ], 0, 3 ); // $ExpectError
	lastIndexOf( [ 1, 2, 3 ], 0, 3, false, {} ); // $ExpectError
}
