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

import Complex128Array = require( './../../../complex128' );
import Complex64Array = require( './../../../complex64' );
import BooleanArray = require( './../../../bool' );
import array2fancy = require( './index' );


// TESTS //

// The function returns an array...
{
	array2fancy( [ 1, 2, 3 ] ); // $ExpectType number[]
	array2fancy( new Float64Array( [ 1, 2, 3 ] ) ); // $ExpectType Float64Array
	array2fancy( new Float32Array( [ 1, 2, 3 ] ) ); // $ExpectType Float32Array
	array2fancy( new Int32Array( [ 1, 2, 3 ] ) ); // $ExpectType Int32Array
	array2fancy( new Int16Array( [ 1, 2, 3 ] ) ); // $ExpectType Int16Array
	array2fancy( new Int8Array( [ 1, 2, 3 ] ) ); // $ExpectType Int8Array
	array2fancy( new Uint32Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint32Array
	array2fancy( new Uint16Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint16Array
	array2fancy( new Uint8Array( [ 1, 2, 3 ] ) ); // $ExpectType Uint8Array
	array2fancy( new Uint8ClampedArray( [ 1, 2, 3 ] ) ); // $ExpectType Uint8ClampedArray
	array2fancy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex128Array
	array2fancy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ) ); // $ExpectType Complex64Array
	array2fancy( new BooleanArray( [ true, false, true ] ) ); // $ExpectType BooleanArray

	const opts = {
		'strict': true
	};
	array2fancy( [ 1, 2, 3 ], opts ); // $ExpectType number[]
	array2fancy( new Float64Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Float64Array
	array2fancy( new Float32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Float32Array
	array2fancy( new Int32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int32Array
	array2fancy( new Int16Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int16Array
	array2fancy( new Int8Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Int8Array
	array2fancy( new Uint32Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint32Array
	array2fancy( new Uint16Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint16Array
	array2fancy( new Uint8Array( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint8Array
	array2fancy( new Uint8ClampedArray( [ 1, 2, 3 ] ), opts ); // $ExpectType Uint8ClampedArray
	array2fancy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), opts ); // $ExpectType Complex128Array
	array2fancy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), opts ); // $ExpectType Complex64Array
	array2fancy( new BooleanArray( [ true, false, true ] ), opts ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not an array-like value...
{
	array2fancy( 5 ); // $ExpectError
	array2fancy( true ); // $ExpectError
	array2fancy( false ); // $ExpectError
	array2fancy( null ); // $ExpectError
	array2fancy( void 0 ); // $ExpectError
	array2fancy( {} ); // $ExpectError

	array2fancy( 5, {} ); // $ExpectError
	array2fancy( true, {} ); // $ExpectError
	array2fancy( false, {} ); // $ExpectError
	array2fancy( null, {} ); // $ExpectError
	array2fancy( void 0, {} ); // $ExpectError
	array2fancy( {}, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not an object...
{
	const x = [ 1, 2, 3, 4 ];

	array2fancy( x, '5' ); // $ExpectError
	array2fancy( x, 5 ); // $ExpectError
	array2fancy( x, true ); // $ExpectError
	array2fancy( x, false ); // $ExpectError
	array2fancy( x, null ); // $ExpectError
	array2fancy( x, [] ); // $ExpectError
	array2fancy( x, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a `strict` option which is not a boolean...
{
	const x = [ 1, 2, 3, 4 ];

	array2fancy( x, { 'strict': '5' } ); // $ExpectError
	array2fancy( x, { 'strict': 5 } ); // $ExpectError
	array2fancy( x, { 'strict': null } ); // $ExpectError
	array2fancy( x, { 'strict': [] } ); // $ExpectError
	array2fancy( x, { 'strict': {} } ); // $ExpectError
	array2fancy( x, { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided a `cache` option which is not valid...
{
	const x = [ 1, 2, 3, 4 ];

	array2fancy( x, { 'cache': '5' } ); // $ExpectError
	array2fancy( x, { 'cache': 5 } ); // $ExpectError
	array2fancy( x, { 'cache': true } ); // $ExpectError
	array2fancy( x, { 'cache': false } ); // $ExpectError
	array2fancy( x, { 'cache': null } ); // $ExpectError
	array2fancy( x, { 'cache': [] } ); // $ExpectError
	array2fancy( x, { 'cache': {} } ); // $ExpectError
	array2fancy( x, { 'cache': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	array2fancy(); // $ExpectError
	array2fancy( [ 1, 2, 3 ], {}, {} ); // $ExpectError
}

// Attached to the function is a `factory` method which returns a function...
{
	array2fancy.factory(); // $ExpectType Array2Fancy
	array2fancy.factory( {} ); // $ExpectType Array2Fancy
	array2fancy.factory( { 'strict': true } ); // $ExpectType Array2Fancy
}

// The compiler throws an error if the `factory` method is provided a second argument which is not an object...
{
	array2fancy.factory( '5' ); // $ExpectError
	array2fancy.factory( 5 ); // $ExpectError
	array2fancy.factory( true ); // $ExpectError
	array2fancy.factory( false ); // $ExpectError
	array2fancy.factory( null ); // $ExpectError
	array2fancy.factory( [] ); // $ExpectError
	array2fancy.factory( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `strict` option which is not a boolean...
{
	array2fancy.factory( { 'strict': '5' } ); // $ExpectError
	array2fancy.factory( { 'strict': 5 } ); // $ExpectError
	array2fancy.factory( { 'strict': null } ); // $ExpectError
	array2fancy.factory( { 'strict': [] } ); // $ExpectError
	array2fancy.factory( { 'strict': {} } ); // $ExpectError
	array2fancy.factory( { 'strict': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided a `cache` option which is not valid...
{
	array2fancy.factory( { 'cache': '5' } ); // $ExpectError
	array2fancy.factory( { 'cache': 5 } ); // $ExpectError
	array2fancy.factory( { 'cache': true } ); // $ExpectError
	array2fancy.factory( { 'cache': false } ); // $ExpectError
	array2fancy.factory( { 'cache': null } ); // $ExpectError
	array2fancy.factory( { 'cache': [] } ); // $ExpectError
	array2fancy.factory( { 'cache': {} } ); // $ExpectError
	array2fancy.factory( { 'cache': ( x: number ): number => x } ); // $ExpectError
}

// The compiler throws an error if the `factory` method is provided an unsupported number of arguments...
{
	array2fancy.factory( {}, {} ); // $ExpectError
}

// Attached to the function is an `idx` method which returns an array index...
{
	const x = [ 1, 2, 3, 4 ];
	const y = [ true, false, true, false ];
	const z = new Uint8Array( [ 1, 0, 1, 0 ] );
	const w = new Int32Array( [ 1, 2, 3, 4 ] );
	const v = new BooleanArray( [ true, false, true, false ] );

	array2fancy.idx( x ); // $ExpectType GenericIntegerArrayIndex
	array2fancy.idx( x, {} ); // $ExpectType GenericIntegerArrayIndex

	array2fancy.idx( y ); // $ExpectType GenericBooleanArrayIndex
	array2fancy.idx( y, {} ); // $ExpectType GenericBooleanArrayIndex

	array2fancy.idx( z ); // $ExpectType MaskArrayIndex
	array2fancy.idx( z, {} ); // $ExpectType MaskArrayIndex

	array2fancy.idx( w ); // $ExpectType Int32ArrayIndex
	array2fancy.idx( w, {} ); // $ExpectType Int32ArrayIndex

	array2fancy.idx( v ); // $ExpectType BooleanArrayIndex
	array2fancy.idx( v, {} ); // $ExpectType BooleanArrayIndex
}
