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
import Complex128 = require( '@stdlib/complex/float64' );
import AccessorArray = require( './../../../base/accessor' );
import place = require( './index' );


// TESTS //

// The function returns an array...
{
	place( [ 1, 2, 3, 4 ], [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectType number[]
	place( new Int32Array( [ 1, 2, 3, 4 ] ), [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectType Int32Array
	place( new Complex128Array( [ 1, 2, 3, 4 ] ), [ 1, 0, 0, 1 ], [ new Complex128( 20, 30 ), [ 40, 50 ] ] ); // $ExpectType Complex128Array
	place( new Complex64Array( [ 1, 2, 3, 4 ] ), [ 1, 0, 0, 1 ], [ new Complex128( 20, 30 ), [ 40, 50 ] ] ); // $ExpectType Complex64Array
	place( new AccessorArray<number>( [ 1, 2, 3, 4 ] ), [ 1, 0, 0, 1 ], new AccessorArray<number>( [ 20, 30 ] ) ); // $ExpectType AccessorArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	place( 1, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
	place( true, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
	place( false, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
	place( null, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
	place( void 0, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
	place( {}, [ 1, 0, 0, 1 ], [ 20, 30 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	place( [], 1, [ 20, 30 ] ); // $ExpectError
	place( [], true, [ 20, 30 ] ); // $ExpectError
	place( [], false, [ 20, 30 ] ); // $ExpectError
	place( [], null, [ 20, 30 ] ); // $ExpectError
	place( [], void 0, [ 20, 30 ] ); // $ExpectError
	place( [], {}, [ 20, 30 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	place( [], [ 1, 0, 0, 1 ], 1 ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], true ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], false ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], null ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], void 0 ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an object...
{
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], '1' ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], 1 ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], true ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], false ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], null ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], [] ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `mode` option which is not a valid mode...
{
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': '1' } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': 1 } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': true } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': false } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': null } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': {} } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': [] } ); // $ExpectError
	place( [], [ 1, 0, 0, 1 ], [ 20, 30 ], { 'mode': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	place(); // $ExpectError
	place( [] ); // $ExpectError
	place( [], [] ); // $ExpectError
	place( [], [], [], {}, {} ); // $ExpectError
}
