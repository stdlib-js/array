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
import indexOf = require( './index' );


// TESTS //

// The function returns a number...
{
	indexOf( [ 1, 2, 3 ], 0, 3, false ); // $ExpectType number
	indexOf( new Float64Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Float32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Int32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Int16Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Int8Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, false ); // $ExpectType number
	indexOf( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, false ); // $ExpectType number

	indexOf( [ 1, 2, 3 ], 0, 3, true ); // $ExpectType number
	indexOf( new Float64Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Float32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Int32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Int16Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Int8Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, true ); // $ExpectType number
	indexOf( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, true ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	indexOf( 5, 0, 3, false ); // $ExpectError
	indexOf( true, 0, 3, false ); // $ExpectError
	indexOf( false, 0, 3, false ); // $ExpectError
	indexOf( null, 0, 3, false ); // $ExpectError
	indexOf( void 0, 0, 3, false ); // $ExpectError
	indexOf( {}, 0, 3, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	indexOf( x, 0, '5', false ); // $ExpectError
	indexOf( x, 0, true, false ); // $ExpectError
	indexOf( x, 0, false, false ); // $ExpectError
	indexOf( x, 0, null, false ); // $ExpectError
	indexOf( x, 0, void 0, false ); // $ExpectError
	indexOf( x, 0, [], false ); // $ExpectError
	indexOf( x, 0, {}, false ); // $ExpectError
	indexOf( x, 0, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a boolean...
{
	const x = [ 1, 2, 3 ];

	indexOf( x, 0, 0, '5' ); // $ExpectError
	indexOf( x, 0, 0, 5 ); // $ExpectError
	indexOf( x, 0, 0, null ); // $ExpectError
	indexOf( x, 0, 0, void 0 ); // $ExpectError
	indexOf( x, 0, 0, [] ); // $ExpectError
	indexOf( x, 0, 0, {} ); // $ExpectError
	indexOf( x, 0, 0, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	indexOf(); // $ExpectError
	indexOf( [ 1, 2, 3 ] ); // $ExpectError
	indexOf( [ 1, 2, 3 ], 0 ); // $ExpectError
	indexOf( [ 1, 2, 3 ], 0, 3 ); // $ExpectError
	indexOf( [ 1, 2, 3 ], 0, 3, false, {} ); // $ExpectError
}
