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
import reject = require( './index' );

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
	reject( [ 1, 2, 3 ], isPositive ); // $ExpectType number[]
	reject( new Float64Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Float64Array
	reject( new Float32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Float32Array
	reject( new Int32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int32Array
	reject( new Int16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int16Array
	reject( new Int8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Int8Array
	reject( new Uint32Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint32Array
	reject( new Uint16Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint16Array
	reject( new Uint8Array( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint8Array
	reject( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType Uint8ClampedArray
	reject( toAccessorArray( [ 1, 2, 3 ] ), isPositive ); // $ExpectType number[]

	reject( [ 1, 2, 3 ], isPositive, {} ); // $ExpectType number[]
	reject( new Float64Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Float64Array
	reject( new Float32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Float32Array
	reject( new Int32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int32Array
	reject( new Int16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int16Array
	reject( new Int8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Int8Array
	reject( new Uint32Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint32Array
	reject( new Uint16Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint16Array
	reject( new Uint8Array( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint8Array
	reject( new Uint8ClampedArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType Uint8ClampedArray
	reject( toAccessorArray( [ 1, 2, 3 ] ), isPositive, {} ); // $ExpectType number[]
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	reject( 2, isPositive ); // $ExpectError
	reject( false, isPositive ); // $ExpectError
	reject( true, isPositive ); // $ExpectError
	reject( {}, isPositive ); // $ExpectError

	reject( 2, isPositive, {} ); // $ExpectError
	reject( false, isPositive, {} ); // $ExpectError
	reject( true, isPositive, {} ); // $ExpectError
	reject( {}, isPositive, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a function...
{
	reject( [ 1, 2, 3 ], 'abc' ); // $ExpectError
	reject( [ 1, 2, 3 ], 2 ); // $ExpectError
	reject( [ 1, 2, 3 ], false ); // $ExpectError
	reject( [ 1, 2, 3 ], true ); // $ExpectError
	reject( [ 1, 2, 3 ], null ); // $ExpectError
	reject( [ 1, 2, 3 ], void 0 ); // $ExpectError
	reject( [ 1, 2, 3 ], {} ); // $ExpectError
	reject( [ 1, 2, 3 ], [] ); // $ExpectError

	reject( [ 1, 2, 3 ], 'abc', {} ); // $ExpectError
	reject( [ 1, 2, 3 ], 2, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], false, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], true, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], null, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], void 0, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], {}, {} ); // $ExpectError
	reject( [ 1, 2, 3 ], [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	reject(); // $ExpectError
	reject( [ 1, 2, 3 ] ); // $ExpectError
	reject( [ 1, 2, 3 ], isPositive, {}, 3 ); // $ExpectError
}
