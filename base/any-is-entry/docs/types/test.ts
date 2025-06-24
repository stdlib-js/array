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

import toAccessorArray = require( './../../../../base/to-accessor-array' );
import anyIsEntry = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	anyIsEntry( x, 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Float64Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Float32Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Int32Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Int16Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Int8Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Uint32Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Uint16Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Uint8Array( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( new Uint8ClampedArray( x ), 'a', 0 ); // $ExpectType boolean
	anyIsEntry( toAccessorArray( x ), 'a', 0 ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	anyIsEntry( 2, 'a', 0 ); // $ExpectError
	anyIsEntry( null, 'a', 0 ); // $ExpectError
	anyIsEntry( false, 'a', 0 ); // $ExpectError
	anyIsEntry( true, 'a', 0 ); // $ExpectError
	anyIsEntry( {}, 'a', 0 ); // $ExpectError
	anyIsEntry( ( x: number ): number => x, 'a', 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid property...
{
	const x = [ 1, 2, 3 ];

	anyIsEntry( x, null, 0 ); // $ExpectError
	anyIsEntry( x, false, 0 ); // $ExpectError
	anyIsEntry( x, true, 0 ); // $ExpectError
	anyIsEntry( x, {}, 0 ); // $ExpectError
	anyIsEntry( x, [], 0 ); // $ExpectError
	anyIsEntry( x, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	anyIsEntry(); // $ExpectError
	anyIsEntry( x ); // $ExpectError
	anyIsEntry( x, 'a' ); // $ExpectError
	anyIsEntry( x, 'a', 0, {} ); // $ExpectError
}
