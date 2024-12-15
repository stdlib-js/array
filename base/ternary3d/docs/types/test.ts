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

import ternary3d = require( './index' );

/**
* Ternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
function fcn( x: number, y: number, z: number ): number {
	return x + y + z;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const out = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	ternary3d( 'abc', [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( 3.14, [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( true, [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( false, [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( null, [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( [ '1' ], [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( {}, [ 1, 2, 2 ], fcn ); // $ExpectError
	ternary3d( ( x: number ): number => x, [ 1, 2, 2 ], fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of numbers...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const out = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	ternary3d( [ x, y, z, out ], 'abc', fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], 3.14, fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], true, fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], false, fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], null, fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ '1' ], fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], {}, fcn ); // $ExpectError
	ternary3d( [ x, y, z, out ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const out = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], 'abc' ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], 3.14 ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], true ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], false ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], null ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], [ '1' ] ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const y = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const z = [ [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ] ];
	const out = [ [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ] ];

	ternary3d(); // $ExpectError
	ternary3d( [ x, y, z, out ] ); // $ExpectError
	ternary3d( [ x, y, z, out ], [ 1, 2, 2 ], fcn, {} ); // $ExpectError
}
