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
import hasSameValues = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	hasSameValues( x, x ); // $ExpectType boolean
	hasSameValues( new Float64Array( x ), new Float64Array( x ) ); // $ExpectType boolean
	hasSameValues( new Float32Array( x ), new Float32Array( x ) ); // $ExpectType boolean
	hasSameValues( new Int32Array( x ), new Int32Array( x ) ); // $ExpectType boolean
	hasSameValues( new Int16Array( x ), new Int16Array( x ) ); // $ExpectType boolean
	hasSameValues( new Int8Array( x ), new Int8Array( x ) ); // $ExpectType boolean
	hasSameValues( new Uint32Array( x ), new Uint32Array( x ) ); // $ExpectType boolean
	hasSameValues( new Uint16Array( x ), new Uint16Array( x ) ); // $ExpectType boolean
	hasSameValues( new Uint8Array( x ), new Uint8Array( x ) ); // $ExpectType boolean
	hasSameValues( new Uint8ClampedArray( x ), new Uint8ClampedArray( x ) ); // $ExpectType boolean
	hasSameValues( toAccessorArray( x ), toAccessorArray( x ) ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasSameValues( 2, x ); // $ExpectError
	hasSameValues( false, x ); // $ExpectError
	hasSameValues( true, x ); // $ExpectError
	hasSameValues( {}, x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	hasSameValues( x, 2 ); // $ExpectError
	hasSameValues( x, false ); // $ExpectError
	hasSameValues( x, true ); // $ExpectError
	hasSameValues( x, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	hasSameValues(); // $ExpectError
	hasSameValues( x ); // $ExpectError
	hasSameValues( x, x, x ); // $ExpectError
}
