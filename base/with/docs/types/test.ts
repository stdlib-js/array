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
import toAccessorArray = require( './../../../../base/to-accessor-array' );
import withArray = require( './index' );


// TESTS //

// The function returns an updated array...
{
	withArray( [ 1, 2, 3, 4 ], 0, 5 ); // $ExpectType void | Collection<number> | AccessorArrayLike<number>
	withArray( new Complex128Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType void | Complex128Array
	withArray( new Complex64Array( 5 ), 0, { 're': 1.0, 'im': 1.0 } ); // $ExpectType void | Complex64Array
	withArray( toAccessorArray( [ 1, 2, 3, 4 ] ), 0, 5 ); // $ExpectType void | Collection<number> | AccessorArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not a collection...
{
	withArray( 5, 0, 5 ); // $ExpectError
	withArray( true, 0, 5 ); // $ExpectError
	withArray( false, 0, 5 ); // $ExpectError
	withArray( null, 0, 5 ); // $ExpectError
	withArray( void 0, 0, 5 ); // $ExpectError
	withArray( {}, 0, 5 ); // $ExpectError
	withArray( ( x: number ): number => x, 0, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument which is not a number...
{
	const x = [ 1, 2, 3, 4 ];

	withArray( x, 'abc', 5 ); // $ExpectError
	withArray( x, true, 5 ); // $ExpectError
	withArray( x, false, 5 ); // $ExpectError
	withArray( x, null, 5 ); // $ExpectError
	withArray( x, void 0, 5 ); // $ExpectError
	withArray( x, [ '1' ], 5 ); // $ExpectError
	withArray( x, {}, 5 ); // $ExpectError
	withArray( x, ( x: number ): number => x, 5 ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	const x = [ 1, 2, 3, 4 ];

	withArray(); // $ExpectError
	withArray( x ); // $ExpectError
	withArray( x, 0 ); // $ExpectError
	withArray( x, 0, 0, 5 ); // $ExpectError
}
