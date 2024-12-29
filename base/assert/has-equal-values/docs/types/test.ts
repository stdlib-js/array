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

import toAccessorArray = require( './../../../../../base/to-accessor-array' );
import hasEqualValues = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	hasEqualValues( x, x ); // $ExpectType boolean
	hasEqualValues( new Float64Array( x ), new Float64Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Float32Array( x ), new Float32Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Int32Array( x ), new Int32Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Int16Array( x ), new Int16Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Int8Array( x ), new Int8Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Uint32Array( x ), new Uint32Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Uint16Array( x ), new Uint16Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Uint8Array( x ), new Uint8Array( x ) ); // $ExpectType boolean
	hasEqualValues( new Uint8ClampedArray( x ), new Uint8ClampedArray( x ) ); // $ExpectType boolean
	hasEqualValues( toAccessorArray( x ), toAccessorArray( x ) ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasEqualValues( 2, x ); // $ExpectError
	hasEqualValues( false, x ); // $ExpectError
	hasEqualValues( true, x ); // $ExpectError
	hasEqualValues( {}, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasEqualValues( x, 2 ); // $ExpectError
	hasEqualValues( x, false ); // $ExpectError
	hasEqualValues( x, true ); // $ExpectError
	hasEqualValues( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	hasEqualValues(); // $ExpectError
	hasEqualValues( x ); // $ExpectError
	hasEqualValues( x, x, x ); // $ExpectError
}
