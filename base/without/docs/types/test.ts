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
import without = require( './index' );


// TESTS //

// The function returns an updated array...
{
	without( [ 1, 2, 3, 4 ], 0 ); // $ExpectType number[]
	without( new Complex128Array( 5 ), 0 ); // $ExpectType Complex128Array
	without( new Complex64Array( 5 ), 0 ); // $ExpectType Complex64Array
	without<number>( toAccessorArray( [ 1, 2, 3, 4 ] ), 0 ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	without( 5, 0 ); // $ExpectError
	without( true, 0 ); // $ExpectError
	without( false, 0 ); // $ExpectError
	without( null, 0 ); // $ExpectError
	without( void 0, 0 ); // $ExpectError
	without( {}, 0 ); // $ExpectError
	without( ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	without( x, 'abc' ); // $ExpectError
	without( x, true ); // $ExpectError
	without( x, false ); // $ExpectError
	without( x, null ); // $ExpectError
	without( x, void 0 ); // $ExpectError
	without( x, [ '1' ] ); // $ExpectError
	without( x, {} ); // $ExpectError
	without( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	without(); // $ExpectError
	without( x ); // $ExpectError
	without( x, 0, 0 ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];
	const y = new Complex128Array( 4 );

	without.assign( x, 0, [ 0, 0, 0 ], 1, 0 ); // $ExpectType number[]
	without.assign( x, 0, new Float64Array( 3 ), 1, 0 ); // $ExpectType Float64Array
	without.assign( x, 0, new Float32Array( 3 ), 1, 0 ); // $ExpectType Float32Array
	without.assign( x, 0, new Int32Array( 3 ), 1, 0 ); // $ExpectType Int32Array
	without.assign( x, 0, new Int16Array( 3 ), 1, 0 ); // $ExpectType Int16Array
	without.assign( x, 0, new Int8Array( 3 ), 1, 0 ); // $ExpectType Int8Array
	without.assign( x, 0, new Uint32Array( 3 ), 1, 0 ); // $ExpectType Uint32Array
	without.assign( x, 0, new Uint16Array( 3 ), 1, 0 ); // $ExpectType Uint16Array
	without.assign( x, 0, new Uint8Array( 3 ), 1, 0 ); // $ExpectType Uint8Array
	without.assign( x, 0, new Uint8ClampedArray( 3 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	without.assign( y, 0, new Complex128Array( 3 ), 1, 0 ); // $ExpectType Complex128Array
	without.assign( y, 0, new Complex64Array( 3 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0 ];

	without.assign( 1, 0, out, 1, 0 ); // $ExpectError
	without.assign( true, 0, out, 1, 0 ); // $ExpectError
	without.assign( false, 0, out, 1, 0 ); // $ExpectError
	without.assign( null, 0, out, 1, 0 ); // $ExpectError
	without.assign( void 0, 0, out, 1, 0 ); // $ExpectError
	without.assign( {}, 0, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0 ];

	without.assign( x, '1', out, 1, 0 ); // $ExpectError
	without.assign( x, true, out, 1, 0 ); // $ExpectError
	without.assign( x, false, out, 1, 0 ); // $ExpectError
	without.assign( x, null, out, 1, 0 ); // $ExpectError
	without.assign( x, void 0, out, 1, 0 ); // $ExpectError
	without.assign( x, [], out, 1, 0 ); // $ExpectError
	without.assign( x, {}, out, 1, 0 ); // $ExpectError
	without.assign( x, ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const x = [ 1, 2, 3, 4 ];

	without.assign( x, 0, 1, 1, 0 ); // $ExpectError
	without.assign( x, 0, true, 1, 0 ); // $ExpectError
	without.assign( x, 0, false, 1, 0 ); // $ExpectError
	without.assign( x, 0, null, 1, 0 ); // $ExpectError
	without.assign( x, 0, void 0, 1, 0 ); // $ExpectError
	without.assign( x, 0, {}, 1, 0 ); // $ExpectError
	without.assign( x, 0, ( x: number ): number => x, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0 ];

	without.assign( x, 0, out, '1', 0 ); // $ExpectError
	without.assign( x, 0, out, true, 0 ); // $ExpectError
	without.assign( x, 0, out, false, 0 ); // $ExpectError
	without.assign( x, 0, out, null, 0 ); // $ExpectError
	without.assign( x, 0, out, void 0, 0 ); // $ExpectError
	without.assign( x, 0, out, [], 0 ); // $ExpectError
	without.assign( x, 0, out, {}, 0 ); // $ExpectError
	without.assign( x, 0, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0 ];

	without.assign( x, 0, out, 1, '1' ); // $ExpectError
	without.assign( x, 0, out, 1, true ); // $ExpectError
	without.assign( x, 0, out, 1, false ); // $ExpectError
	without.assign( x, 0, out, 1, null ); // $ExpectError
	without.assign( x, 0, out, 1, void 0 ); // $ExpectError
	without.assign( x, 0, out, 1, [] ); // $ExpectError
	without.assign( x, 0, out, 1, {} ); // $ExpectError
	without.assign( x, 0, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];
	const out = [ 0, 0, 0 ];

	without.assign(); // $ExpectError
	without.assign( x ); // $ExpectError
	without.assign( x, 0 ); // $ExpectError
	without.assign( x, 0, out ); // $ExpectError
	without.assign( x, 0, out, 1 ); // $ExpectError
	without.assign( x, 0, out, 1, 0, {} ); // $ExpectError
}
