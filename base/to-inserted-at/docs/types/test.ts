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
import toAccessorArray = require( './../../../../base/to-accessor-array' );
import toInsertedAt = require( './index' );


// TESTS //

// The function returns an array...
{
	toInsertedAt( [ 1, 2, 3, 4 ], 0, 5 ); // $ExpectType number[]
	toInsertedAt( new Complex128Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType Complex128Array
	toInsertedAt( new Complex64Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType Complex64Array
	toInsertedAt<number>( toAccessorArray( [ 1, 2, 3, 4 ] ), 0, 5 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	toInsertedAt( 5, 0, 5 ); // $ExpectError
	toInsertedAt( true, 0, 5 ); // $ExpectError
	toInsertedAt( false, 0, 5 ); // $ExpectError
	toInsertedAt( null, 0, 5 ); // $ExpectError
	toInsertedAt( void 0, 0, 5 ); // $ExpectError
	toInsertedAt( {}, 0, 5 ); // $ExpectError
	toInsertedAt( ( x: number ): number => x, 0, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	toInsertedAt( x, 'abc', 5 ); // $ExpectError
	toInsertedAt( x, true, 5 ); // $ExpectError
	toInsertedAt( x, false, 5 ); // $ExpectError
	toInsertedAt( x, null, 5 ); // $ExpectError
	toInsertedAt( x, void 0, 5 ); // $ExpectError
	toInsertedAt( x, [ '1' ], 5 ); // $ExpectError
	toInsertedAt( x, {}, 5 ); // $ExpectError
	toInsertedAt( x, ( x: number ): number => x, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	toInsertedAt(); // $ExpectError
	toInsertedAt( x ); // $ExpectError
	toInsertedAt( x, 0 ); // $ExpectError
	toInsertedAt( x, 0, 0, 5 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];
	const y = new Complex128Array( 4 );

	toInsertedAt.assign( x, 0, 5, [ 0, 0, 0, 0, 0 ], 1, 0 ); // $ExpectType number[]
	toInsertedAt.assign( x, 0, 5, new Float64Array( 5 ), 1, 0 ); // $ExpectType Float64Array
	toInsertedAt.assign( x, 0, 5, new Float32Array( 5 ), 1, 0 ); // $ExpectType Float32Array
	toInsertedAt.assign( x, 0, 5, new Int32Array( 5 ), 1, 0 ); // $ExpectType Int32Array
	toInsertedAt.assign( x, 0, 5, new Int16Array( 5 ), 1, 0 ); // $ExpectType Int16Array
	toInsertedAt.assign( x, 0, 5, new Int8Array( 5 ), 1, 0 ); // $ExpectType Int8Array
	toInsertedAt.assign( x, 0, 5, new Uint32Array( 5 ), 1, 0 ); // $ExpectType Uint32Array
	toInsertedAt.assign( x, 0, 5, new Uint16Array( 5 ), 1, 0 ); // $ExpectType Uint16Array
	toInsertedAt.assign( x, 0, 5, new Uint8Array( 5 ), 1, 0 ); // $ExpectType Uint8Array
	toInsertedAt.assign( x, 0, 5, new Uint8ClampedArray( 5 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	toInsertedAt.assign( y, 0, { 're': 1.0, 'im': 1.0 }, new Complex128Array( 5 ), 1, 0 ); // $ExpectType Complex128Array
	toInsertedAt.assign( y, 0, { 're': 1.0, 'im': 1.0 }, new Complex64Array( 5 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0, 0, 0 ];

	toInsertedAt.assign( 1, 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( true, 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( false, 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( null, 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( void 0, 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( {}, 0, 5, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0, 0, 0 ];

	toInsertedAt.assign( x, '1', 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, true, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, false, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, null, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, void 0, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, [], 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, {}, 5, out, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, ( x: number ): number => x, 5, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	const x = [ 1, 2, 3, 4 ];

	toInsertedAt.assign( x, 0, 5, 1, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, true, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, false, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, null, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, void 0, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, {}, 1, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 5, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0, 0, 0 ];

	toInsertedAt.assign( x, 0, 1, out, '1', 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, true, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, false, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, null, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, void 0, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, [], 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, {}, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0, 0, 0 ];

	toInsertedAt.assign( x, 0, 1, out, 1, '1' ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, true ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, false ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, null ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, void 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, [] ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, {} ); // $ExpectError
	toInsertedAt.assign( x, 0, 1, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0, 0, 0 ];

	toInsertedAt.assign(); // $ExpectError
	toInsertedAt.assign( x ); // $ExpectError
	toInsertedAt.assign( x, 0 ); // $ExpectError
	toInsertedAt.assign( x, 0, 0, out ); // $ExpectError
	toInsertedAt.assign( x, 0, 0, out, 1 ); // $ExpectError
	toInsertedAt.assign( x, 0, 0, out, 1, 0, {} ); // $ExpectError
}
