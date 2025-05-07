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
import scatterFilled = require( './index' );


// TESTS //

// The function returns an array...
{
	const z = new Complex128( 3.0, 4.0 );

	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectType (number | null)[]
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], 'clamp' ); // $ExpectType (number | null)[]
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], 'wrap' ); // $ExpectType (number | null)[]
	scatterFilled( null, 4, [ 1, 3 ], [ true, true ], 'normalize' ); // $ExpectType (boolean | null)[]

	scatterFilled( null, 4, [ 1, 3 ], [ z, z ], 'throw' ); // $ExpectType (Complex128 | null)[]
	scatterFilled( null, 4, [ 1, 3 ], [ z, z ], 'throw' ); // $ExpectType (Complex128 | null)[]
	scatterFilled( null, 4, [ 1, 3 ], new AccessorArray<number>( [ 20, 30 ] ), 'throw' ); // $ExpectType (number | null)[]
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	scatterFilled( null, '1', [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, true, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, false, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, null, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, void 0, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, [], [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, {}, [ 1, 3 ], [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object containing numbers...
{
	scatterFilled( null, 4, 1, [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, 4, true, [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, 4, false, [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, 4, null, [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, 4, void 0, [ 20, 30 ], 'throw' ); // $ExpectError
	scatterFilled( null, 4, {}, [ 20, 30 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not an array-like object...
{
	scatterFilled( null, 4, [ 1, 3 ], 1, 'throw' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], true, 'throw' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], false, 'throw' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], null, 'throw' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], void 0, 'throw' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], {}, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a valid index mode...
{
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], '1' ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], 1 ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], true ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], false ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], null ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], void 0 ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], {} ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], [] ); // $ExpectError
	scatterFilled( null, 4, [ 1, 3 ], [ 20, 30 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	scatterFilled(); // $ExpectError
	scatterFilled( null ); // $ExpectError
	scatterFilled( null, 4 ); // $ExpectError
	scatterFilled( null, 4, [] ); // $ExpectError
	scatterFilled( null, 4, [], [] ); // $ExpectError
	scatterFilled( null, 4, [], [], 'throw', {} ); // $ExpectError
}
