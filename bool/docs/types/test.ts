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

/* eslint-disable @typescript-eslint/no-unused-expressions */

import ArrayBuffer = require( './../../../buffer' );
import BooleanArray = require( './index' );

/**
* Callback function.
*
* @private
* @param v - value
* @returns input value
*/
function clbk( v: boolean ): boolean {
	return v;
}


// TESTS //

// The function returns a boolean array...
{
	new BooleanArray(); // $ExpectType BooleanArray
	BooleanArray(); // $ExpectType BooleanArray
	new BooleanArray( 2 ); // $ExpectType BooleanArray
	BooleanArray( 2 ); // $ExpectType BooleanArray
	new BooleanArray( [ 1.0, -1.0 ] ); // $ExpectType BooleanArray
	BooleanArray( [ 1.0, -1.0 ] ); // $ExpectType BooleanArray

	const buf = new ArrayBuffer( 16 );
	new BooleanArray( buf ); // $ExpectType BooleanArray
	BooleanArray( buf ); // $ExpectType BooleanArray
	new BooleanArray( buf, 8 ); // $ExpectType BooleanArray
	BooleanArray( buf, 8 ); // $ExpectType BooleanArray
	new BooleanArray( buf, 8, 2 ); // $ExpectType BooleanArray
	BooleanArray( buf, 8, 2 ); // $ExpectType BooleanArray
}

// The compiler throws an error if the function is provided a first argument that is not a number, typed array, array-like object, or array buffer...
{
	new BooleanArray( true ); // $ExpectError
	new BooleanArray( false ); // $ExpectError
	new BooleanArray( null ); // $ExpectError
	new BooleanArray( {} ); // $ExpectError
	new BooleanArray( ( x: boolean ): boolean => x ); // $ExpectError

	BooleanArray( true ); // $ExpectError
	BooleanArray( false ); // $ExpectError
	BooleanArray( null ); // $ExpectError
	BooleanArray( {} ); // $ExpectError
	BooleanArray( ( x: boolean ): boolean => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new BooleanArray( buf, true ); // $ExpectError
	new BooleanArray( buf, false ); // $ExpectError
	new BooleanArray( buf, null ); // $ExpectError
	new BooleanArray( buf, 'abc' ); // $ExpectError
	new BooleanArray( buf, {} ); // $ExpectError
	new BooleanArray( buf, ( x: boolean ): boolean => x ); // $ExpectError

	BooleanArray( buf, true ); // $ExpectError
	BooleanArray( buf, false ); // $ExpectError
	BooleanArray( buf, null ); // $ExpectError
	BooleanArray( buf, 'abc' ); // $ExpectError
	BooleanArray( buf, {} ); // $ExpectError
	BooleanArray( buf, ( x: boolean ): boolean => x ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a number...
{
	const buf = new ArrayBuffer( 16 );
	new BooleanArray( buf, 8, true ); // $ExpectError
	new BooleanArray( buf, 8, false ); // $ExpectError
	new BooleanArray( buf, 8, null ); // $ExpectError
	new BooleanArray( buf, 8, 'abc' ); // $ExpectError
	new BooleanArray( buf, 8, {} ); // $ExpectError
	new BooleanArray( buf, 8, ( x: boolean ): boolean => x ); // $ExpectError

	BooleanArray( buf, 8, true ); // $ExpectError
	BooleanArray( buf, 8, false ); // $ExpectError
	BooleanArray( buf, 8, null ); // $ExpectError
	BooleanArray( buf, 8, 'abc' ); // $ExpectError
	BooleanArray( buf, 8, {} ); // $ExpectError
	BooleanArray( buf, 8, ( x: boolean ): boolean => x ); // $ExpectError
}

// The `from` method returns a boolean array...
{
	BooleanArray.from( [ true, true ] ); // $ExpectType BooleanArray
	BooleanArray.from( [ true, true ], ( x: boolean ): boolean => x ); // $ExpectType BooleanArray
	BooleanArray.from( [ true ], clbk, {} ); // $ExpectType BooleanArray
}

// The compiler throws an error if the `from` method is provided a first argument which is not array-like or iterable...
{
	BooleanArray.from( true ); // $ExpectError
	BooleanArray.from( false ); // $ExpectError
	BooleanArray.from( 123 ); // $ExpectError
	BooleanArray.from( null ); // $ExpectError
	BooleanArray.from( {} ); // $ExpectError

	BooleanArray.from( true, clbk ); // $ExpectError
	BooleanArray.from( false, clbk ); // $ExpectError
	BooleanArray.from( 123, clbk ); // $ExpectError
	BooleanArray.from( null, clbk ); // $ExpectError
	BooleanArray.from( {}, clbk ); // $ExpectError

	BooleanArray.from( true, clbk, {} ); // $ExpectError
	BooleanArray.from( false, clbk, {} ); // $ExpectError
	BooleanArray.from( 123, clbk, {} ); // $ExpectError
	BooleanArray.from( null, clbk, {} ); // $ExpectError
	BooleanArray.from( {}, clbk, {} ); // $ExpectError
}

// The compiler throws an error if the `from` method is provided a second argument which is not a function with a supported signature...
{
	BooleanArray.from( [ true, true ], true ); // $ExpectError
	BooleanArray.from( [ true, true ], false ); // $ExpectError
	BooleanArray.from( [ true, true ], 123 ); // $ExpectError
	BooleanArray.from( [ true, true ], null ); // $ExpectError
	BooleanArray.from( [ true, true ], {} ); // $ExpectError
}

// The `of` method returns a boolean array...
{
	BooleanArray.of( true, true, true, true ); // $ExpectType BooleanArray
}
