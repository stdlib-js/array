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

import flatten2d = require( './index' );


// TESTS //

// The function returns an array...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, [ 2, 2 ], false ); // $ExpectType number[]
	flatten2d( x, [ 2, 2 ], true ); // $ExpectType number[]

	flatten2d<number>( x, [ 2, 2 ], false ); // $ExpectType number[]
	flatten2d<number>( x, [ 2, 2 ], true ); // $ExpectType number[]

	flatten2d<string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false ); // $ExpectType string[]
	flatten2d<string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	flatten2d( 1, [ 2, 2 ], false ); // $ExpectError
	flatten2d( true, [ 2, 2 ], false ); // $ExpectError
	flatten2d( false, [ 2, 2 ], false ); // $ExpectError
	flatten2d( null, [ 2, 2 ], false ); // $ExpectError
	flatten2d( void 0, [ 2, 2 ], false ); // $ExpectError
	flatten2d( {}, [ 2, 2 ], false ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, '', false ); // $ExpectError
	flatten2d( x, 1, false ); // $ExpectError
	flatten2d( x, true, false ); // $ExpectError
	flatten2d( x, false, false ); // $ExpectError
	flatten2d( x, null, false ); // $ExpectError
	flatten2d( x, void 0, false ); // $ExpectError
	flatten2d( x, {}, false ); // $ExpectError
	flatten2d( x, [ 1, '2', 3 ], false ); // $ExpectError
	flatten2d( x, ( x: number ): number => x, false ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d( x, [ 2, 2 ], '' ); // $ExpectError
	flatten2d( x, [ 2, 2 ], 1 ); // $ExpectError
	flatten2d( x, [ 2, 2 ], null ); // $ExpectError
	flatten2d( x, [ 2, 2 ], void 0 ); // $ExpectError
	flatten2d( x, [ 2, 2 ], {} ); // $ExpectError
	flatten2d( x, [ 2, 2 ], [] ); // $ExpectError
	flatten2d( x, [ 2, 2 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d(); // $ExpectError
	flatten2d( x ); // $ExpectError
	flatten2d( x, [ 2, 2 ] ); // $ExpectError
	flatten2d( x, [ 2, 2 ], false, {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	const out1 = [ 0, 0, 0, 0 ];

	flatten2d.assign( x, [ 2, 2 ], false, out1, 1, 0 ); // $ExpectType Collection<number>
	flatten2d.assign( x, [ 2, 2 ], true, out1, 1, 0 ); // $ExpectType Collection<number>

	flatten2d.assign<number, number>( x, [ 2, 2 ], false, out1, 1, 0 ); // $ExpectType Collection<number>
	flatten2d.assign<number, number>( x, [ 2, 2 ], true, out1, 1, 0 ); // $ExpectType Collection<number>

	const out2 = [ '', '', '', '' ];

	flatten2d.assign<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], false, out2, 1, 0 ); // $ExpectType Collection<string>
	flatten2d.assign<string, string>( [ [ '1', '2' ], [ '3', '4' ] ], [ 2, 2 ], true, out2, 1, 0 ); // $ExpectType Collection<string>
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign( 1, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( true, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( false, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( null, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( void 0, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( {}, [ 2, 2 ], false, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object containing numbers...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign( x, '', false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, 1, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, true, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, false, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, null, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, void 0, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, {}, false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 1, '2', 3 ], false, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, ( x: number ): number => x, false, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a boolean...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign( x, [ 2, 2 ], '', out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], 1, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], null, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], void 0, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], {}, out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], [], out, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];

	flatten2d.assign( x, [ 2, 2 ], false, 1, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, true, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, false, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, null, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, void 0, 1, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign( x, [ 2, 2 ], false, out, '1', 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, true, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, false, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, null, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, void 0, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, {}, 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, [], 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign( x, [ 2, 2 ], false, out, 1, '1' ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, true ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, false ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, null ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, void 0 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, {} ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, [] ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	const x = [ [ 1, 2 ], [ 3, 4 ] ];
	const out = [ 0, 0, 0, 0 ];

	flatten2d.assign(); // $ExpectError
	flatten2d.assign( x ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ] ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1 ); // $ExpectError
	flatten2d.assign( x, [ 2, 2 ], false, out, 1, 0, {} ); // $ExpectError
}
