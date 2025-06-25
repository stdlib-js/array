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
import BooleanArray = require( './../../../../bool' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import fill = require( './index' );


// TESTS //

// The function returns an array...
{
	const z = new Complex128( 3.0, 5.0 );

	fill( [ 1, 2, 3 ], 5, 0, 3 ); // $ExpectType number[]
	fill( new Float64Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Float64Array
	fill( new Float32Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Float32Array
	fill( new Int32Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Int32Array
	fill( new Int16Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Int16Array
	fill( new Int8Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Int8Array
	fill( new Uint32Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Uint32Array
	fill( new Uint16Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Uint16Array
	fill( new Uint8Array( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Uint8Array
	fill( new Uint8ClampedArray( [ 1, 2, 3 ] ), 5, 0, 3 ); // $ExpectType Uint8ClampedArray
	fill( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), z, 0, 3 ); // $ExpectType Complex128Array
	fill( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), z, 0, 3 ); // $ExpectType Complex64Array
	fill( new BooleanArray( [ true, false, true, false ] ), false, 0, 3 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	fill( 5, 5, 0, 3 ); // $ExpectError
	fill( true, 5, 0, 3 ); // $ExpectError
	fill( false, 5, 0, 3 ); // $ExpectError
	fill( null, 5, 0, 3 ); // $ExpectError
	fill( void 0, 5, 0, 3 ); // $ExpectError
	fill( {}, 5, 0, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	fill( x, 5, '5', 3 ); // $ExpectError
	fill( x, 5, true, 3 ); // $ExpectError
	fill( x, 5, false, 3 ); // $ExpectError
	fill( x, 5, null, 3 ); // $ExpectError
	fill( x, 5, void 0, 3 ); // $ExpectError
	fill( x, 5, {}, 3 ); // $ExpectError
	fill( x, 5, ( x: number ): number => x, 3 ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	fill( x, 0, 1, '5' ); // $ExpectError
	fill( x, 0, 1, true ); // $ExpectError
	fill( x, 0, 1, false ); // $ExpectError
	fill( x, 0, 1, null ); // $ExpectError
	fill( x, 0, 1, void 0 ); // $ExpectError
	fill( x, 0, 1, {} ); // $ExpectError
	fill( x, 0, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fill(); // $ExpectError
	fill( [ 1, 2, 3 ] ); // $ExpectError
	fill( [ 1, 2, 3 ], 0 ); // $ExpectError
	fill( [ 1, 2, 3 ], 0, 1 ); // $ExpectError
	fill( [ 1, 2, 3 ], 0, 1, 3, {} ); // $ExpectError
}
