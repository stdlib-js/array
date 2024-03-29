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
import Slice = require( '@stdlib/slice/ctor' );
import slice = require( './index' );


// TESTS //

// The function returns an array...
{
	slice( [ 1, 2, 3 ], new Slice(), false ); // $ExpectType number[]
	slice( new Float64Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Float64Array
	slice( new Float32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Float32Array
	slice( new Int32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int32Array
	slice( new Int16Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int16Array
	slice( new Int8Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Int8Array
	slice( new Uint32Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint32Array
	slice( new Uint16Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint16Array
	slice( new Uint8Array( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint8Array
	slice( new Uint8ClampedArray( [ 1, 2, 3 ] ), new Slice(), false ); // $ExpectType Uint8ClampedArray
	slice( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), false ); // $ExpectType Complex128Array
	slice( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), false ); // $ExpectType Complex64Array

	slice( [ 1, 2, 3 ], new Slice(), true ); // $ExpectType number[]
	slice( new Float64Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Float64Array
	slice( new Float32Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Float32Array
	slice( new Int32Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Int32Array
	slice( new Int16Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Int16Array
	slice( new Int8Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Int8Array
	slice( new Uint32Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Uint32Array
	slice( new Uint16Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Uint16Array
	slice( new Uint8Array( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Uint8Array
	slice( new Uint8ClampedArray( [ 1, 2, 3 ] ), new Slice(), true ); // $ExpectType Uint8ClampedArray
	slice( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), true ); // $ExpectType Complex128Array
	slice( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), new Slice(), true ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	slice( 5, new Slice(), false ); // $ExpectError
	slice( true, new Slice(), false ); // $ExpectError
	slice( false, new Slice(), false ); // $ExpectError
	slice( null, new Slice(), false ); // $ExpectError
	slice( void 0, new Slice(), false ); // $ExpectError
	slice( {}, new Slice(), false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a slice object...
{
	const x = [ 1, 2, 3 ];

	slice( x, '5', false ); // $ExpectError
	slice( x, true, false ); // $ExpectError
	slice( x, false, false ); // $ExpectError
	slice( x, null, false ); // $ExpectError
	slice( x, void 0, false ); // $ExpectError
	slice( x, {}, false ); // $ExpectError
	slice( x, [], false ); // $ExpectError
	slice( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ 1, 2, 3 ];

	slice( x, new Slice(), '5' ); // $ExpectError
	slice( x, new Slice(), 5 ); // $ExpectError
	slice( x, new Slice(), null ); // $ExpectError
	slice( x, new Slice(), void 0 ); // $ExpectError
	slice( x, new Slice(), {} ); // $ExpectError
	slice( x, new Slice(), [] ); // $ExpectError
	slice( x, new Slice(), ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	slice(); // $ExpectError
	slice( [ 1, 2, 3 ] ); // $ExpectError
	slice( [ 1, 2, 3 ], new Slice() ); // $ExpectError
	slice( [ 1, 2, 3 ], new Slice(), false, {} ); // $ExpectError
}
