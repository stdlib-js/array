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

import AccessorArray = require( './../../../../base/accessor' );
import Complex128Array = require( './../../../../complex128' );
import Complex64Array = require( './../../../../complex64' );
import Complex128 = require( '@stdlib/complex/float64/ctor' );
import Complex64 = require( '@stdlib/complex/float32/ctor' );
import setter = require( './index' );

// TESTS //

// The function returns a function...
{
	setter( 'complex128' ); // $ExpectType SetComplex128
	setter( 'complex64' ); // $ExpectType SetComplex64
	setter<number>( 'foo' ); // $ExpectType SetArrayLike<number>
}

// The compiler throws an error if the function is provided a first argument which is not a string...
{
	setter( 5 ); // $ExpectError
	setter( true ); // $ExpectError
	setter( false ); // $ExpectError
	setter( null ); // $ExpectError
	setter( {} ); // $ExpectError
	setter( [] ); // $ExpectError
	setter( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	setter(); // $ExpectError
	setter( 'complex128', {} ); // $ExpectError
}

// The function returns a function which sets an array element...
{
	const set1 = setter<number>( 'foo' );
	const x1 = new AccessorArray( [ 1, 2, 3 ] );
	set1( x1, 2, 10 ); // $ExpectType void

	const set2 = setter( 'complex128' );
	const x2 = new Complex128Array( [ 1, 2, 3, 4 ] );
	set2( x2, 1, new Complex128( 5, 6 ) ); // $ExpectType void

	const set3 = setter( 'complex64' );
	const x3 = new Complex64Array( [ 1, 2, 3, 4 ] );
	set3( x3, 1, new Complex64( 7, 8 ) ); // $ExpectType void
}

// The compiler throws an error if the returned function is provided a first argument which is not a accessor array...
{
	const set1 = setter( 'foo' );
	set1( 5, 1, 3 ); // $ExpectError
	set1( true, 1, 3 ); // $ExpectError
	set1( false, 1, 3 ); // $ExpectError
	set1( null, 1, 3 ); // $ExpectError
	set1( {}, 1, 3 ); // $ExpectError

	const set2 = setter( 'complex128' );
	set2( 5, 1, new Complex128( 5, 6 ) ); // $ExpectError
	set2( true, 1, new Complex128( 5, 6 ) ); // $ExpectError
	set2( false, 1, new Complex128( 5, 6 ) ); // $ExpectError
	set2( null, 1, new Complex128( 5, 6 ) ); // $ExpectError
	set2( {}, 1, new Complex128( 5, 6 ) ); // $ExpectError

	const set3 = setter( 'complex64' );
	set3( 5, 1, new Complex64( 7, 8 ) ); // $ExpectError
	set3( true, 1, new Complex64( 7, 8 ) ); // $ExpectError
	set3( false, 1, new Complex64( 7, 8 ) ); // $ExpectError
	set3( null, 1, new Complex64( 7, 8 ) ); // $ExpectError
	set3( {}, 1, new Complex64( 7, 8 ) ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a second argument which is not a number...
{
	const set1 = setter( 'foo' );
	set1( new AccessorArray( [ 1, 2, 3 ] ), '5', 3 ); // $ExpectError
	set1( new AccessorArray( [ 1, 2, 3 ] ), true, 3 ); // $ExpectError
	set1( new AccessorArray( [ 1, 2, 3 ] ), false, 3 ); // $ExpectError
	set1( new AccessorArray( [ 1, 2, 3 ] ), null, 3 ); // $ExpectError
	set1( new AccessorArray( [ 1, 2, 3 ] ), {}, 3 ); // $ExpectError

	const set2 = setter( 'complex128' );
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), '5', new Complex128( 5, 6 ) ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), true, new Complex128( 5, 6 ) ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), false, new Complex128( 5, 6 ) ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), null, new Complex128( 5, 6 ) ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), {}, new Complex128( 5, 6 ) ); // $ExpectError

	const set3 = setter( 'complex64' );
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), '5', new Complex64( 7, 8 ) ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), true, new Complex64( 7, 8 ) ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), false, new Complex64( 7, 8 ) ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), null, new Complex64( 7, 8 ) ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), {}, new Complex64( 7, 8 ) ); // $ExpectError
}

// The compiler throws an error if the returned function is provided a third argument which is not a valid value...
{
	const set2 = setter( 'complex128' );
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), 1, '5' ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), 1, true ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), 1, false ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), 1, null ); // $ExpectError
	set2( new Complex128Array( [ 1, 2, 3, 4 ] ), 1, {} ); // $ExpectError

	const set3 = setter( 'complex64' );
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), 1, '5' ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), 1, true ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), 1, false ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), 1, null ); // $ExpectError
	set3( new Complex64Array( [ 1, 2, 3, 4 ] ), 1, {} ); // $ExpectError
}

// The compiler throws an error if the returned function is provided an unsupported number of arguments...
{
	const set1 = setter( 'foo' );
	set1(); // $ExpectError
	set1( [] ); // $ExpectError
	set1( [], 1 ); // $ExpectError
	set1( [], 1, 2, 2 ); // $ExpectError

	const set2 = setter( 'complex128' );
	set2(); // $ExpectError
	set2( new Complex128Array( [] ) ); // $ExpectError
	set2( new Complex128Array( [] ), 1 ); // $ExpectError
	set2( new Complex128Array( [] ), 1, new Complex128( 5, 6 ), 2 ); // $ExpectError

	const set3 = setter( 'complex64' );
	set3(); // $ExpectError
	set3( new Complex64Array( [] ) ); // $ExpectError
	set3( new Complex64Array( [] ), 1 ); // $ExpectError
	set3( new Complex64Array( [] ), 1, new Complex64( 7, 8 ), 2 ); // $ExpectError
}
