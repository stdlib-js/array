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
import take = require( './index' );


// TESTS //

// The function returns an array...
{
	take( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType number[]
	take<any>( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType any[]
	take<number>( [ 1, 2, 3, 4 ], [ 1, 3 ] ); // $ExpectType number[]
	take<string>( [ '1', '2', '3', '4' ], [ 1, 3 ] ); // $ExpectType string[]

	take( new Float64Array( 10 ), [ 1, 3 ] ); // $ExpectType Float64Array
	take( new Float32Array( 10 ), [ 1, 3 ] ); // $ExpectType Float32Array
	take( new Int32Array( 10 ), [ 1, 3 ] ); // $ExpectType Int32Array
	take( new Int16Array( 10 ), [ 1, 3 ] ); // $ExpectType Int16Array
	take( new Int8Array( 10 ), [ 1, 3 ] ); // $ExpectType Int8Array
	take( new Uint32Array( 10 ), [ 1, 3 ] ); // $ExpectType Uint32Array
	take( new Uint16Array( 10 ), [ 1, 3 ] ); // $ExpectType Uint16Array
	take( new Uint8Array( 10 ), [ 1, 3 ] ); // $ExpectType Uint8Array
	take( new Uint8ClampedArray( 10 ), [ 1, 3 ] ); // $ExpectType Uint8ClampedArray
	take( new Complex128Array( 10 ), [ 1, 3 ] ); // $ExpectType Complex128Array
	take( new Complex64Array( 10 ), [ 1, 3 ] ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	take( 1, [ 1, 3 ] ); // $ExpectError
	take( true, [ 1, 3 ] ); // $ExpectError
	take( false, [ 1, 3 ] ); // $ExpectError
	take( null, [ 1, 3 ] ); // $ExpectError
	take( void 0, [ 1, 3 ] ); // $ExpectError
	take( {}, [ 1, 3 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	take( [], 1 ); // $ExpectError
	take( [], true ); // $ExpectError
	take( [], false ); // $ExpectError
	take( [], null ); // $ExpectError
	take( [], void 0 ); // $ExpectError
	take( [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an object...
{
	take( [], [ 1, 3 ], '1' ); // $ExpectError
	take( [], [ 1, 3 ], 1 ); // $ExpectError
	take( [], [ 1, 3 ], true ); // $ExpectError
	take( [], [ 1, 3 ], false ); // $ExpectError
	take( [], [ 1, 3 ], null ); // $ExpectError
	take( [], [ 1, 3 ], [] ); // $ExpectError
	take( [], [ 1, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid index mode...
{
	take( [], [ 1, 3 ], { 'mode': '1' } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': 1 } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': true } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': false } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': null } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': {} } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': [] } ); // $ExpectError
	take( [], [ 1, 3 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	take(); // $ExpectError
	take( [] ); // $ExpectError
	take( [], [], {}, {} ); // $ExpectError
}
