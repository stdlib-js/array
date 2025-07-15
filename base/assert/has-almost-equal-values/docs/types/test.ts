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

import toAccessorArray = require( './../../../../../base/to-accessor-array' );
import hasAlmostEqualValues = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	hasAlmostEqualValues( x, x ); // $ExpectType boolean
	hasAlmostEqualValues( new Float64Array( x ), new Float64Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Float32Array( x ), new Float32Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Int32Array( x ), new Int32Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Int16Array( x ), new Int16Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Int8Array( x ), new Int8Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Uint32Array( x ), new Uint32Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Uint16Array( x ), new Uint16Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Uint8Array( x ), new Uint8Array( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( new Uint8ClampedArray( x ), new Uint8ClampedArray( x ), 0 ); // $ExpectType boolean
	hasAlmostEqualValues( toAccessorArray( x ), toAccessorArray( x ), 0 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasAlmostEqualValues( 2, x, 0 ); // $ExpectError
	hasAlmostEqualValues( false, x, 0 ); // $ExpectError
	hasAlmostEqualValues( true, x, 0 ); // $ExpectError
	hasAlmostEqualValues( {}, x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasAlmostEqualValues( x, 2, 0 ); // $ExpectError
	hasAlmostEqualValues( x, false, 0 ); // $ExpectError
	hasAlmostEqualValues( x, true, 0 ); // $ExpectError
	hasAlmostEqualValues( x, {}, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	hasAlmostEqualValues( x, x, '2' ); // $ExpectError
	hasAlmostEqualValues( x, x, false ); // $ExpectError
	hasAlmostEqualValues( x, x, true ); // $ExpectError
	hasAlmostEqualValues( x, x, null ); // $ExpectError
	hasAlmostEqualValues( x, x, undefined ); // $ExpectError
	hasAlmostEqualValues( x, x, {} ); // $ExpectError
	hasAlmostEqualValues( x, x, [] ); // $ExpectError
	hasAlmostEqualValues( x, x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	hasAlmostEqualValues(); // $ExpectError
	hasAlmostEqualValues( x ); // $ExpectError
	hasAlmostEqualValues( x, x ); // $ExpectError
	hasAlmostEqualValues( x, x, 0, 1 ); // $ExpectError
}
