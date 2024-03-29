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
import reverse = require( './index' );


// TESTS //

// The function returns an array...
{
	reverse( [ 1, 2, 3 ] ); // $ExpectType number[]
	reverse( new Float64Array( [ 1, 2, 3 ] ) ); // $ExpectType Float64Array
	reverse( new Float32Array( [ 1, 2, 3 ] ) ); // $ExpectType Float32Array
	reverse( new Int32Array( [ 1, 2, 3 ] ) ); // $ExpectType Int32Array
	reverse( new Int16Array( [ 1, 2, 3 ] ) ); // $ExpectType Int16Array
	reverse( new Int8Array( [ 1, 2, 3 ] ) ); // $ExpectType Int8Array
	reverse( new Uint32Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint32Array
	reverse( new Uint16Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint16Array
	reverse( new Uint8Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint8Array
	reverse( new Uint8ClampedArray( [ 1, 2, 3 ] ) ); // $ExpectType Uint8ClampedArray
	reverse( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex128Array
	reverse( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex64Array
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	reverse( 5 ); // $ExpectError
	reverse( true ); // $ExpectError
	reverse( false ); // $ExpectError
	reverse( null ); // $ExpectError
	reverse( void 0 ); // $ExpectError
	reverse( {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reverse(); // $ExpectError
	reverse( [ 1, 2, 3 ], {} ); // $ExpectError
}
