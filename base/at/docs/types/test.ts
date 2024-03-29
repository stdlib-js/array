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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import toAccessorArray = require( './../../../../base/to-accessor-array' );
import at = require( './index' );


// TESTS //

// The function returns an array element...
{
	at( [ 1, 2, 3, 4 ], 0 ); // $ExpectType number | void
	at( new Float64Array( 5 ), 0 ); // $ExpectType number | void
	at( new Float32Array( 5 ), 0 ); // $ExpectType number | void
	at( new Int32Array( 5 ), 0 ); // $ExpectType number | void
	at( new Int16Array( 5 ), 0 ); // $ExpectType number | void
	at( new Int8Array( 5 ), 0 ); // $ExpectType number | void
	at( new Uint32Array( 5 ), 0 ); // $ExpectType number | void
	at( new Uint16Array( 5 ), 0 ); // $ExpectType number | void
	at( new Uint8Array( 5 ), 0 ); // $ExpectType number | void
	at( new Uint8ClampedArray( 5 ), 0 ); // $ExpectType number | void
	at( new Complex128Array( 5 ), 0 ); // $ExpectType void | Complex128
	at( new Complex64Array( 5 ), 0 ); // $ExpectType void | Complex64
	at( toAccessorArray( [ 1, 2, 3, 4 ] ), 0 ); // $ExpectType number | void
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	at( 5, 0 ); // $ExpectError
	at( true, 0 ); // $ExpectError
	at( false, 0 ); // $ExpectError
	at( null, 0 ); // $ExpectError
	at( void 0, 0 ); // $ExpectError
	at( {}, 0 ); // $ExpectError
	at( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	at( x, 'abc' ); // $ExpectError
	at( x, true ); // $ExpectError
	at( x, false ); // $ExpectError
	at( x, null ); // $ExpectError
	at( x, void 0 ); // $ExpectError
	at( x, [ '1' ] ); // $ExpectError
	at( x, {} ); // $ExpectError
	at( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	at(); // $ExpectError
	at( x ); // $ExpectError
	at( x ); // $ExpectError
	at( x, 0, 0 ); // $ExpectError
}
