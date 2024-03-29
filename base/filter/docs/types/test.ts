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
import filter = require( './index' );

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

// The function returns a collection...
{
	filter( [ 1, 2, 3 ], isPositive ); // $ExpectType number[]
	filter( new Float64Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Float64Array
	filter( new Float32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Float32Array
	filter( new Int32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int32Array
	filter( new Int16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int16Array
	filter( new Int8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int8Array
	filter( new Uint32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint32Array
	filter( new Uint16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint16Array
	filter( new Uint8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint8Array
	filter( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint8ClampedArray
	filter( toAccessorArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number[]

	filter( [ 1, 2, 3 ], isPositive, {} ); // $ExpectType number[]
	filter( new Float64Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Float64Array
	filter( new Float32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Float32Array
	filter( new Int32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int32Array
	filter( new Int16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int16Array
	filter( new Int8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int8Array
	filter( new Uint32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint32Array
	filter( new Uint16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint16Array
	filter( new Uint8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint8Array
	filter( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint8ClampedArray
	filter( toAccessorArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	filter( 2, isPositive ); // $ExpectError
	filter( false, isPositive ); // $ExpectError
	filter( true, isPositive ); // $ExpectError
	filter( {}, isPositive ); // $ExpectError

	filter( 2, isPositive, {} ); // $ExpectError
	filter( false, isPositive, {} ); // $ExpectError
	filter( true, isPositive, {} ); // $ExpectError
	filter( {}, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	filter( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	filter( [ 1, 2, 3 ], 2 ); // $ExpectError
	filter( [ 1, 2, 3 ], false ); // $ExpectError
	filter( [ 1, 2, 3 ], true ); // $ExpectError
	filter( [ 1, 2, 3 ], null ); // $ExpectError
	filter( [ 1, 2, 3 ], void 0 ); // $ExpectError
	filter( [ 1, 2, 3 ], {} ); // $ExpectError
	filter( [ 1, 2, 3 ], [] ); // $ExpectError

	filter( [ 1, 2, 3 ], 'abc', {} ); // $ExpectError
	filter( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], false, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], true, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], null, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], void 0, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], {}, {} ); // $ExpectError
	filter( [ 1, 2, 3 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	filter(); // $ExpectError
	filter( [ 1, 2, 3 ] ); // $ExpectError
	filter( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}
