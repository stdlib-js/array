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
import BooleanArray = require( './../../../bool' );
import convertSame = require( './index' );


// TESTS //

// The function returns an array having a desired data type...
{
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Float64Array( 0 ) ); // $ExpectType Float64Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Float32Array( 0 ) ); // $ExpectType Float32Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Int32Array( 0 ) ); // $ExpectType Int32Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Int16Array( 0 ) ); // $ExpectType Int16Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Int8Array( 0 ) ); // $ExpectType Int8Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Uint32Array( 0 ) ); // $ExpectType Uint32Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Uint16Array( 0 ) ); // $ExpectType Uint16Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Uint8Array( 0 ) ); // $ExpectType Uint8Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Uint8ClampedArray( 0 ) ); // $ExpectType Uint8ClampedArray
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Complex128Array( 0 ) ); // $ExpectType Complex128Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new Complex64Array( 0 ) ); // $ExpectType Complex64Array
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], new BooleanArray( 0 ) ); // $ExpectType BooleanArray
	convertSame( [ 1.0, 2.0, 3.0, 4.0 ], [] ); // $ExpectType any[]
}

// The compiler throws an error if the function is provided a first argument which is not array-like...
{
	const y = new Float64Array( 0 );

	convertSame( 123, y );  // $ExpectError
	convertSame( true, y ); // $ExpectError
	convertSame( false, y ); // $ExpectError
	convertSame( {}, y ); // $ExpectError
	convertSame( null, y ); // $ExpectError
	convertSame( undefined, y ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array or typed array...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];

	convertSame( x, 'abc' );  // $ExpectError
	convertSame( x, 123 );  // $ExpectError
	convertSame( x, true ); // $ExpectError
	convertSame( x, false ); // $ExpectError
	convertSame( x, {} ); // $ExpectError
	convertSame( x, null ); // $ExpectError
	convertSame( x, undefined ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1.0, 2.0, 3.0, 4.0 ];
	const y = new Float64Array( 0 );

	convertSame(); // $ExpectError
	convertSame( x ); // $ExpectError
	convertSame( x, y, 2 ); // $ExpectError
}
