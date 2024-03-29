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
import oneTo = require( './index' );


// TESTS //

// The function returns an array of numbers...
{
	oneTo( 11 ); // $ExpectType number[]
}

// The compiler throws an error if the function is not provided a number...
{
	oneTo( true ); // $ExpectError
	oneTo( false ); // $ExpectError
	oneTo( '5' ); // $ExpectError
	oneTo( [] ); // $ExpectError
	oneTo( {} ); // $ExpectError
	oneTo( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	oneTo(); // $ExpectError
	oneTo( 3, 4 ); // $ExpectError
	oneTo( 3, 4, 1 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	oneTo.assign( [ 0, 0, 0, 0 ], 1, 0 ); // $ExpectType number[]
	oneTo.assign( new Float64Array( 4 ), 1, 0 ); // $ExpectType Float64Array
	oneTo.assign( new Float32Array( 4 ), 1, 0 ); // $ExpectType Float32Array
	oneTo.assign( new Int32Array( 4 ), 1, 0 ); // $ExpectType Int32Array
	oneTo.assign( new Int16Array( 4 ), 1, 0 ); // $ExpectType Int16Array
	oneTo.assign( new Int8Array( 4 ), 1, 0 ); // $ExpectType Int8Array
	oneTo.assign( new Uint32Array( 4 ), 1, 0 ); // $ExpectType Uint32Array
	oneTo.assign( new Uint16Array( 4 ), 1, 0 ); // $ExpectType Uint16Array
	oneTo.assign( new Uint8Array( 4 ), 1, 0 ); // $ExpectType Uint8Array
	oneTo.assign( new Uint8ClampedArray( 4 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	oneTo.assign( new Complex128Array( 4 ), 1, 0 ); // $ExpectType Complex128Array
	oneTo.assign( new Complex64Array( 4 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	oneTo.assign( 1, 1, 0 ); // $ExpectError
	oneTo.assign( true, 1, 0 ); // $ExpectError
	oneTo.assign( false, 1, 0 ); // $ExpectError
	oneTo.assign( null, 1, 0 ); // $ExpectError
	oneTo.assign( void 0, 1, 0 ); // $ExpectError
	oneTo.assign( {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	oneTo.assign( out, '1', 0 ); // $ExpectError
	oneTo.assign( out, true, 0 ); // $ExpectError
	oneTo.assign( out, false, 0 ); // $ExpectError
	oneTo.assign( out, null, 0 ); // $ExpectError
	oneTo.assign( out, void 0, 0 ); // $ExpectError
	oneTo.assign( out, {}, 0 ); // $ExpectError
	oneTo.assign( out, [], 0 ); // $ExpectError
	oneTo.assign( out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	oneTo.assign( out, 1, '1' ); // $ExpectError
	oneTo.assign( out, 1, true ); // $ExpectError
	oneTo.assign( out, 1, false ); // $ExpectError
	oneTo.assign( out, 1, null ); // $ExpectError
	oneTo.assign( out, 1, void 0 ); // $ExpectError
	oneTo.assign( out, 1, {} ); // $ExpectError
	oneTo.assign( out, 1, [] ); // $ExpectError
	oneTo.assign( out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const out = [ 0, 0, 0, 0 ];

	oneTo.assign(); // $ExpectError
	oneTo.assign( out ); // $ExpectError
	oneTo.assign( out, 1 ); // $ExpectError
	oneTo.assign( out, 1, 0, {} ); // $ExpectError
}
