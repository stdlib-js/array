/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import take = require( './index' );


// TESTS //

// The function returns an array...
{
	take( [ 1, 2, 3, 4 ], [ 1, 3 ], 'throw' ); // $ExpectType number[]
	take<any>( [ 1, 2, 3, 4 ], [ 1, 3 ], 'normalize' ); // $ExpectType any[]
	take<number>( [ 1, 2, 3, 4 ], [ 1, 3 ], 'clamp' ); // $ExpectType number[]
	take<string>( [ '1', '2', '3', '4' ], [ 1, 3 ], 'wrap' ); // $ExpectType string[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	take( 1, [ 1, 3 ], 'throw' ); // $ExpectError
	take( true, [ 1, 3 ], 'throw' ); // $ExpectError
	take( false, [ 1, 3 ], 'throw' ); // $ExpectError
	take( null, [ 1, 3 ], 'throw' ); // $ExpectError
	take( void 0, [ 1, 3 ], 'throw' ); // $ExpectError
	take( {}, [ 1, 3 ], 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object containing numbers...
{
	take( [], 1, 'throw' ); // $ExpectError
	take( [], true, 'throw' ); // $ExpectError
	take( [], false, 'throw' ); // $ExpectError
	take( [], null, 'throw' ); // $ExpectError
	take( [], void 0, 'throw' ); // $ExpectError
	take( [], {}, 'throw' ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a valid index mode...
{
	take( [], [ 1, 3 ], '1' ); // $ExpectError
	take( [], [ 1, 3 ], 1 ); // $ExpectError
	take( [], [ 1, 3 ], true ); // $ExpectError
	take( [], [ 1, 3 ], false ); // $ExpectError
	take( [], [ 1, 3 ], null ); // $ExpectError
	take( [], [ 1, 3 ], void 0 ); // $ExpectError
	take( [], [ 1, 3 ], {} ); // $ExpectError
	take( [], [ 1, 3 ], [] ); // $ExpectError
	take( [], [ 1, 3 ], ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	take(); // $ExpectError
	take( [] ); // $ExpectError
	take( [], [] ); // $ExpectError
	take( [], [], 'throw', {} ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const x = [ 1, 2, 3, 4 ];
	const y = new Complex128Array( 4 );

	take.assign( x, [ 1, 3 ], 'throw', [ 0, 0, 0, 0 ], 1, 0 ); // $ExpectType number[]
	take.assign( x, [ 1, 3 ], 'throw', new Float64Array( 4 ), 1, 0 ); // $ExpectType Float64Array
	take.assign( x, [ 1, 3 ], 'throw', new Float32Array( 4 ), 1, 0 ); // $ExpectType Float32Array
	take.assign( x, [ 1, 3 ], 'throw', new Int32Array( 4 ), 1, 0 ); // $ExpectType Int32Array
	take.assign( x, [ 1, 3 ], 'throw', new Int16Array( 4 ), 1, 0 ); // $ExpectType Int16Array
	take.assign( x, [ 1, 3 ], 'throw', new Int8Array( 4 ), 1, 0 ); // $ExpectType Int8Array
	take.assign( x, [ 1, 3 ], 'throw', new Uint32Array( 4 ), 1, 0 ); // $ExpectType Uint32Array
	take.assign( x, [ 1, 3 ], 'throw', new Uint16Array( 4 ), 1, 0 ); // $ExpectType Uint16Array
	take.assign( x, [ 1, 3 ], 'throw', new Uint8Array( 4 ), 1, 0 ); // $ExpectType Uint8Array
	take.assign( x, [ 1, 3 ], 'throw', new Uint8ClampedArray( 4 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	take.assign( y, [ 1, 3 ], 'throw', new Complex128Array( 4 ), 1, 0 ); // $ExpectType Complex128Array
	take.assign( y, [ 1, 3 ], 'throw', new Complex64Array( 4 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0, 0, 0, 0 ];

	take.assign( 1, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
	take.assign( true, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
	take.assign( false, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
	take.assign( null, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
	take.assign( void 0, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
	take.assign( {}, [ 1, 3 ], 'throw', out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object containing numbers...
{
	const out = [ 0, 0, 0, 0 ];

	take.assign( [], 1, 'throw', out, 1, 0 ); // $ExpectError
	take.assign( [], true, 'throw', out, 1, 0 ); // $ExpectError
	take.assign( [], false, 'throw', out, 1, 0 ); // $ExpectError
	take.assign( [], null, 'throw', out, 1, 0 ); // $ExpectError
	take.assign( [], void 0, 'throw', out, 1, 0 ); // $ExpectError
	take.assign( [], {}, 'throw', out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not a valid index mode...
{
	const out = [ 0, 0, 0, 0 ];

	take.assign( [], [ 1, 3 ], '1', out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 1, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], true, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], false, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], null, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], void 0, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], {}, out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], [], out, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], ( x: number ): number => x, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	take.assign( [], [ 1, 3 ], 'throw', 1, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', true, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', false, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', null, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', void 0, 1, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	take.assign( [], [ 1, 3 ], 'throw', out, '1', 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, true, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, false, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, null, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, void 0, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, {}, 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, [], 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const out = [ 0, 0, 0, 0 ];

	take.assign( [], [ 1, 3 ], 'throw', out, 1, '1' ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, true ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, false ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, null ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, void 0 ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, {} ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, [] ); // $ExpectError
	take.assign( [], [ 1, 3 ], 'throw', out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	take.assign(); // $ExpectError
	take.assign( [] ); // $ExpectError
	take.assign( [], [] ); // $ExpectError
	take.assign( [], [], 'throw' ); // $ExpectError
	take.assign( [], [], 'throw', [] ); // $ExpectError
	take.assign( [], [], 'throw', [], 1 ); // $ExpectError
	take.assign( [], [], 'throw', [], 1, 0, {} ); // $ExpectError
}
