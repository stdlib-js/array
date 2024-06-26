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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import BooleanArray = require( './../../../../bool' );
import where = require( './index' );


// TESTS //

// The function returns an array...
{
	where( [ true, false ], [ 1, 2 ], [ 3, 4 ] ); // $ExpectType number[]
	where( [ true, false ], [ 1, 2 ], [ '3', '4' ] ); // $ExpectType (string | number)[]
	where( [ true, false ], new Int32Array( [ 1, 2 ] ), new Int32Array( [ 3, 4 ] ) ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not an array-like object...
{
	where( 1, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
	where( true, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
	where( false, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
	where( null, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
	where( void 0, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
	where( {}, [ 1, 2 ], [ 3, 4 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an array-like object...
{
	where( [], 1, [ 3, 4 ] ); // $ExpectError
	where( [], true, [ 3, 4 ] ); // $ExpectError
	where( [], false, [ 3, 4 ] ); // $ExpectError
	where( [], null, [ 3, 4 ] ); // $ExpectError
	where( [], void 0, [ 3, 4 ] ); // $ExpectError
	where( [], {}, [ 3, 4 ] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not an array-like object...
{
	where( [], [ 1, 2 ], 1 ); // $ExpectError
	where( [], [ 1, 2 ], true ); // $ExpectError
	where( [], [ 1, 2 ], false ); // $ExpectError
	where( [], [ 1, 2 ], null ); // $ExpectError
	where( [], [ 1, 2 ], void 0 ); // $ExpectError
	where( [], [ 1, 2 ], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	where(); // $ExpectError
	where( [] ); // $ExpectError
	where( [], [] ); // $ExpectError
	where( [], [], [], [] ); // $ExpectError
}

// Attached to the main export is an `assign` method which returns a collection...
{
	const condition = [ true ];

	where.assign( condition, [ 0 ], [ 0 ], [ 0 ], 1, 0 ); // $ExpectType number[]
	where.assign( condition, [ 0 ], [ '0' ], [ 0 ], 1, 0 ); // $ExpectType (string | number)[]
	where.assign( condition, new Float64Array( [ 0 ] ), [ 0 ], [ 0 ], 1, 0 ); // $ExpectType number[]

	where.assign( condition, new Float64Array( 1 ), new Float64Array( 1 ), new Float64Array( 1 ), 1, 0 ); // $ExpectType Float64Array
	where.assign( condition, new Float32Array( 1 ), new Float32Array( 1 ), new Float32Array( 1 ), 1, 0 ); // $ExpectType Float32Array
	where.assign( condition, new Int32Array( 1 ), new Int32Array( 1 ), new Int32Array( 1 ), 1, 0 ); // $ExpectType Int32Array
	where.assign( condition, new Int16Array( 1 ), new Int16Array( 1 ), new Int16Array( 1 ), 1, 0 ); // $ExpectType Int16Array
	where.assign( condition, new Int8Array( 1 ), new Int8Array( 1 ), new Int8Array( 1 ), 1, 0 ); // $ExpectType Int8Array
	where.assign( condition, new Uint32Array( 1 ), new Uint32Array( 1 ), new Uint32Array( 1 ), 1, 0 ); // $ExpectType Uint32Array
	where.assign( condition, new Uint16Array( 1 ), new Uint16Array( 1 ), new Uint16Array( 1 ), 1, 0 ); // $ExpectType Uint16Array
	where.assign( condition, new Uint8Array( 1 ), new Uint8Array( 1 ), new Uint8Array( 1 ), 1, 0 ); // $ExpectType Uint8Array
	where.assign( condition, new Uint8ClampedArray( 1 ), new Uint8ClampedArray( 1 ), new Uint8ClampedArray( 1 ), 1, 0 ); // $ExpectType Uint8ClampedArray
	where.assign( condition, new BooleanArray( 1 ), new BooleanArray( 1 ), new BooleanArray( 1 ), 1, 0 ); // $ExpectType BooleanArray
	where.assign( condition, new Complex128Array( 1 ), new Complex128Array( 1 ), new Complex128Array( 1 ), 1, 0 ); // $ExpectType Complex128Array
	where.assign( condition, new Complex64Array( 1 ), new Complex64Array( 1 ), new Complex64Array( 1 ), 1, 0 ); // $ExpectType Complex64Array
}

// The compiler throws an error if the `assign` method is provided a first argument which is not an array-like object...
{
	const out = [ 0 ];

	where.assign( 1, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( true, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( false, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( null, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( void 0, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( {}, [ 0 ], [ 0 ], out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a second argument which is not an array-like object...
{
	const out = [ 0 ];

	where.assign( [], 1, [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( [], true, [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( [], false, [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( [], null, [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( [], void 0, [ 0 ], out, 1, 0 ); // $ExpectError
	where.assign( [], {}, [ 0 ], out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a third argument which is not an array-like object...
{
	const out = [ 0 ];

	where.assign( [], [ 0 ], 1, out, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], true, out, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], false, out, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], null, out, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], void 0, out, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], {}, out, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fourth argument which is not an array-like object...
{
	where.assign( [], [ 0 ], [ 0 ], 1, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], true, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], false, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], null, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], void 0, 1, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], {}, 1, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a fifth argument which is not a number...
{
	const out = [ 0 ];

	where.assign( [], [ 0 ], [ 0 ], out, '1', 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, true, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, false, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, null, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, void 0, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, {}, 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, [], 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, ( x: number ): number => x, 0 ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided a sixth argument which is not a number...
{
	const out = [ 0 ];

	where.assign( [], [ 0 ], [ 0 ], out, 1, '1' ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, true ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, false ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, null ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, void 0 ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, {} ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, [] ); // $ExpectError
	where.assign( [], [ 0 ], [ 0 ], out, 1, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `assign` method is provided an unsupported number of arguments...
{
	where.assign(); // $ExpectError
	where.assign( [] ); // $ExpectError
	where.assign( [], [] ); // $ExpectError
	where.assign( [], [], [] ); // $ExpectError
	where.assign( [], [], [], [] ); // $ExpectError
	where.assign( [], [], [], [], 1 ); // $ExpectError
	where.assign( [], [], [], [], 1, 0, {} ); // $ExpectError
}
