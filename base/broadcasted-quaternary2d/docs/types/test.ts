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

import bquaternary2d = require( './index' );

/**
* Quaternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
function fcn( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}


// TESTS //

// The function returns undefined...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ] ];

	bquaternary2d( [ x, y, z, w, out ], shapes, fcn ); // $ExpectType void
	bquaternary2d( [ x[ 0 ], y, z, w, out ], [ [ shapes[ 0 ][ 1 ] ], shapes[ 1 ], shapes[ 2 ], shapes[ 3 ], shapes[ 4 ] ], fcn ); // $ExpectType void
}

// The compiler throws an error if the function is provided a first argument which is not an array of nested arrays...
{
	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ] ];

	bquaternary2d( 'abc', shapes, fcn ); // $ExpectError
	bquaternary2d( 3.14, shapes, fcn ); // $ExpectError
	bquaternary2d( true, shapes, fcn ); // $ExpectError
	bquaternary2d( false, shapes, fcn ); // $ExpectError
	bquaternary2d( null, shapes, fcn ); // $ExpectError
	bquaternary2d( [ '1' ], shapes, fcn ); // $ExpectError
	bquaternary2d( {}, shapes, fcn ); // $ExpectError
	bquaternary2d( ( x: number ): number => x, shapes, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array of arrays...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	bquaternary2d( [ x, y, z, w, out ], 'abc', fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], 3.14, fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], true, fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], false, fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], null, fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], [ '1' ], fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], {}, fcn ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], ( x: number ): number => x, fcn ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid callback...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ] ];

	bquaternary2d( [ x, y, z, w, out ], shapes, 'abc' ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, 3.14 ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, true ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, false ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, null ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, [ '1' ] ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const y = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const z = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const w = [ [ 1.0, 2.0 ], [ 3.0, 4.0 ] ];
	const out = [ [ 0.0, 0.0 ], [ 0.0, 0.0 ] ];

	const shapes: [ Array<number>, Array<number>, Array<number>, Array<number>, Array<number> ] = [ [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ], [ 2, 2 ] ];

	bquaternary2d(); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ] ); // $ExpectError
	bquaternary2d( [ x, y, z, w, out ], shapes, fcn, {} ); // $ExpectError
}
