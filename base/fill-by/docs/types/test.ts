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

import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import BooleanArray = require( './../../../../bool' );
import fillBy = require( './index' );

/**
* Callback function.
*
* @param value - current array element
* @returns fill value
*/
function fcn<T>( value: T ): T {
	return value;
}


// TESTS //

// The function returns an array...
{
	fillBy<number, number>( [ 1, 2, 3 ], 0, 3, fcn ); // $ExpectType number[]
	fillBy( new Float64Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Float64Array
	fillBy( new Float32Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Float32Array
	fillBy( new Int32Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Int32Array
	fillBy( new Int16Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Int16Array
	fillBy( new Int8Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Int8Array
	fillBy( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Uint32Array
	fillBy( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Uint16Array
	fillBy( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Uint8Array
	fillBy( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, fcn ); // $ExpectType Uint8ClampedArray
	fillBy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, fcn ); // $ExpectType Complex128Array
	fillBy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, fcn ); // $ExpectType Complex64Array
	fillBy( new BooleanArray( [ true, false, true, false ] ), 0, 3, fcn ); // $ExpectType BooleanArray

	fillBy<number, number>( [ 1, 2, 3 ], 0, 3, fcn, {} ); // $ExpectType number[]
	fillBy( new Float64Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Float64Array
	fillBy( new Float32Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Float32Array
	fillBy( new Int32Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Int32Array
	fillBy( new Int16Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Int16Array
	fillBy( new Int8Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Int8Array
	fillBy( new Uint32Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Uint32Array
	fillBy( new Uint16Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Uint16Array
	fillBy( new Uint8Array( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Uint8Array
	fillBy( new Uint8ClampedArray( [ 1, 2, 3 ] ), 0, 3, fcn, {} ); // $ExpectType Uint8ClampedArray
	fillBy( new Complex128Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, fcn, {} ); // $ExpectType Complex128Array
	fillBy( new Complex64Array( [ 1, 2, 3, 4, 5, 6 ] ), 0, 3, fcn, {} ); // $ExpectType Complex64Array
	fillBy( new BooleanArray( [ true, false, true, false ] ), 0, 3, fcn, {} ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	fillBy( 5, 0, 3, fcn ); // $ExpectError
	fillBy( true, 0, 3, fcn ); // $ExpectError
	fillBy( false, 0, 3, fcn ); // $ExpectError
	fillBy( null, 0, 3, fcn ); // $ExpectError
	fillBy( void 0, 0, 3, fcn ); // $ExpectError
	fillBy( {}, 0, 3, fcn ); // $ExpectError

	fillBy( 5, 0, 3, fcn, {} ); // $ExpectError
	fillBy( true, 0, 3, fcn, {} ); // $ExpectError
	fillBy( false, 0, 3, fcn, {} ); // $ExpectError
	fillBy( null, 0, 3, fcn, {} ); // $ExpectError
	fillBy( void 0, 0, 3, fcn, {} ); // $ExpectError
	fillBy( {}, 0, 3, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	fillBy( x, '5', 3, fcn ); // $ExpectError
	fillBy( x, true, 3, fcn ); // $ExpectError
	fillBy( x, false, 3, fcn ); // $ExpectError
	fillBy( x, null, 3, fcn ); // $ExpectError
	fillBy( x, void 0, 3, fcn ); // $ExpectError
	fillBy( x, {}, 3, fcn ); // $ExpectError
	fillBy( x, ( x: number ): number => x, 3, fcn ); // $ExpectError

	fillBy( x, '5', 3, fcn, {} ); // $ExpectError
	fillBy( x, true, 3, fcn, {} ); // $ExpectError
	fillBy( x, false, 3, fcn, {} ); // $ExpectError
	fillBy( x, null, 3, fcn, {} ); // $ExpectError
	fillBy( x, void 0, 3, fcn, {} ); // $ExpectError
	fillBy( x, {}, 3, fcn, {} ); // $ExpectError
	fillBy( x, ( x: number ): number => x, 3, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument which is not a number...
{
	const x = [ 1, 2, 3 ];

	fillBy( x, 0, '5', fcn ); // $ExpectError
	fillBy( x, 0, true, fcn ); // $ExpectError
	fillBy( x, 0, false, fcn ); // $ExpectError
	fillBy( x, 0, null, fcn ); // $ExpectError
	fillBy( x, 0, void 0, fcn ); // $ExpectError
	fillBy( x, 0, {}, fcn ); // $ExpectError
	fillBy( x, 0, ( x: number ): number => x, fcn ); // $ExpectError

	fillBy( x, 0, '5', fcn, {} ); // $ExpectError
	fillBy( x, 0, true, fcn, {} ); // $ExpectError
	fillBy( x, 0, false, fcn, {} ); // $ExpectError
	fillBy( x, 0, null, fcn, {} ); // $ExpectError
	fillBy( x, 0, void 0, fcn, {} ); // $ExpectError
	fillBy( x, 0, {}, fcn, {} ); // $ExpectError
	fillBy( x, 0, ( x: number ): number => x, fcn, {} ); // $ExpectError
}

// The compiler throws an error if the function is provided a fourth argument which is not a function...
{
	const x = [ 1, 2, 3 ];

	fillBy( x, 0, 3, '5' ); // $ExpectError
	fillBy( x, 0, 3, true ); // $ExpectError
	fillBy( x, 0, 3, false ); // $ExpectError
	fillBy( x, 0, 3, null ); // $ExpectError
	fillBy( x, 0, 3, void 0 ); // $ExpectError
	fillBy( x, 0, 3, {} ); // $ExpectError
	fillBy( x, 0, 3, [] ); // $ExpectError

	fillBy( x, 0, 3, '5', {} ); // $ExpectError
	fillBy( x, 0, 3, true, {} ); // $ExpectError
	fillBy( x, 0, 3, false, {} ); // $ExpectError
	fillBy( x, 0, 3, null, {} ); // $ExpectError
	fillBy( x, 0, 3, void 0, {} ); // $ExpectError
	fillBy( x, 0, 3, {}, {} ); // $ExpectError
	fillBy( x, 0, 3, [], {} ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	fillBy(); // $ExpectError
	fillBy( [ 1, 2, 3 ] ); // $ExpectError
	fillBy( [ 1, 2, 3 ], 0 ); // $ExpectError
	fillBy( [ 1, 2, 3 ], 0, 1 ); // $ExpectError
	fillBy( [ 1, 2, 3 ], 0, 1, fcn, {}, {} ); // $ExpectError
}
