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

import toAccessorArray = require( './../../../../base/to-accessor-array' );
import countIfs = require( './index' );

/**
* Tests whether a value is positive.
*
* @param value - input value
* @returns boolean indicating whether an element is positive
*/
function isPositive( value: number ): boolean {
	return ( value > 0 );
}

/**
* Tests whether a value is negative.
*
* @param value - input value
* @returns boolean indicating whether an element is negative
*/
function isNegative( value: number ): boolean {
	return ( value < 0 );
}


// TESTS //

// The function returns a number...
{
	const x = [ 1, 2, 3 ];
	const y = [ -1, -2, -3 ];

	countIfs( x, isPositive ); // $ExpectType number
	countIfs( x, isPositive, y, isNegative ); // $ExpectType number
	countIfs( x, isPositive, x, isPositive, y, isNegative ); // $ExpectType number
	countIfs( x, isPositive, x, isPositive, x, isPositive, y, isNegative ); // $ExpectType number
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, y, isNegative ); // $ExpectType number
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, isPositive, y, isNegative ); // $ExpectType number
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, isPositive, y, isNegative ); // $ExpectType number

	countIfs( new Float64Array( x ), isPositive, new Float64Array( y ), isNegative ); // $ExpectType number
	countIfs( new Float32Array( x ), isPositive, new Float32Array( y ), isNegative ); // $ExpectType number
	countIfs( new Int32Array( x ), isPositive, new Int32Array( y ), isNegative ); // $ExpectType number
	countIfs( new Int16Array( x ), isPositive, new Int16Array( y ), isNegative ); // $ExpectType number
	countIfs( new Int8Array( x ), isPositive, new Int8Array( y ), isNegative ); // $ExpectType number
	countIfs( new Uint32Array( x ), isPositive, new Uint32Array( y ), isNegative ); // $ExpectType number
	countIfs( new Uint16Array( x ), isPositive, new Uint16Array( y ), isNegative ); // $ExpectType number
	countIfs( new Uint8Array( x ), isPositive, new Uint8Array( y ), isNegative ); // $ExpectType number
	countIfs( new Uint8ClampedArray( x ), isPositive, new Uint8ClampedArray( y ), isNegative ); // $ExpectType number
	countIfs( toAccessorArray( x ), isPositive, toAccessorArray( y ), isNegative ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	countIfs( 2, isPositive ); // $ExpectError
	countIfs( false, isPositive ); // $ExpectError
	countIfs( true, isPositive ); // $ExpectError
	countIfs( {}, isPositive ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, 'abc' ); // $ExpectError
	countIfs( x, 2 ); // $ExpectError
	countIfs( x, false ); // $ExpectError
	countIfs( x, true ); // $ExpectError
	countIfs( x, null ); // $ExpectError
	countIfs( x, void 0 ); // $ExpectError
	countIfs( x, {} ); // $ExpectError
	countIfs( x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, 2, isNegative ); // $ExpectError
	countIfs( x, isPositive, false, isNegative ); // $ExpectError
	countIfs( x, isPositive, true, isNegative ); // $ExpectError
	countIfs( x, isPositive, {}, isNegative ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, 'abc' ); // $ExpectError
	countIfs( x, isPositive, x, 2 ); // $ExpectError
	countIfs( x, isPositive, x, false ); // $ExpectError
	countIfs( x, isPositive, x, true ); // $ExpectError
	countIfs( x, isPositive, x, null ); // $ExpectError
	countIfs( x, isPositive, x, void 0 ); // $ExpectError
	countIfs( x, isPositive, x, {} ); // $ExpectError
	countIfs( x, isPositive, x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a fifth argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, 2, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, false, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, true, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, {}, isNegative ); // $ExpectError
}

// The compiler throws an error if the function is provided a sixth argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, x, 'abc' ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, 2 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, false ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, true ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, null ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, void 0 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, {} ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a seventh argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, x, isPositive, 2, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, false, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, true, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, {}, isNegative ); // $ExpectError
}

// The compiler throws an error if the function is provided an eighth argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, x, isPositive, x, 'abc' ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, 2 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, false ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, true ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, null ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, void 0 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, {} ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided a ninth argument which is not a collection...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, 2, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, false, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, true, isNegative ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, {}, isNegative ); // $ExpectError
}

// The compiler throws an error if the function is provided a tenth argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, 'abc' ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, 2 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, false ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, true ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, null ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, void 0 ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, {} ); // $ExpectError
	countIfs( x, isPositive, x, isPositive, x, isPositive, x, isPositive, x, [] ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3 ];

	countIfs(); // $ExpectError
	countIfs( x ); // $ExpectError
}
