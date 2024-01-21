/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

import bifurcateIndices = require( './index' );


// TESTS //

// The function returns group results...
{
	const x = [ 1, 2, 3 ];
	const f = [ 0, 1, 0 ];

	bifurcateIndices( x, f ); // $ExpectType [number[], number[]]
}

// The compiler throws an error if the function is provided a first argument which is not an array...
{
	const f = [ 0, 1, 0 ];

	bifurcateIndices( 5, f ); // $ExpectError
	bifurcateIndices( true, f ); // $ExpectError
	bifurcateIndices( false, f ); // $ExpectError
	bifurcateIndices( null, f ); // $ExpectError
	bifurcateIndices( void 0, f ); // $ExpectError
	bifurcateIndices( {}, f ); // $ExpectError
	bifurcateIndices( ( x: number ): number => x, f ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array...
{
	const x = [ 1, 2, 3 ];

	bifurcateIndices( x, 5 ); // $ExpectError
	bifurcateIndices( x, true ); // $ExpectError
	bifurcateIndices( x, false ); // $ExpectError
	bifurcateIndices( x, null ); // $ExpectError
	bifurcateIndices( x, void 0 ); // $ExpectError
	bifurcateIndices( x, {} ); // $ExpectError
	bifurcateIndices( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];
	const f = [ 0, 1, 0 ];

	bifurcateIndices(); // $ExpectError
	bifurcateIndices( x ); // $ExpectError
	bifurcateIndices( x, f, {} ); // $ExpectError
}
