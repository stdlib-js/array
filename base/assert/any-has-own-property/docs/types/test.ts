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
import anyHasOwnProp = require( './index' );


// TESTS //

// The function returns a boolean...
{
	const x = [ 1, 2, 3 ];

	anyHasOwnProp( x, 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Float64Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Float32Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Int32Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Int16Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Int8Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Uint32Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Uint16Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Uint8Array( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( new Uint8ClampedArray( x ), 'a' ); // $ExpectType boolean
	anyHasOwnProp( toAccessorArray( x ), 'a' ); // $ExpectType boolean
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	anyHasOwnProp( 2, 'a' ); // $ExpectError
	anyHasOwnProp( null, 'a' ); // $ExpectError
	anyHasOwnProp( false, 'a' ); // $ExpectError
	anyHasOwnProp( true, 'a' ); // $ExpectError
	anyHasOwnProp( {}, 'a' ); // $ExpectError
	anyHasOwnProp( ( x: number ): number => x, 'a' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a valid property...
{
	const x = [ 1, 2, 3 ];

	anyHasOwnProp( x, null ); // $ExpectError
	anyHasOwnProp( x, false ); // $ExpectError
	anyHasOwnProp( x, true ); // $ExpectError
	anyHasOwnProp( x, {} ); // $ExpectError
	anyHasOwnProp( x, [] ); // $ExpectError
	anyHasOwnProp( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	anyHasOwnProp(); // $ExpectError
	anyHasOwnProp( x ); // $ExpectError
	anyHasOwnProp( x, 'a', {} ); // $ExpectError
}
