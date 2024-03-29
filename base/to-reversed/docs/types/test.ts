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
import toReversed = require( './index' );


// TESTS //

// The function returns an array...
{
	toReversed( [ 1, 2, 3 ] ); // $ExpectType number[]
	toReversed( new Float64Array( [ 1, 2, 3 ] ) ); // $ExpectType Float64Array
	toReversed( new Float32Array( [ 1, 2, 3 ] ) ); // $ExpectType Float32Array
	toReversed( new Int32Array( [ 1, 2, 3 ] ) ); // $ExpectType Int32Array
	toReversed( new Int16Array( [ 1, 2, 3 ] ) ); // $ExpectType Int16Array
	toReversed( new Int8Array( [ 1, 2, 3 ] ) ); // $ExpectType Int8Array
	toReversed( new Uint32Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint32Array
	toReversed( new Uint16Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint16Array
	toReversed( new Uint8Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint8Array
	toReversed( new Uint8ClampedArray( [ 1, 2, 3 ] ) ); // $ExpectType Uint8ClampedArray
	toReversed( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex128Array
	toReversed( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	toReversed( 5 ); // $ExpectError
	toReversed( true ); // $ExpectError
	toReversed( false ); // $ExpectError
	toReversed( null ); // $ExpectError
	toReversed( void 0 ); // $ExpectError
	toReversed( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	toReversed(); // $ExpectError
	toReversed( [ 1, 2, 3 ], {} ); // $ExpectError
}
