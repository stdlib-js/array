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

import toAccessorArray = require( './../../../../base/to-accessor-array' );
import countIf = require( './index' );

/**
* Tests whether a value is positive.
*
* @param value - input value
* @returns boolean indicating whether an element is positive
*/
function isPositive( value: number ): boolean {
	return ( value > 0 );
}


// TESTS //

// The function returns a number...
{
	countIf( [ 1, 2, 3 ], isPositive ); // $ExpectType number
	countIf( new Float64Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Float32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Int32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Int16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Int8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Uint32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Uint16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Uint8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number
	countIf( toAccessorArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number

	countIf( [ 1, 2, 3 ], isPositive, {} ); // $ExpectType number
	countIf( new Float64Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Float32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Int32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Int16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Int8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Uint32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Uint16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Uint8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
	countIf( toAccessorArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	countIf( 2, isPositive ); // $ExpectError
	countIf( false, isPositive ); // $ExpectError
	countIf( true, isPositive ); // $ExpectError
	countIf( {}, isPositive ); // $ExpectError

	countIf( 2, isPositive, {} ); // $ExpectError
	countIf( false, isPositive, {} ); // $ExpectError
	countIf( true, isPositive, {} ); // $ExpectError
	countIf( {}, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	countIf( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	countIf( [ 1, 2, 3 ], 2 ); // $ExpectError
	countIf( [ 1, 2, 3 ], false ); // $ExpectError
	countIf( [ 1, 2, 3 ], true ); // $ExpectError
	countIf( [ 1, 2, 3 ], null ); // $ExpectError
	countIf( [ 1, 2, 3 ], void 0 ); // $ExpectError
	countIf( [ 1, 2, 3 ], {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], [] ); // $ExpectError

	countIf( [ 1, 2, 3 ], 'abc', {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], false, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], true, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], null, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], void 0, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], {}, {} ); // $ExpectError
	countIf( [ 1, 2, 3 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	countIf(); // $ExpectError
	countIf( [ 1, 2, 3 ] ); // $ExpectError
	countIf( [ 1, 2, 3 ], isPositive, {}, {} ); // $ExpectError
}
