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

import Complex128 = require( '@stdlib/complex/float64/ctor' );
import AccessorArray = require( './../../../../base/accessor' );
import scattered = require( './index' );


// TESTS //

// The function returns an array...
{
	const z = new Complex128( 3.0, 4.0 );

	scattered( 4, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectType number[]
	scattered( 4, [ 1, 3 ], [ 20, 30 ], 'clamp' ); // $ExpectType number[]
	scattered( 4, [ 1, 3 ], [ 20, 30 ], 'wrap' ); // $ExpectType number[]
	scattered( 4, [ 1, 3 ], [ true, true ], 'normalize' ); // $ExpectType (number | boolean)[]

	scattered( 4, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectType number[]
	scattered( 4, [ 1, 3 ], [ z, z ], 'throw' ); // $ExpectType (number | Complex128)[]
	scattered( 4, [ 1, 3 ], [ z, z ], 'throw' ); // $ExpectType (number | Complex128)[]
	scattered( 4, [ 1, 3 ], new AccessorArray<number>( [ 20, 30 ] ), 'throw' ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a number...
{
	scattered( '1', [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( true, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( false, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( null, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( void 0, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( [], [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( {}, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	scattered( 4, 1, [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( 4, true, [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( 4, false, [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( 4, null, [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( 4, void 0, [ 20, 30 ], 'throw' ); // $ExpectError
	scattered( 4, {}, [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	scattered( 4, [ 1, 3 ], 1, 'throw' ); // $ExpectError
	scattered( 4, [ 1, 3 ], true, 'throw' ); // $ExpectError
	scattered( 4, [ 1, 3 ], false, 'throw' ); // $ExpectError
	scattered( 4, [ 1, 3 ], null, 'throw' ); // $ExpectError
	scattered( 4, [ 1, 3 ], void 0, 'throw' ); // $ExpectError
	scattered( 4, [ 1, 3 ], {}, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a valid index mode...
{
	scattered( 4, [ 1, 3 ], [ 20, 30 ], '1' ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], 1 ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], true ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], false ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], null ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], void 0 ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], {} ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], [] ); // $ExpectError
	scattered( 4, [ 1, 3 ], [ 20, 30 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	scattered(); // $ExpectError
	scattered( 4 ); // $ExpectError
	scattered( 4, [] ); // $ExpectError
	scattered( 4, [], [] ); // $ExpectError
	scattered( 4, [], [], 'throw', {} ); // $ExpectError
}
