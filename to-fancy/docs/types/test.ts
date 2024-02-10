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

import Complex128Array = require( './../../../complex128' );
import Complex64Array = require( './../../../complex64' );
import array2fancy = require( './index' );


// TESTS //

// The function returns an array...
{
	array2fancy( [ 1, 2, 3 ] ); // $ExpectType number[]
	array2fancy( new Float64Array( [ 1, 2, 3 ] ) ); // $ExpectType Float64Array
	array2fancy( new Float32Array( [ 1, 2, 3 ] ) ); // $ExpectType Float32Array
	array2fancy( new Int32Array( [ 1, 2, 3 ] ) ); // $ExpectType Int32Array
	array2fancy( new Int16Array( [ 1, 2, 3 ] ) ); // $ExpectType Int16Array
	array2fancy( new Int8Array( [ 1, 2, 3 ] ) ); // $ExpectType Int8Array
	array2fancy( new Uint32Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint32Array
	array2fancy( new Uint16Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint16Array
	array2fancy( new Uint8Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint8Array
	array2fancy( new Uint8ClampedArray( [ 1, 2, 3 ] ) ); // $ExpectType Uint8ClampedArray
	array2fancy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex128Array
	array2fancy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex64Array

	const opts = {
		'strict': true
	};
	array2fancy( [ 1, 2, 3 ], opts ); // $ExpectType number[]
	array2fancy( new Float64Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Float64Array
	array2fancy( new Float32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Float32Array
	array2fancy( new Int32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int32Array
	array2fancy( new Int16Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int16Array
	array2fancy( new Int8Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int8Array
	array2fancy( new Uint32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint32Array
	array2fancy( new Uint16Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint16Array
	array2fancy( new Uint8Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint8Array
	array2fancy( new Uint8ClampedArray( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint8ClampedArray
	array2fancy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), opts ); // $ExpectType Complex128Array
	array2fancy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), opts ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not an array-like value...
{
	array2fancy( 5 ); // $ExpectError
	array2fancy( true ); // $ExpectError
	array2fancy( false ); // $ExpectError
	array2fancy( null ); // $ExpectError
	array2fancy( void 0 ); // $ExpectError
	array2fancy( {} ); // $ExpectError

	array2fancy( 5, {} ); // $ExpectError
	array2fancy( true, {} ); // $ExpectError
	array2fancy( false, {} ); // $ExpectError
	array2fancy( null, {} ); // $ExpectError
	array2fancy( void 0, {} ); // $ExpectError
	array2fancy( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = [ 1, 2, 3, 4 ];

	array2fancy( x, '5' ); // $ExpectError
	array2fancy( x, 5 ); // $ExpectError
	array2fancy( x, true ); // $ExpectError
	array2fancy( x, false ); // $ExpectError
	array2fancy( x, null ); // $ExpectError
	array2fancy( x, [] ); // $ExpectError
	array2fancy( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = [ 1, 2, 3, 4 ];

	array2fancy( x, { 'strict': '5' } ); // $ExpectError
	array2fancy( x, { 'strict': 5 } ); // $ExpectError
	array2fancy( x, { 'strict': null } ); // $ExpectError
	array2fancy( x, { 'strict': [] } ); // $ExpectError
	array2fancy( x, { 'strict': {} } ); // $ExpectError
	array2fancy( x, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	array2fancy(); // $ExpectError
	array2fancy( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}
